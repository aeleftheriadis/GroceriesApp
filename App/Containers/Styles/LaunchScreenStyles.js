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
    shadowOpacity: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pickerContainer: {
    top: Metrics.smallMargin,
    width: 95
  },
  customDropDown: {
    right: 4,
    top: 20,
    position: 'absolute'
  },
  picker: {
    height: 50,
    width: 120,
    backgroundColor: Colors.transparent,
    justifyContent: 'center'
  },
  pickerItem: {
    ...Fonts.style.h1,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.darkGrey
  }
})
