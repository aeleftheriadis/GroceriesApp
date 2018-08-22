import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.ember,
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.baseMargin
  },
  buttonText: {
    ...Fonts.style.description,
    fontSize: Fonts.size.smallButton,
    margin: 10,
    textAlign: 'center',
    color: Colors.snow,
    fontFamily: Fonts.type.bold
  },
  iconButton: {
    fontSize: Metrics.icons.small,
    color: Colors.white
  }
})
