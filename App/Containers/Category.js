import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import CustomIcon from '../Components/CustomIcon'
import { Colors } from '../Themes'
import Product from '../Components/Product'
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
      <Product
        imageUrl={item.primary_image_url}
        imageSize={80}
        price={item.price}
        name={item.name}
      />
    )
  }

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={[styles.label, styles.centerText]}>Nothing to See Here</Text>

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
        {!this.props.data
          ? null
          : <View style={[styles.listRow, {}]}>
            <Text style={styles.sectionHeader}> {this.props.data.category.name} </Text>
            <Button
              onPress={() => this.props.navigation.navigate('ProductsScreen', {data: this.props.data})}
              iconRight
              icon={<CustomIcon name='rightarrow' color={Colors.darkGrey} size={11} style={styles.categoryButton} />}
              titleStyle={styles.headerButton}
              clear
              title='View More'
            />
          </View>
        }
        <Divider style={styles.divider} />
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
