import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

class VideoPlay extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text> My Video Project</Text>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          style={{
            width: 300,
            height: 300,
          }}
          fullscreen={true}
          controls={true}
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
          resizeMode='cover'
       />
      </View>
    );
  }
}

export default VideoPlay;

const styles = StyleSheet.create({});
