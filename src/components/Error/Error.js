import React from "react";
import LottieView from "lottie-react-native";

import { View,Text } from "react-native";

const Error=()=> {
    return(
        <View style={{marginTop:"auto",backgroundColor:"aliceblue",flex:1, width:"100%",justifyContent: 'center', alignItems:'center'}}>
            <LottieView style={{width:100, height:100}} source={require('../../assets/error.json')} autoPlay/>
            <Text style={{fontWeight:"bold", fontSize:24, textAlign:"center",marginTop:"center",color:"black"}}>404 NOT FOUND</Text>
        </View>
    )
}

export default Error