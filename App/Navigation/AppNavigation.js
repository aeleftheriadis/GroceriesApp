import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import MoreScreen from '../Containers/MoreScreen'
import MyListsScreen from '../Containers/MyListsScreen'
import BrowseScreen from '../Containers/BrowseScreen'
import SearchScreen from '../Containers/SearchScreen'
import ProductsScreen from '../Containers/ProductsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

import { Colors } from '../Themes'

const HomeStack = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ProductsScreen: { screen: ProductsScreen }
}, {
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  }
})

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  LaunchScreen: { screen: HomeStack },
  SearchScreen: { screen: SearchScreen },
  BrowseScreen: { screen: BrowseScreen },
  MyListsScreen: { screen: MyListsScreen },
  MoreScreen: { screen: MoreScreen }
},
{
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.grey,
    labelStyle: styles.tabBarLabel,
    iconStyle: styles.tabBarLabel,
    style: styles.tabBar
  },
  initialRouteName: 'LaunchScreen',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false
}

)

export default PrimaryNav
