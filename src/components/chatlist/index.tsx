import { forwardRef, useImperativeHandle } from "react";
import { View } from "@tarojs/components";
import "./index.styl";
import ChatItem, { ChatItemType } from "./c-cnps/chatItem";


export type ChatItemListType = ChatItemType[];

export type ChatListPropsType = {
  messages: ChatItemListType;
  ref: any;
};

const ChatList = forwardRef(({ messages }: ChatListPropsType, ref) => {
  console.log("messages", messages);
  const scrollBottom = () => {
    
  }

  useImperativeHandle(ref, () => {
    return {
        scrollBottom
    }
  })
  return (
    <View className='window-body'>
      {messages.map((chat, index) => {
        return <ChatItem key={index} role={chat.role} content={chat.content} />;
      })}
    </View>
  );
});

export default ChatList;
