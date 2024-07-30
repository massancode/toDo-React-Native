import { StyleSheet, TextInput } from "react-native";  

type props= {
    color:string
}

export const styles =  StyleSheet.create({
    container:{
        backgroundColor:'#0D0D0D',
        width:'100%',
        alignItems:'center',
        flexDirection:'column',
    },
    image:{
      marginTop:65,  
      width:110,
      height:32,
    },
    containerInput:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        height:56,
        width:290,
        position: 'relative',
        top:28,   
        zIndex:1,
        marginRight:60,
        borderWidth:2,
        borderRadius:5

    },
    textInput:{
        backgroundColor:'#262626',
        height:'100%',
        width:'100%',
        color:'#FFF',
        padding:16,
        fontSize:16,  
        borderRadius:5
        
    },
    buttonAdd:{
          width:56,
          height:56,
          backgroundColor:'#1e6f9f',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          marginLeft:10,
          borderRadius:5
    },
    containerdown:{
        backgroundColor:'#191919',
        height:'100%',
        width:'100%',
        zIndex:0
       },

       status:{ 
        flexDirection:'row',
        justifyContent:'center',
        marginTop:75,
        gap:130
    },
       statusCreate:{
        flexDirection:'row',
        gap:10
       },
       textStatus:{
         color:'#4EA8DE',
         fontWeight:'bold',
         fontSize:18
       },
       circleCount:{
        backgroundColor:'#262626',
        width:25,
        height:19,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
       }
})