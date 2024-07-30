import { View,Text,Image,TextInput,TouchableOpacity } from "react-native"
import {styles} from "./styles"
import { BoxTask } from "../components/BoxTask"

import LogoImage from "../assets/images/logo.png"
import Add from "../assets/images/add.png"


export function Home (){

   return (
    <>
   <View style={styles.container}>

    <Image source={LogoImage} style={styles.image} resizeMode='stretch'/> 
        
        <View style={styles.containerInput}>
           <TextInput style={styles.textInput} placeholder="Adicione uma nova tarefa" placeholderTextColor={'#7f7f7f'} />    
           <TouchableOpacity style={styles.buttonAdd}> 
               <Image source={Add} style={{width:27,height:27}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerdown}>

                <View style={styles.status}>
                    <View style={styles.statusCreate}> 
                        <Text style={styles.textStatus}>Criadas</Text>
                        <View style={styles.circleCount}><Text style={{color:'white',fontSize:15}}>0</Text></View>
                    </View>
                    <View style={styles.statusCreate}> 
                        <Text style={styles.textStatus}>Concluidas</Text>
                        <View style={styles.circleCount}><Text style={{color:'white',fontSize:15}}>0</Text></View>
                    </View>
            </View>
            
            <BoxTask/>
            
       </View>
     
   </View>
   
   </>
)}