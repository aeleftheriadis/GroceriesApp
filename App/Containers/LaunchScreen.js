import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import ProductsActions from '../Redux/ProductsRedux'
import CustomIcon from '../Components/CustomIcon'

// Styles
import styles from './Styles/LaunchScreenStyles'

import RNPickerSelect from 'react-native-picker-select'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name='shop' color={tintColor} />
    ),
    headerRight: <CustomIcon name='basket' color={Colors.green} />
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
    const { fetching } = this.props
    const { payload } = this.state
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.overlay} />
        <ScrollView style={styles.container}>
          {/* {fetching
          ? <View style={styles.progressContainer}>
            <Progress.CircleSnail color={['#1b4182']} />
          </View> : null}
        { payload.map((u, i) => {
          return (
            <AnnouncementCard
              key={i}
              announcement={u}
              onPress={() => this.onPress(u)}
              chars={80}
            />
          )
        })
        }
          </View> */}
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />

            <Button
              title='Go to Details'
              onPress={() => this.props.navigation.navigate('ProductsScreen')}
            />
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
