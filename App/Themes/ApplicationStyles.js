import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'
import { StyleSheet } from 'react-native'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      alignSelf: 'center'
    },
    centerText: {
      textAlign: 'center'
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.background
    },
    headerTitle: {
      ...Fonts.style.h1,
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.darkGrey,
      width: '90%'
    },
    listRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    zeroPadding: {
      padding: 0
    },
    headerIcon: {
      margin: Metrics.doubleBaseMargin
    },
    progressContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: Metrics.doubleBaseMargin
    },
    label: {
      ...Fonts.style.normal,
      alignSelf: 'flex-start',
      color: Colors.grey,
      textAlign: 'left'
    },
    boldLabel: {
      ...Fonts.style.normal,
      alignSelf: 'flex-start',
      color: Colors.black,
      textAlign: 'left',
      marginBottom: Metrics.smallMargin
    },
    productContainer: {
      width: 120,
      backgroundColor: Colors.white,
      margin: 0,
      padding: 0,
      borderWidth: 0,
      paddingRight: Metrics.baseMargin,
      elevation: 0
    },
    productImage: {
      width: 80,
      height: 80
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  }
}

export default ApplicationStyles
