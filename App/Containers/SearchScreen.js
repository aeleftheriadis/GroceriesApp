import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import CustomIcon from '../Components/CustomIcon'

// Styles
import styles from './Styles/SearchScreenStyle'

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name='search' color={tintColor} />
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
