/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';

const MyWeb = () => {
  const html = `<div style="background-color:red;position: absolute;height: 100px;width: 100px;right: 0px";top: 0px"><button id="demo" >find</button><button onclick="findNext()" >next</button></div>`;
  const jsCode = `
  let htmlObj = document.getElementById('main'); 
  htmlObj.innerHTML = htmlObj.innerHTML + '${html}';
  function myFunction() {  find('new')}
  document.getElementById("demo").addEventListener("click", myFunction);
  const MAXIMUM_HIGHLIGHT_COUNT = 500;
  const SCROLL_OFFSET_Y = 40;
  const SCROLL_DURATION = 100;
  
  const HIGHLIGHT_CLASS_NAME = '__firefox__find-highlight';
  const HIGHLIGHT_CLASS_NAME_ACTIVE = '__firefox__find-highlight-active';
  
  const HIGHLIGHT_COLOR = '#ffde49';
  const HIGHLIGHT_COLOR_ACTIVE = '#f19750';

  const HIGHLIGHT_CSS = ".__firefox__find-highlight {color: red;background-color: '#ffde49'; border-radius: 1px; box-shadow: 0 0 0 2px '#ffde49'; transition: all 100ms ease 100ms;};.__firefox__find-highlight.__firefox__find-highlight-active { background-color: '#f19750'; box-shadow: 0 0 0 4px '#f19750',0 1px 3px 3px rgba(0,0,0,.75); }";
  var lastEscapedQuery = '';
var lastFindOperation = null;
var lastReplacements = null;
var lastHighlights = null;
var activeHighlightIndex = -1;

var highlightSpan = document.createElement('span');
highlightSpan.className = HIGHLIGHT_CLASS_NAME;

var styleElement = document.createElement('style');
styleElement.innerHTML = HIGHLIGHT_CSS;
function find(query) { let trimmedQuery = query.trim(); let escapedQuery = !trimmedQuery    ? trimmedQuery    : query.replace(/([.?*+^$[\\]\\(){}|-])/g, '\\$1');
if (escapedQuery === lastEscapedQuery) { return; };
if (lastFindOperation) {      lastFindOperation.cancel();    };
clear();      lastEscapedQuery = escapedQuery;
if (!escapedQuery) {      window.webkit.messageHandlers.findInPageHandler.postMessage({"securitytoken": SECURITY_TOKEN, "data": {currentResult: 0, totalResults: 0 }});      return;    };
let queryRegExp = new RegExp("(" + escapedQuery + ")", "gi");
lastFindOperation = getMatchingNodeReplacements(queryRegExp, function(replacements, highlights) {      let replacement;      for (let i = 0, length = replacements.length; i < length; i++) {        replacement = replacements[i];          replacement.originalNode.replaceWith(replacement.replacementFragment);      }        lastFindOperation = null;      lastReplacements = replacements;      lastHighlights = highlights;      activeHighlightIndex = -1;        let totalResults = highlights.length;      console.log('1123421323',totalResults);        window.webkit.messageHandlers.findInPageHandler.postMessage({"securitytoken": SECURITY_TOKEN, "data": {totalResults: totalResults }});      findNext();    });
};


function findNext() {    if (lastHighlights) {      activeHighlightIndex = (activeHighlightIndex + lastHighlights.length + 1) % lastHighlights.length;      updateActiveHighlight();    }  }
function findPrevious() {    if (lastHighlights) {      activeHighlightIndex = (activeHighlightIndex + lastHighlights.length - 1) % lastHighlights.length;      updateActiveHighlight();    }  }  
function findDone() {    styleElement.remove();    clear();      lastEscapedQuery = "";  }
function clear() {    if (!lastHighlights) {      return;    }      let replacements = lastReplacements;    let highlights = lastHighlights;      let highlight;    for (let i = 0, length = highlights.length; i < length; i++) {      highlight = highlights[i];        removeHighlight(highlight);    }      lastReplacements = null;    lastHighlights = null;    activeHighlightIndex = -1;  }
function updateActiveHighlight() {    if (!styleElement.parentNode) {      document.body.appendChild(styleElement);    }      let lastActiveHighlight = document.querySelector("." + HIGHLIGHT_CLASS_NAME_ACTIVE);    if (lastActiveHighlight) {      lastActiveHighlight.className = HIGHLIGHT_CLASS_NAME;    }      if (!lastHighlights) {      return;    }      let activeHighlight = lastHighlights[activeHighlightIndex];    if (activeHighlight) {      activeHighlight.className = HIGHLIGHT_CLASS_NAME + " " + HIGHLIGHT_CLASS_NAME_ACTIVE;      scrollToElement(activeHighlight, SCROLL_DURATION);        window.webkit.messageHandlers.findInPageHandler.postMessage({"securitytoken": SECURITY_TOKEN, "data": { currentResult: activeHighlightIndex + 1 }});    } else {      window.webkit.messageHandlers.findInPageHandler.postMessage({"securitytoken": SECURITY_TOKEN, "data": { currentResult: 0 }});    }  }
function removeHighlight(highlight) {    let parent = highlight.parentNode;    if (parent) {      while (highlight.firstChild) {        parent.insertBefore(highlight.firstChild, highlight);      }        highlight.remove();      parent.normalize();    }  }
function asyncTextNodeWalker(iterator) {    let operation = new Operation();    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);      let timeout = setTimeout(function() {      chunkedLoop(function() { return walker.nextNode(); }, function(node) {        if (operation.cancelled) {          return false;        }          iterator(node);        return true;      }, 100).then(function() {        operation.complete();      });    }, 50);      operation.oncancelled = function() {      clearTimeout(timeout);    };      return operation;  }
function getMatchingNodeReplacements(regExp, callback) {
  let replacements = [];    let highlights = [];    let isMaximumHighlightCount = false;
  let operation = asyncTextNodeWalker(function(originalNode) {
    if (!isTextNodeVisible(originalNode)) {
      return;
    }

    let originalTextContent = originalNode.textContent;
    let lastIndex = 0;
    let replacementFragment = document.createDocumentFragment();
    let hasReplacement = false;
    let match;
    while ((match = regExp.exec(originalTextContent))) {
      let matchTextContent = match[0];
      if (match.index > 0) {          let leadingSubstring = originalTextContent.substring(lastIndex, match.index);          replacementFragment.appendChild(document.createTextNode(leadingSubstring));        }
      let element = highlightSpan.cloneNode(false);        element.textContent = matchTextContent;        replacementFragment.appendChild(element);        highlights.push(element);        console.log('element',element);        lastIndex = regExp.lastIndex;        hasReplacement = true;
      if (highlights.length > MAXIMUM_HIGHLIGHT_COUNT) {          isMaximumHighlightCount = true;          break;        }
      replacements.push({          originalNode: originalNode,          replacementFragment: replacementFragment        });
    }
    if (hasReplacement) {
      if (lastIndex < originalTextContent.length) {          let trailingSubstring = originalTextContent.substring(lastIndex, originalTextContent.length);          replacementFragment.appendChild(document.createTextNode(trailingSubstring));        }
    }
    if (isMaximumHighlightCount) {        operation.cancel();        callback(replacements, highlights);      }
  })
  operation.oncompleted = function() {
    callback(replacements, highlights);
  };
  return operation;
};
 function chunkedLoop(condition, iterator, chunkSize) {    return new Promise(function(resolve, reject) {      setTimeout(doChunk, 0);        function doChunk() {        let argument;        for (let i = 0; i < chunkSize; i++) {          argument = condition();          if (!argument || iterator(argument) === false) {            resolve();            return;          }        }          setTimeout(doChunk, 0);      }    });  }
 function scrollToElement(element, duration) {    let rect = element.getBoundingClientRect();      let targetX = clamp(rect.left + window.scrollX - window.innerWidth / 2, 0, document.body.scrollWidth);    let targetY = clamp(SCROLL_OFFSET_Y + rect.top + window.scrollY - window.innerHeight / 2, 0, document.body.scrollHeight);      let startX = window.scrollX;    let startY = window.scrollY;      let deltaX = targetX - startX;    let deltaY = targetY - startY;      let startTimestamp;      function step(timestamp) {      if (!startTimestamp) {        startTimestamp = timestamp;      }        let time = timestamp - startTimestamp;      let percent = Math.min(time / duration, 1);        let x = startX + deltaX * percent;      let y = startY + deltaY * percent;        window.scrollTo(x, y);        if (time < duration) {        requestAnimationFrame(step);      }    }      requestAnimationFrame(step);  }
 function isTextNodeVisible(textNode) {    let element = textNode.parentElement;    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);  }  
 function clamp(value, min, max) {    return Math.max(min, Math.min(value, max));  }
 function Operation() {    this.cancelled = false;    this.completed = false;  }  
 Operation.prototype.constructor = Operation;
 Operation.prototype.cancel = function() {    this.cancelled = true;      if (typeof this.oncancelled === "function") {      this.oncancelled();    }  };
 Operation.prototype.complete = function() {    this.completed = true;      if (typeof this.oncompleted === "function") {      if (!this.cancelled) {        this.oncompleted();      }    }  };
 Object.defineProperty(window.__firefox__, "find", {    enumerable: false,    configurable: false,    writable: false,    value: find  });
 Object.defineProperty(window.__firefox__, "findNext", {    enumerable: false,    configurable: false,    writable: false,    value: findNext  });  
 Object.defineProperty(window.__firefox__, "findPrevious", {    enumerable: false,    configurable: false,    writable: false,    value: findPrevious  });  
 Object.defineProperty(window.__firefox__, "findDone", {    enumerable: false,    configurable: false,    writable: false,    value: findDone  });
 `;
  return (
    <>
      <WebView
        // source={{
        //   // uri: 'https://cse.google.co.jp/cse?cx=partner-pub-0789722191899489%3A8228794694&ie=UTF-8',
        //   uri: 'https://kenh14.vn',
        // }}
        source={require('../../release_note_ios_mobile_en_darkmode.html')}
        // source={require('../../kenh14vn.html')}
        style={{flex: 1, backgroundColor: '#DDD'}}
        injectedJavaScript={jsCode}
        onMessage={event =>
          console.log('===================>', event?.nativeEvent)
        }
      />
    </>
  );
};

export default MyWeb;
