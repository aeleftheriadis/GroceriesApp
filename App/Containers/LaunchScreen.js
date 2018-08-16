import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import ProductsActions from '../Redux/ProductsRedux'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: `Home`,
    tabBarIcon: () => (
      <Ionicons name='ios-information-circle' size={25} color='grey' />
    )
  };
  isAttempting = false
  state= {
    payload: [],
    supplier: 'tesco'
  }
  componentDidMount () {
    this.isAttempting = true
    this.props.getProducts(this.state.supplier)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.overlay} />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.products.fetching,
    payload: state.products.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (data) => dispatch(ProductsActions.productsRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
