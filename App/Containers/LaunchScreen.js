import React, { Component } from 'react'
import { Text, View, Platform, Animated, Picker, ActivityIndicator } from 'react-native'
import { Images, Colors, Metrics } from '../Themes'
import { connect } from 'react-redux'
import ProductsActions from '../Redux/ProductsRedux'
import CustomIcon from '../Components/CustomIcon'
import Category from './Category'

// Styles
import styles from './Styles/LaunchScreenStyles'

const HEADER_MAX_HEIGHT = 300
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - Metrics.navBarHeight

class LaunchScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <CustomIcon name='shop' color={tintColor} />
      ),
      header:
  <View style={styles.transparentHeader}>
    <CustomIcon name='basket' color={Colors.green} style={[styles.headerIcon, {opacity: 0}]} />
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={params.selectedSupplier}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue, itemIndex) => params.handlePickerChange(itemValue)}
        mode='dropdown'>
        <Picker.Item label='Tesco' value='tesco' />
        <Picker.Item label='Waitrose' value='waitrose' />
      </Picker>
      <CustomIcon name='downarrow' color={Colors.white} style={styles.customDropDown} size={12} />
    </View>
    <CustomIcon name='basket' color={Colors.green} style={[styles.headerIcon]} />
  </View>
    }
  };
  isAttempting = false
  animatedValue = new Animated.Value(0);
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
      animatedValue: this.animatedValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, Metrics.navBarHeight],
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
    if (this.isAttempting && !newProps.fetching) {
      console.tron.log(newProps.payload)
      this.setState({payload: newProps.payload})
    }
  }
  renderScrollViewContent () {
    const { fetching } = this.props
    return (
      <View style={{paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT - Metrics.navBarHeight : 0}}>
        {fetching
          ? <View style={styles.progressContainer}>
            <ActivityIndicator size='large' color={Colors.darkGrey} />
          </View>
          : this.state.payload.map((u, i) => (
            <Category key={i} data={u} navigation={this.props.navigation} />
          ))}
      </View>
    )
  }

  render () {
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
        <Animated.ScrollView style={[styles.container, {top: Metrics.navBarHeight, marginBottom: Metrics.navBarHeight}]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this.renderScrollViewContent()}
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
