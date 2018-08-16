import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Styles/CustomIconStyle'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../Lib/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class CustomIcon extends Component {
  // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string.isRequired
  }

  // Defaults for props
  static defaultProps = {
    size: 25
  }

  render () {
    return (
      <Icon name={this.props.name} size={this.props.size} color={this.props.color} />
    )
  }
}
