import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Card, Button, Divider } from 'react-native-elements'
import CustomIcon from '../Components/CustomIcon'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CategoryStyle'

export default class Category extends React.PureComponent {
  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (

      <Card
        title={null}
        image={{ uri: item.primary_image_url }}
        containerStyle={{ width: 120, backgroundColor: Colors.white, margin: 0, padding: 0 }}
        imageStyle={{width: 80, height: 80, alignSelf: 'center'}}
        // titleStyle={styles.boldLabel}
      >
        <Text style={styles.boldLabel}>
          {`${'\u00A3'} ${item.price}`}
        </Text>
        <Text style={[styles.label, { marginBottom: 0 }]}>
          {item.name}
        </Text>
      </Card>

      // <View style={styles.row}>
      //   <Text style={styles.boldLabel}>{item.name}</Text>
      //   <Text style={styles.label}>{item.price}</Text>
      //   <Image source={{uri: item.primary_image_url}} style={{width: 50, height: 50}} />
      // </View>
    )
  }

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}>Nothing to See Here</Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => item.id.toString()

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 5

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>

        <View style={[styles.listRow, {}]}>
          <Text style={styles.sectionHeader}> {this.props.data.category.name} </Text>
          <Button
            onPress={() => this.props.navigation.navigate('ProductsScreen', {data: this.props.data})}

            // icon={{
            //   name: 'chevron-right',
            //   size: 11,
            //   color: Colors.darkGrey
            // }}
            iconRight
            icon={<CustomIcon name='rightarrow' color={Colors.darkGrey} size={11} style={{backgroundColor: Colors.transparent, color: Colors.darkGrey}} />}
            titleStyle={styles.headerButton}
            buttonStyle={{
              backgroundColor: Colors.transparent,
              borderColor: Colors.transparent,
              borderWidth: 0,
              borderRadius: 0
            }}
            containerStyle={{ alignSelf: 'flex-end' }}
            title='View More'
          />
        </View>
        <Divider style={{ backgroundColor: Colors.border, marginVertical: 10 }} />
        <FlatList
          contentContainerStyle={styles.listContent}
          data={!this.props.data ? null : this.props.data.products}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          horizontal
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets
          removeClippedSubviews
          enableEmptySections
        />
      </View>
    )
  }
}
