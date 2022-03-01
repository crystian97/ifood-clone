import React ,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text ,Alert,ActivityIndicator} from 'react-native';
import { SafeAreaView,Image,View,ButtonContainer } from './style';

export default function Principal() {
  
  // hooks
  // statess
  const [banners,setBanner] = useState([])
  const [categorias,setCategorias] = useState([])
  const [restaurantes,setRestautantes] = useState([])
  // load
  const [loaded,setLoaded] = useState(false)

  // effects
  useEffect(()=>{
async function buscaDados(){
try{

  const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
  console.log(response)

  const data = await response.json();
  console.log(data);
  setLoaded(true);
  setBanner(data.banner_principal);
  setCategorias(data.categorias)
  setRestautantes(data.restaurantes)
  Alert.alert(data)
}catch(e){
Alert.alert('Erro ao consultar' + e)
}
}
buscaDados();
  },[])

  return (
    
    <>
    <StatusBar style = "theme-dark"/>
    <SafeAreaView>
  
      <Text>Principal</Text>

      </SafeAreaView>
      </>
  );
}


