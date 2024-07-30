import { StyleSheet } from "react-native";      

export const styles = StyleSheet.create({

    container:{
      backgroundColor:'#262626',
      flexDirection:'row',
      width:350,
      height:64,
      borderRadius:13,
      marginLeft:30,
      marginTop:25,
      paddingHorizontal:10,
      justifyContent:'space-evenly',
      
    
      
    },
    text:{
      fontSize:18,
      color:'2F2F2F',
      alignSelf:'center',
      flexWrap:'wrap',
      alignContent:'center',
      paddingHorizontal:10,
      flexShrink:1
     
    },
    image:{
        width:25,
        height:25,
        alignSelf:'center',
        paddingHorizontal:10,
    }
})