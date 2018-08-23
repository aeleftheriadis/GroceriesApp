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
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.background
    },
    header: {
      backgroundColor: Colors.white
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
    headerIcon: {
      margin: Metrics.doubleBaseMargin
    },
    sectionTitle: {
      ...Fonts.style.h2,
      color: Colors.green,
      textAlign: 'left'
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
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
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
