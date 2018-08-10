import { StackNavigator } from 'react-navigation'
import MoreScreen from '../Containers/MoreScreen'
import MyListsScreen from '../Containers/MyListsScreen'
import MyListScreen from '../Containers/MyListScreen'
import BrowseScreen from '../Containers/BrowseScreen'
import SearchScreen from '../Containers/SearchScreen'
import ProductsScreen from '../Containers/ProductsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MoreScreen: { screen: MoreScreen },
  MyListsScreen: { screen: MyListsScreen },
  MyListScreen: { screen: MyListScreen },
  BrowseScreen: { screen: BrowseScreen },
  SearchScreen: { screen: SearchScreen },
  ProductsScreen: { screen: ProductsScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
