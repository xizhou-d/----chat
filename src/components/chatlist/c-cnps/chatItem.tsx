import { View, Image, Button } from '@tarojs/components'
import ChatIcon from '@/assets/chat.svg'
import userIcon from '@/assets/user.svg'
import './chatItem.styl'

export type ChatItemType = {
    role: 'user' | 'assistant',
    content: string
}

export default function chatItem({role, content}: ChatItemType) {
  return (
    <View className={role === 'user' ? 'chat_chat-message-user' : 'chat_chat-message'}>
      <View className='chat_chat-message-header'>
        <View className='chat_chat-message-avatar'>
            <Image src={role !== 'user' ? ChatIcon : userIcon} style='width: 30px; height: 30px;' />
        </View>
      </View>
      <View className='chat_chat-message-item'>{content}</View>
    </View>
  )
}
