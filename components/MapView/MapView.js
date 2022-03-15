import React, { useEffect } from "react";
import WebView from "react-native-webview";

export const MapView = ({ onSelectCoords }) => {
    const sourceProps = {
        // on project '/android/app/src/main/assets/'
        uri: 'file:///android_asset/MapView/index.html',
    };

    const handleOnMessage = (event) => {
        const dataFromMap = JSON.parse(event.nativeEvent.data);
        onSelectCoords && onSelectCoords(dataFromMap);
    };

    return (
        <WebView 
            style={{ flex: 1 }}
            source={sourceProps}
            to
            javaScriptEnabled
            domStorageEnabled
            onMessage={handleOnMessage}
        />
    )
      
}