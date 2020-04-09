import MessageUserText from './MessageUserText'
import MessageUserImage from './MessageUserImage'
import MessageSystem from './MessageSystem'
import MessageNotSupport from './MessageNotSupport'

const components = {
  MessageUserText,
  MessageUserImage,
  MessageSystem,
  MessageNotSupport
}

const componentsMap = {}

Object.keys(components).forEach(name => {
  const type = name.replace(/^Message(\w)/, (str, $1) => {
    return $1 && $1.toLowerCase()
  })
  componentsMap[type] = components[name]
})

export {
  componentsMap
}

export default components
