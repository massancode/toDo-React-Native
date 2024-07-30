import { View,Text,Image,TouchableOpacity,Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"; {/* https://www.npmjs.com/package/react-native-bouncy-checkbox/v/2.1.6 */}
import Delete from "../../assets/images/delete.png"
import{styles} from './styles'


export function BoxTask() {
    return (
        <View style={styles.container}>
            <BouncyCheckbox />
            <Text style={styles.text}>testando sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssumss qualquer</Text>
            <TouchableOpacity style={styles.image}  >
            <Image source={Delete} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
}