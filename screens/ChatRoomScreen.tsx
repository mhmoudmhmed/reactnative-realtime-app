import React from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BG from '../assets/images/BG.png';
import ChatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage/index';
import InputBox from '../components/InputBox';


const ChatRoomScreen = () => {

  const route =useRoute();


  return (
    <ImageBackground source={BG} style={{ width: '100%', height: '100%' }}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />

      <InputBox />
      
    </ImageBackground>
  );
};

export default ChatRoomScreen;
