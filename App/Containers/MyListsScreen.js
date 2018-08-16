import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import CustomIcon from '../Components/CustomIcon'
// Styles
import styles from './Styles/MyListsScreenStyle'

export default class MyListsScreen extends Component {
  static navigationOptions = {
    title: 'My lists',
    tabBarLabel: 'My lists',
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name='list' color={tintColor} />
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
