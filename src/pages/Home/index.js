
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView,Image,View,ButtonContainer } from './style';
import banner from '../../../assets/banner.png';
import Button from '../../components/Button';
export default function Home() {
  return (
    <>
    <StatusBar  style="theme-dark"/>
    <SafeAreaView>
  
        <View>
          <Text>Pedir Comida nunca foi tão fácil para os gordos então..</Text>
          <Image  source={banner}/>

          <Text>Permitir Localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="Pular" theme="primary" onPress={()=>{}}/>
          <Button text="Entrar"/>

        </ButtonContainer>
      

      </SafeAreaView>
      </>
  );
}


