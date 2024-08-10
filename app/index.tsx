import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Video
        source={{ uri: 'http://cloudstream4k.com:1935/utv/live/playlist.m3u8' }} // Replace with your video URL
        style={styles.fullScreen}
        useNativeControls
        resizeMode={ResizeMode.STRETCH} // You can adjust the resizeMode as needed (e.g., 'cover', 'stretch')
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;