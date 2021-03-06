import { AppRegistry } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true })
AppRegistry.registerComponent('GroceriesApp', () => StorybookUI)
export default StorybookUI
