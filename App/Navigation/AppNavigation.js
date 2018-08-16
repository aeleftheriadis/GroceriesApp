import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import MoreScreen from '../Containers/MoreScreen'
import MyListsScreen from '../Containers/MyListsScreen'
import BrowseScreen from '../Containers/BrowseScreen'
import SearchScreen from '../Containers/SearchScreen'
import ProductsScreen from '../Containers/ProductsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../Lib/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

import { Metrics, Colors } from '../Themes'

const HomeStack = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ProductsScreen: { screen: ProductsScreen }
})

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  // Products: { screen: Products },
  // Category: { screen: Category },
  //

  //
  // ProductsScreen: { screen: ProductsScreen },
  LaunchScreen: { screen: HomeStack },
  SearchScreen: { screen: SearchScreen },
  BrowseScreen: { screen: BrowseScreen },
  MyListsScreen: { screen: MyListsScreen },
  MoreScreen: { screen: MoreScreen }
},
{
  // navigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, tintColor }) => {
  //     // const { routeName } = navigation.state

  //     // You can return any component that you like here! We usually use an
  //     // icon component from react-native-vector-icons
  //     return <Icon name='home' size={25} color={tintColor} />
  //   }
  // }),
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.grey
    // style: {
    //   backgroundColor: 'white',
    //   borderTopColor: 'white',
    //   borderTopWidth: 1,
    //   height: Metrics.screenHeight * 0.08
    // },
    // tabStyle: {
    //   width: Metrics.screenWidth * 0.33333333333333333333333333333333333333333,
    //   height: Metrics.screenWidth * 0.08
    // },
    // indicatorStyle: {
    //   backgroundColor: 'white',
    //   width: 0,
    //   height: 0,
    //   padding: 0,
    //   margin: 0
    // }
  },
  initialRouteName: 'LaunchScreen',
  abBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true
}

// {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'LaunchScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// }

)

export default PrimaryNav
