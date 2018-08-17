import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, Platform, Animated, Picker } from 'react-native'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import ProductsActions from '../Redux/ProductsRedux'
import CustomIcon from '../Components/CustomIcon'

// Styles
import styles from './Styles/LaunchScreenStyles'

import RNPickerSelect from 'react-native-picker-select'

const HEADER_MAX_HEIGHT = 300
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

class LaunchScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <CustomIcon name='shop' color={tintColor} />
      ),
      headerRight: <CustomIcon name='basket' color={Colors.green} />,
      headerStyle: styles.transparentHeader,
      headerTitle: <Picker
        selectedValue={params.selectedSupplier}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => params.handlePickerChange(itemValue)}
        mode='dropdown'>
        <Picker.Item label='Tesco' value='tesco' />
        <Picker.Item label='Waitrose' value='waitrose' />
      </Picker>
    }
  };
  isAttempting = false
  _animatedValue = new Animated.Value(0);
  state= {
    payload: [],
    supplier: 'tesco',
    scrollY: new Animated.Value(
      // iOS has negative initial scroll value because content inset...
      Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0
    ),
    refreshing: false

  }
  componentDidMount () {
    this.isAttempting = true
    this.props.getProducts(this.state.supplier)
    this.props.navigation.setParams({
      animatedValue: this._animatedValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      }),
      handlePickerChange: this.pickerChange,
      selectedSupplier: this.state.supplier
    })
  }

  pickerChange = (itemValue) => {
    console.tron.log(itemValue)
    this.props.getProducts(itemValue)
    this.setState({
      supplier: itemValue
    })
    this.props.navigation.setParams({
      selectedSupplier: itemValue
    })
  }

  componentWillReceiveProps (newProps) {
    // this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      console.tron.log(newProps.payload)
      this.setState({payload: newProps.payload})
    }
  }
  _renderScrollViewContent () {
    return (
      <View style={{paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0}}>
        {this.state.payload.map((_, i) => (
          <View key={i} style={{
            height: 80,
            backgroundColor: '#D3D3D3',
            alignItems: 'center',
            justifyContent: 'center',
            top: -HEADER_MIN_HEIGHT
          }}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    )
  }

  render () {
    const { fetching } = this.props
    const { payload } = this.state
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0
    )
    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.mainContainer}>
        <Animated.Image source={Images.background} style={[styles.backgroundImage, {top: (!this.state.params ? 0 : this.state.params.animatedValue), opacity: imageOpacity, height: HEADER_MAX_HEIGHT}]} resizeMode='cover' />
        <Animated.ScrollView style={[styles.container, {top: HEADER_MIN_HEIGHT}]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this._renderScrollViewContent()}
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
          {/* <View style={styles.centered}>
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
          </View> */}

        </Animated.ScrollView>
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
