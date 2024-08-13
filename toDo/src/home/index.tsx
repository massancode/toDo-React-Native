import { View,Text,Image,TextInput,TouchableOpacity,FlatList,ScrollView, SafeAreaView,Alert} from "react-native"
import { useState } from "react"

import {styles} from "./styles"
import { BoxTask } from "../components/BoxTask"

import LogoImage from "../assets/images/logo.png"
import ListImage from "../assets/images/list.png"
import Add from "../assets/images/add.png"



export function Home (){

    const [tasks,setTasks] = useState<string[]>([]); 
    const [addTask,setAddtask] = useState('');
    const [finalizedTasks,setFinalizedTasks] = useState<string[]>([])
    

   function HandleTaskAdd(){
     console.log ('Voces esta clicou em adicionar uma nova task')
     setTasks(prevState => [...prevState,addTask] )
     setAddtask ('')
   }
    

   function HandleTaskRemove(task:string){
    
     setFinalizedTasks(prevState => [...prevState,task])
     setTasks(prevState=>prevState.filter(exectask => exectask !== task))
     console.log (`Voces esta clicando em Remover uma task ${task}`)
     Alert.alert('Parabens amigo !',`Voce completou  a taks ? "${task}"`,[
     
        
        {
            text:'sim',
            onPress: () => HandleTaskRemove

        },
        {
            text:'não',

        }
     ])
    
    
   }

   return (
    <>
   <View style={styles.container}>

    <Image source={LogoImage} style={styles.image} resizeMode='stretch'/> 
        
        <View style={styles.containerInput}>
           <TextInput style={styles.textInput} placeholder="Adicione uma nova tarefa" placeholderTextColor={'#7f7f7f'} onChangeText={setAddtask} value={addTask} />    
           <TouchableOpacity style={styles.buttonAdd} onPress={HandleTaskAdd}> 
               <Image source={Add} style={{width:27,height:27}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerdown}>
               
                <View style={styles.status}>
                    <View style={styles.statusCreate}> 
                        <Text style={styles.textStatus}>Criadas</Text>
                        <View style={styles.circleCount}><Text style={{color:'white',fontSize:15}}>{tasks.length}</Text></View>
                    </View>
                    <View style={styles.statusCreate}> 
                        <Text style={styles.textStatusConclude}>Concluidas</Text>
                        <View style={styles.circleCount}><Text style={{color:'white',fontSize:15}}>{finalizedTasks.length}</Text></View>
                    </View>  
                </View>

               <FlatList nestedScrollEnabled
               data={tasks} 
               showsHorizontalScrollIndicator={false}
               keyExtractor={(item) => item}
               renderItem={({item}) => <BoxTask key={item} task={item} remove={() => HandleTaskRemove(item)} />} 
               ListEmptyComponent={ () => (
                <View style={{alignItems:'center',borderTopWidth:2,marginTop:20,borderColor:'#2A2A2A',paddingHorizontal:'5%'}}>
                    <Image source={ListImage} style={{width:75,height:75,marginTop:45,marginBottom:25,}} />
                    <Text style={{color:'#7F7F7F',fontStyle:'italic'}}>Você ainda não tem tarefas cadastrados</Text>
                    <Text style={{color:'#7F7F7F'}}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
               )}
               />

       </View>        
   </View>  
   </>
)}