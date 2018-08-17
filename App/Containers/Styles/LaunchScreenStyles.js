import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  transparentHeader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0
  },
  inputIOS: {
    // ...Fonts.style.regular,
    // marginTop: Metrics.baseMargin,
    // backgroundColor: Colors.white,
    // paddingHorizontal: Metrics.baseMargin,
    height: 60,
    color: Colors.white,
    flex: 1
  },
  inputAndroid: {
    ...Fonts.style.regular,
    // marginTop: Metrics.baseMargin,
    // backgroundColor: Colors.white,
    // paddingHorizontal: Metrics.baseMargin,
    height: 60,
    color: Colors.white,
    flex: 1
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
