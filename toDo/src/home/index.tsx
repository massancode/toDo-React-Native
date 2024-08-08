import { View,Text,Image,TextInput,TouchableOpacity,FlatList,ScrollView, SafeAreaView } from "react-native"
import { useState } from "react"

import {styles} from "./styles"
import { BoxTask } from "../components/BoxTask"

import LogoImage from "../assets/images/logo.png"
import Add from "../assets/images/add.png"



export function Home (){

    const [tasks,SetTasks] = useState<string []>(['fazer pão','prdro','JU','santiago','rodolfo','lyanne','carlos','prdro sampaio','juçara']);
    const teste = ['fazer pão','prdro','JU','santiago','rodolfo','lyanne','carlos','prdro sampaio','juçara']
    

   function HandleTaskAdd(){
     console.log ('Voces esta clicando em adicionar uma nova task')
     SetTasks(prevState => [...prevState,'ana'] )
   }
    

   function HandleTaskRemove(task:string){
     console.log (`Voces esta clicando em Remover uma task ${task}`)
   }

   return (
    <>
   <View style={styles.container}>

    <Image source={LogoImage} style={styles.image} resizeMode='stretch'/> 
        
        <View style={styles.containerInput}>
           <TextInput style={styles.textInput} placeholder="Adicione uma nova tarefa" placeholderTextColor={'#7f7f7f'} />    
           <TouchableOpacity style={styles.buttonAdd} onPress={HandleTaskAdd}> 
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
            


         
               <FlatList nestedScrollEnabled
               data={tasks} 
               showsHorizontalScrollIndicator={false}
               keyExtractor={item => item}
               renderItem={({item}) => <BoxTask key={item} task={item} remove={() => HandleTaskRemove(item)} />} 
               />
          

            

       </View>
        
   </View>
   
   </>
)}