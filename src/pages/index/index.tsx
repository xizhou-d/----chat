import { useState, useRef } from 'react'
import { View } from '@tarojs/components'
import Header from '@/components/header'
import Taro, { useLoad } from '@tarojs/taro'

import ChatList, { ChatItemListType } from '@/components/chatlist'
import Footer from '@/components/footer'
import './index.styl'

export default function Index() {
    const [messages, setMessages] = useState<ChatItemListType>([])
    const chatMessageRef = useRef(null)

    useLoad(() => {
        console.log('Page loaded.')
    })

    const handleSubmit = async (value) => {
        const newMessagesList = [...messages, { role: 'user' as const, content: value}]
        setMessages(newMessagesList)
        const res = await Taro.request({
            method: 'POST',
            url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=24.154d7981d75794ec47667c2540a0f867.2592000.1712388264.282335-55381339',
            data: {
                messages: newMessagesList
            },
        })
        console.log('res', res)
        setMessages([...newMessagesList, { role: 'assistant', content: res.data.result}])
    }

    return (
        <View className='index'>
            <Header num={messages.length} />
            <ChatList
              ref={chatMessageRef}
              messages={messages}
            />
            <Footer
              onSubmit={handleSubmit}
            />
        </View>
    )
}
