import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import CustomIcon from '../Components/CustomIcon'

// Styles
import styles from './Styles/BrowseScreenStyle'

export default class BrowseScreen extends Component {
  static navigationOptions = {
    title: 'Browse',
    tabBarLabel: 'Browse',
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
