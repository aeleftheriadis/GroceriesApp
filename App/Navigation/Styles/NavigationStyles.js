import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    backgroundColor: Colors.white
  },
  tabBarLabel: {
    ...Fonts.style.h4
  },
  tabBar: {
    backgroundColor: Colors.lightGreyTransparent
  }
})
