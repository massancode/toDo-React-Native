import { StyleSheet, TextInput } from "react-native";  
import { Inter_400Regular,Inter_700Bold } from "@expo-google-fonts/inter";

type props= {
    color:string
}

export const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0D0D0D',
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
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
        borderRadius:5,
        fontFamily:'Inter_700Bold'

    },
    textInput:{
        backgroundColor:'#262626',
        height:'100%',
        width:'100%',
        color:'#fff',
        padding:16,
        fontSize:16,  
        borderRadius:5,
        fontFamily:'Inter_400Regular'
        
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
        flex:2,
        backgroundColor:'#191919',
        width:'100%',
        zIndex:0,
        flexDirection:'column',
        alignItems:'center'
        
      
       },

       status:{ 
        flexDirection:'row',
        justifyContent:'center',
        marginTop:75,
        gap:130,
      
    },
       statusCreate:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',

       },
       textStatus:{
         color:'#4EA8DE',
         fontWeight:'bold',
         fontSize:18,
         fontFamily:'Inter_700Bold'
       },
       textStatusConclude:{
         color:'#5E60CE',
         fontWeight:'bold',
         fontSize:18
       },
       circleCount:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        backgroundColor:'#262626',
        width:25,
        height:19,
        borderRadius:10,
       }
})