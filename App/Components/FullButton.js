import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/FullButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import CustomIcon from './CustomIcon'
import { Images, Colors } from '../Themes'

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    const buttonTextContainer = {flex: 0.9}
    return (
      <TouchableOpacity style={[styles.button, this.props.buttonStyle]} onPress={this.props.onPress}>

        <View style={buttonTextContainer}>
          <Text style={[styles.buttonText, this.props.buttonTextStyle]}>{this.props.text}</Text>
        </View>

        <View style={{flex: 0.1}}>
          <CustomIcon name='downarrow' color={Colors.darkGrey} style={styles.iconButton} size={11} />
        </View>

      </TouchableOpacity>
    )
  }
}
