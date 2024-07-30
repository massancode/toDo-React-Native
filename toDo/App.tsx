import { StatusBar } from 'react-native';
import {StyleSheet} from 'react-native';
import { Home } from './src/home';


export default function App() {
      
  return (       
       <>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent={true}/>
         <Home/>
       </>
)};
