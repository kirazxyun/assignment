import logo from './logo.png'
import largeImage from './large.jpeg'

let index = 0

function createMessage () {
  index++
  const userIdIndex = Math.floor(Math.random() * 2)
  const userName = ['老王', '小明'][userIdIndex]
  const typeIndex = Math.floor(Math.random() * 4)
  return {
    id: `${index}xx`,
    type: ['userText', 'system', 'userImage', 'sss'][typeIndex],
    content: [
      ['你好', 'hello', 'hi', 'how are you'][Math.floor(Math.random() * 4)],
      [`${userName}撤回了一条消息`, `${userName}加入了群聊`][Math.floor(Math.random() * 2)],
      largeImage
    ][typeIndex],
    imgPlaceholder: typeIndex === 2 ? logo : null,
    userId: ['laowang', 'xiaoming'][userIdIndex],
    userName
  }
  // {
  //   id: `xxx`, // 信息唯一标示id
  //   type: 'userText', // 信息类型：userText-用户文字信息，userImage-用户图片，system-系统信息
  //   content: '你好', // 信息内容，如用户发送的文字信息
  //   imgPlaceholder: null, // 如果是图片，则用这个字段存放缩略图
  //   userId: 'laowang', // 发送信息的用户的id
  //   userName: '老王' // 发送信息的用户的名字
  // }
}

export default (num) => {
  const res = []
  while (num--) {
    res.push(createMessage())
  }
  return res
}
