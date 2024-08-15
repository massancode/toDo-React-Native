import { StyleSheet } from "react-native";     
import { useFonts,Inter_100Thin,Inter_200ExtraLight,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black } from "@expo-google-fonts/inter"; 

export const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#262626',
      width:350,
      height:64,
      borderRadius:13,
      marginTop:25,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
      
    },
    boxText:{
      width:200,
      height:58,
      justifyContent:'center'
    },
    text:{
      fontSize:14,
      color:'#F2F2F2',
      textAlign:'center',
      fontFamily:'Inter_400Regular'
     
      
    },
    textComplete:{
      fontSize:14,
      color:'#F2F2F2',
      textAlign:'center',
      textDecorationLine:'line-through',
      opacity:0.4
      
    },
    imageTrash:{
     width:40,
     height:40
    },
    imageButton:{
     width:40,
     height:40,
    
    },
   
})