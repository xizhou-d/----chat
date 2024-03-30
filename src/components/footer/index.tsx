import { useState } from 'react'
import { View, Textarea, Button, Image } from '@tarojs/components'
import SendIcon from '@/assets/send.svg'
import { text } from 'stream/consumers'

type FooterPropsType = {
  onSubmit: (value: string) => void
}

export default function Footer({ onSubmit }: FooterPropsType) {
    const [textInputValue, setTextInputValue] = useState<string>('')
    
    const submit = () => {
        if (textInputValue) {
            onSubmit(textInputValue)
            setTextInputValue('')
        }
    }
    return (
        <View className='window-footer'>
            <Textarea
              className='chat-input'
              autoHeight
              value={textInputValue}
              onInput={(e) => setTextInputValue(e.detail.value)}
              placeholder='Meta + Enter 发送'
              style='font-size: 14px'
              placeholderStyle='font-size: 14px;'
            ></Textarea>
            <Button className='chat-input-send' onClick={submit}>
                <Image src={SendIcon} style='width: 16px; height: 16px;'></Image>
                <view className='button-icon-text'>发送</view>
            </Button>
        </View>
    )
}
