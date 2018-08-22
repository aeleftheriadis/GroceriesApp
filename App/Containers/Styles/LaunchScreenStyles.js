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
    borderBottomWidth: 0,
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  },
  pickerContainer: {
    height: 50,
    width: 130,
    justifyContent: 'center'
  },
  picker: {
    ...Fonts.style.header,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.darkGrey
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
