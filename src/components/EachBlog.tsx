import React, { Component } from 'react'
import { Text, View ,StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IProps{
    route?:{params:{data:any}}
}

export class EachBlog extends Component<IProps>{

  getBlogDetails=()=> this.props.route!.params.data.url
    
  render() {
    const eachData = this.props.route!.params.data
    return (
      <View style={styles.eachItemCont}>
        <Text style={styles.headings}>Title  :  <Text><Text style={styles.description}>{eachData.title}</Text></Text></Text>

        <Text style={styles.headings}> URL  :  <Text style={styles.description}>{eachData.url}</Text></Text>

        <Text style={styles.headings}> Author  :  <Text style={styles.description}>{eachData.author}</Text></Text>

        <Text style={styles.headings}> Points  :  <Text style={styles.description}>{eachData.points}</Text></Text>

        
        <Text style={styles.headings}> Comments  :  <Text style={styles.description}>{eachData.num_comments}</Text></Text>
        
        <Text style={styles.headings}> Creates At  :  <Text style={styles.description}>{eachData.created_at}</Text></Text>
        
        <Text style={styles.headings}> Created At Id  :  <Text style={styles.description}>{eachData.created_at_i}</Text></Text>
        
        <View>{eachData._tags.map((item:string) => (
          <Text key={item} style={styles.headings}>Tags : {"  "}<Text style={styles.description}>{item}</Text></Text>
          ))}
          </View>
          <Text style={styles.headings}>HighlightResult  :  <Text style={styles.description}>{eachData._highlightResult.title.value}</Text></Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
                onPress={() => Linking.openURL(eachData.url)}>
                  <Text style={styles.buttonText}>More About This Blog</Text>
          </TouchableOpacity>
          </View>
      </View>
      
    )
  }
}

export default EachBlog

const styles =  StyleSheet.create({

  buttonText:{
    color:'#fff',
    fontSize:15,
  },
  button:{
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexGrow: 1,
  },

  eachItemCont:{
    padding:20,
    flex:1,
  },

  headings:{
    fontSize:18,
    color:'red',
    fontWeight:'600',
    fontFamily:'Roboto',
  },

  description:{
    fontSize:20,
    color:'blue',
    fontWeight:'600',
    fontFamily:'Roboto',

  }
})

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