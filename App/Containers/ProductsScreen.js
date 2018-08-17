import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import CustomIcon from '../Components/CustomIcon'

import Products from './Products'

// Styles
import styles from './Styles/ProductsScreenStyle'

class ProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: typeof navigation.state.params !== typeof undefined ? navigation.state.params.data.category.name : null,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name='shop' color={tintColor} />
    ),
    headerRight: <CustomIcon name='basket' color={Colors.green} />,
  });
  render () {
    return (
      <Products data={this.props.navigation.state.params.data} navigation={this.props.navigation} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen)
