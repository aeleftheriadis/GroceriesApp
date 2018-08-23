import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import Product from '../Components/Product'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/ProductsStyle'

class Products extends React.PureComponent {
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
      <View style={styles.row}>
        <Product
          imageUrl={item.primary_image_url}
          imageSize={120}
          price={item.price}
          name={item.name}
        />
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Divider style={styles.divider} />

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={[styles.label, styles.centerText]}>Nothing to See Here</Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => item.id.toString()

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

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
        <FlatList
          contentContainerStyle={styles.listContent}
          data={!this.props.data ? null : this.props.data.products}
          renderItem={this.renderRow}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.renderEmpty}
          automaticallyAdjustContentInsets
          removeClippedSubviews
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
