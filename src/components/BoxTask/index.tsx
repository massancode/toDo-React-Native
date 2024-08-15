import { View,Text,Image,TouchableOpacity,Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"; {/* https://www.npmjs.com/package/react-native-bouncy-checkbox/v/2.1.6 */}
import ImageDelete from "../../assets/images/delete.png"
import{styles} from './styles'
import { useState } from "react";



type Props = {
    task: string,
    remove: () => void,
   

}

export function BoxTask({task,remove,}:Props) {

 const [textStatus,setTextstatus] = useState(false)

    return (

        
        <View style={styles.container}>
              <View> 
                <BouncyCheckbox fillColor="#4EA8DE" onPress={(isChecked: boolean) => { setTextstatus(!textStatus), console.log(textStatus) }  }  />
              </View>
             <View style={styles.boxText}>
             <Text  style={[styles.text, textStatus && styles.textComplete ]}>{task}</Text>
             </View>
             <TouchableOpacity style={styles.imageButton} onPress={remove}  >
               <Image source={ImageDelete} style={styles.imageTrash}  />
            </TouchableOpacity>
        </View>
    );
}