import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Alert, ActivityIndicator, SafeAreaView, View } from "react-native";
import {
  TituloRestaurantes,
  ViewActivity,
  CategoriaView,
  BannerView,
  ViewPrincipal,
  ViewRestaurantes,
  ButtonTipoSelect,
  TextTipoSelect,
  SelectTipo,
  ButtonContainer,
} from "./style";
import RestauranteItem from "../../components/RestauranteItem";
export default function Principal() {
  // hooks
  // statess
  const [banners, setBanner] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestautantes] = useState([]);
  // load
  const [loaded, setLoaded] = useState(false);

  // effects
  useEffect(() => {
    async function buscaDados() {
      try {
        const response = await fetch(
          "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db"
        );
        console.log(response);

        const data = await response.json();
        console.log(data);
        setLoaded(true);
        setBanner(data.banner_principal);
        setCategorias(data.categorias);
        setRestautantes(data.restaurantes);
        Alert.alert(data);
      } catch (e) {
        Alert.alert("Erro ao consultar" + e);
      }
    }
    buscaDados();
  }, []);

  const ViewHome = (props) => {
    return(
    <ViewPrincipal>
      
      <TituloRestaurantes>Restaurantes</TituloRestaurantes>
      <ViewRestaurantes>
      {restaurantes.map(restaurante => (
        
            <>
              <RestauranteItem
                key={restaurante.id}
                foto={restaurante.url_img}
                nome={restaurante.nome}
                nota={restaurante.nota}
                categoria={restaurante.categoria}
                distancia={restaurante.distancia}
                valorFrete={restaurante.valor_frete}
                tempoEntrega={restaurante.tempo_entrega}
              />
            </>
          ))}
      </ViewRestaurantes>
    </ViewPrincipal>
    )};
  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
        {loaded ? (
          <ViewHome />
        ) : (
          <ViewActivity>
            <ActivityIndicator color='#F0001A' size='large' />
          </ViewActivity>
        )}
      </SafeAreaView>
    </>
  );
}
