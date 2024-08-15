import { StatusBar } from 'react-native';
import {StyleSheet} from 'react-native';
import { Home } from './src/home';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
     
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (       
       <>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent={true}/>
         <Home />
       </>
)};
