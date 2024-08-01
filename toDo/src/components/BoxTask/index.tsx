import { View,Text,Image,TouchableOpacity,Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"; {/* https://www.npmjs.com/package/react-native-bouncy-checkbox/v/2.1.6 */}
import Delete from "../../assets/images/delete.png"
import{styles} from './styles'

type Props = {
    task: string,
    remove: () => void;
}

export function BoxTask({task,remove}:Props) {
    return (
        <View style={styles.container}>
            <BouncyCheckbox />
            <Text style={styles.text}>{task}</Text>

            <TouchableOpacity style={styles.image} onPress={remove}  >


            <Image source={Delete} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
}