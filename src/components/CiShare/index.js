import { Share } from 'react-native'

export function CiShare(props) {
  const { message, url, title, dialogTitle } = props

  Share.share({ message, url, title }, { dialogTitle })
}
