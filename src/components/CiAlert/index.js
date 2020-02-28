import { Alert } from 'react-native'

export function CiAlert(props) {
  const { title, description } = props

  Alert.alert(title, description, [], { cancelable: true })
}
