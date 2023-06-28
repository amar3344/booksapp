import React, { Component } from 'react'
import { Text, View ,ActivityIndicator,StyleSheet} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

interface IProps{
    navigation?:{
        navigate:(arg:string,data:any)=>void
    }

}
interface IState{
    dataList:any,
    isLoading:boolean,
}
export class Home extends Component<IProps,IState> {
    state : IState = {dataList:[],isLoading:true}

    getDataFromUrl=async()=>{
        try{
            const urlRes = await fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
            const jsonData = await urlRes.json()
            // console.log(jsonData.hits)
            this.setState({dataList:jsonData.hits,isLoading:false})
        }catch{
            console.log(Error)
        }
        
    }

    componentDidMount(): void {
        this.getDataFromUrl()
    }

    knowMoreonEachBlog=(a:any)=>{
        this.props.navigation?.navigate("BlogDetails",{data:a})
    }
    
  render() {
    return (
        this.state.isLoading ? (
            <View style={styles.activityIndi}>
                <ActivityIndicator size={'large'}/>
            </View>
        ):(
            <View>
                <FlatList data={this.state.dataList}
                keyExtractor={item => item.title}
                 renderItem={({item}) =>(
                    <View style={styles.eachBlog}>
                        <Text style={styles.headerText}>Title :{"  "}<Text style={styles.textTitle}>{item.title}</Text></Text>
                        <Text style={styles.headerText}>URl :{"  "}<Text style={styles.urlText}>{item.url}</Text></Text>
                        <Text style={styles.headerText}>Created At  :{"  "}<Text style={styles.createdAt}>{item.created_at}</Text></Text>
                        <Text style={styles.headerText}>Author  :  <Text style={styles.createdAt}>{item.author.toUpperCase()}</Text></Text>
                        <TouchableOpacity style={styles.knowmoreButton} onPress={()=> this.knowMoreonEachBlog(item)}>
                            <Text style={{color:'red',fontSize:15}}>Know More >></Text>
                        </TouchableOpacity>
                    </View>
                 )

                 }
                 />
            </View>
        )
      
    )
  }
}

export default Home

const styles = StyleSheet.create({

    knowmoreButton:{
        alignSelf:'flex-end',
    },

    createdAt:{
        fontSize:18,
        fontFamily:'Roboto',
        fontWeight:'500',
        color:'#000'
        
    },
    urlText:{
        color:'#1D88EA',
        fontSize:18,
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'500',
    },
    textTitle:{
        color:'#fff',
        fontSize:20,
        fontWeight:'500',
        fontStyle:'normal',
    },

    eachBlog:{
        padding:10,
        margin:10,
        backgroundColor:'#B2D6FB',
        borderRadius:10,
    },

    activityIndi:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    headerText:{
        fontSize:20,
        color:'#000',
        fontWeight:'500',
    }
})
