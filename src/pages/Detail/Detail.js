import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./Detail.style"
import useFetch from '../../hooks/useFetch'
import Config from '../../../config/index';
import Loading from '../../components/Loading';
import Error from '../../components/Error/';

function Detail({route}) {

  const{id} = route.params


  const {loading,error,data} = useFetch(`${Config.API_URL}/${id}`)

  if(loading){return(<Loading/>)}
    if(error){
      return (<Error/>)
    }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image}/>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  )
}

export default Detail