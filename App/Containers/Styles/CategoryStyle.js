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
    ...Fonts.style.h3,
    alignSelf: 'flex-end',
    textAlign: 'left',
    color: Colors.darkGrey,
    padding: 0
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
  categoryButton: {
    backgroundColor: Colors.transparent,
    color: Colors.darkGrey,
    top: 1,
    paddingLeft: 5
  },
  productImage: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  divider: {
    backgroundColor: Colors.border,
    marginVertical: Metrics.baseMargin
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
