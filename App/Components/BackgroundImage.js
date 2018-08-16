import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import styles from './Styles/BackgroundImageStyle'

export default class BackgroundImage extends React.PureComponent {
  // Prop type warnings
  static propTypes = {
    image: PropTypes.any.isRequired,
    resizeMode: PropTypes.string.isRequired
  }

  // Defaults for props
  static defaultProps = {
    resizeMode: 'center'
  }

  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          }}
        >
          <Image
            style={{
              flex: 1

            }}
            source={this.props.image}
          />
        </View>

      </View>
    )
  }
}

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Image,
//   View,
//   Text,
// } from 'react-native';

// const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

// export default class BackgroundImage extends Component {
//   render() {
//     const resizeMode = 'center';
//     const text = 'I am some centered text';

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#eee',
//         }}
//       >
//         <View
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <Image
//             style={{
//               flex: 1,
//               resizeMode,
//             }}
//             source={{ uri: remote }}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             justifyContent: 'center',
//           }}
//         >
//           <Text
//             style={{
//               textAlign: 'center',
//               fontSize: 40,
//             }}
//           >
//             {text}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
