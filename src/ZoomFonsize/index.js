/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';

const ZoomFonsize = () => {
  const jsCode = `
  <style>
    body { font-size: 120%; word-wrap: break-word; overflow-wrap: break-word; }
</style>
  `;
  return (
    <>
      <WebView
        // source={{
        //   // uri: 'https://cse.google.co.jp/cse?cx=partner-pub-0789722191899489%3A8228794694&ie=UTF-8',
        //   uri: 'https://kenh14.vn',
        //   // uri: 'https://apple.com',
        // }}
        source={require('../../release_note_ios_mobile_en_darkmode.html')}
        style={{flex: 1, backgroundColor: '#DDD'}}
      />
    </>
  );
};

export default ZoomFonsize;
