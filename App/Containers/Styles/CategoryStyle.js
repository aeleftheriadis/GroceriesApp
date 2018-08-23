import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Metrics.baseMargin
  },
  row: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    ...Fonts.style.normal,
    alignSelf: 'flex-start',
    color: Colors.black,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  sectionHeader: {
    ...Fonts.style.h2,
    textAlign: 'left',
    color: Colors.green
  },
  headerButton: {
    ...Fonts.style.h2,
    alignSelf: 'flex-end',
    textAlign: 'left',
    color: Colors.darkGrey
  },
  label: {
    ...Fonts.style.normal,
    alignSelf: 'flex-start',
    color: Colors.grey,
    textAlign: 'left'
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
