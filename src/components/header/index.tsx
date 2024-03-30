import { View, Image, Button } from '@tarojs/components'
import BackIcon from '@/assets/back.svg'
import ShareIcon from '@/assets/share.svg'
import './index.styl'

type HeaderPropsType = {
    num: number
}

export default function Header({ num }: HeaderPropsType) {
  return (
    <View className='window-header'>
      <View className='header'>
        <View className='window-actions'>
          <Button>
            <Image src={BackIcon} style='width: 16px; height: 16px;' />
          </Button>
        </View>
        <View className='window-header-title'>
          <View className='window-header-main-title'>新的聊天</View>
          <View className='window-header-sub-title'>{`共 ${num} 条对话`}</View>
        </View>
        <View className='window-actions'>
          <Button>
          <Image src={ShareIcon} style='width: 16px; height: 16px;' />
          </Button>
        </View>
      </View>
    </View>
  )
}
