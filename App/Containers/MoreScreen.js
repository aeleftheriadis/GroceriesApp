import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import CustomIcon from '../Components/CustomIcon'

// Styles
import styles from './Styles/MoreScreenStyle'

export default class MoreScreen extends Component {
  static navigationOptions = {
    title: 'more',
    tabBarLabel: 'more',
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name='menu' color={tintColor} />
    )
  };
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position' />
      </ScrollView>
    )
  }
}
