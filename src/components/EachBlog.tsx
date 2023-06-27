import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface IProps{
    route?:{params:{data:any}}
}

export class EachBlog extends Component<IProps>{
  render() {
    
    const eachData = this.props.route!.params.data
    return (
      <View>
        <Text style={{color:'#000'}}>{eachData.title}</Text>
        <Text style={{color:'#000'}}>{eachData.url}</Text>
      </View>
    )
  }
}

export default EachBlog

//        {
//     "created_at": "2023-06-27T13:48:22.000Z",
//     "title": "Trouble at Cheddar News",
//     "url": "https://www.businessside.co/p/trouble-at-cheddar",
//     "author": "davidburt",
//     "points": 1,
//     "story_text": null,
//     "comment_text": null,
//     "num_comments": 0,
//     "story_id": null,
//     "story_title": null,
//     "story_url": null,
//     "parent_id": null,
//     "created_at_i": 1687873702,
//     "_tags": [
//         "story",
//         "author_davidburt",
//         "story_36492705"
//     ],
//     "objectID": "36492705",
//     "_highlightResult": {
//         "title": {
//             "value": "Trouble at Cheddar News",
//             "matchLevel": "none",
//             "matchedWords": []
//         },
//         "url": {
//             "value": "https://www.businessside.co/p/trouble-at-cheddar",
//             "matchLevel": "none",
//             "matchedWords": []
//         },
//         "author": {
//             "value": "davidburt",
//             "matchLevel": "none",
//             "matchedWords": []
//         }
//     }
// },