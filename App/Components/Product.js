import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './Styles/ProductStyle'
import { Card } from 'react-native-elements'

export default class Product extends Component {
  // Prop type warnings
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageSize: PropTypes.number,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const imageUrl = this.props.imageUrl
    const imageSize = this.props.imageSize
    const price = this.props.price
    const name = this.props.name
    return (
      <Card
        title={null}
        image={{ uri: imageUrl }}
        containerStyle={[styles.productContainer, imageSize ? {width: imageSize * 1.5} : {}]}
        imageStyle={[styles.productImage, imageSize ? {width: imageSize, height: imageSize} : {}]}
        wrapperStyle={styles.zeroPadding}
      >
        <Text style={styles.boldLabel}>
          {`${'\u00A3'}${price}`}
        </Text>
        <Text style={styles.label}>
          {name}
        </Text>
      </Card>
    )
  }
}
