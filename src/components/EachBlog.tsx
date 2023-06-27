import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface IProps{
    route?:{params:{data:any}}
}

export class EachBlog extends Component<IProps>{
  render() {
    console.log(this.props.route!.params.data)
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default EachBlog
