import React from 'react'
import LottieView from 'lottie-react-native'
import { View } from 'react-native'

const Loading = () => {
  return (
    <View style={{backgroundColor:"aliceblue",flex:1}}>
        <LottieView style={{width:350, height:350, marginTop:"auto",marginBottom:"auto",marginLeft:"auto", marginRight:"auto"}} source={require('../../assets/loading.json')} autoPlay/>
    </View>
  )
}

export default Loading