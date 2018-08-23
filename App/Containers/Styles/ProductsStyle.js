import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  row: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    padding: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  listContent: {
    marginTop: 0
  },
  divider: {
    backgroundColor: Colors.textBorder,
    marginBottom: Metrics.baseMargin
  }
})
