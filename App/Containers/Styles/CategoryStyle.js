import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Metrics.doubleBaseMargin
  },
  row: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  sectionHeader: {
    ...Fonts.style.h2,
    textAlign: 'left',
    color: Colors.green
  },
  headerButton: {
    ...Fonts.style.h3,
    alignSelf: 'flex-end',
    textAlign: 'left',
    color: Colors.darkGrey,
    padding: 0
  },
  categoryButton: {
    backgroundColor: Colors.transparent,
    color: Colors.darkGrey,
    top: 1,
    paddingLeft: 5
  },
  divider: {
    backgroundColor: Colors.border,
    marginVertical: Metrics.baseMargin
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
