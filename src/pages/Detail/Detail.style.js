import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"aliceblue",
    },
    bodyContainer:{
        padding:10,
        backgroundColor:"black",

    },
    image:{
        width: deviceSize.width, 
        height: deviceSize.height/3,
        resizeMode:"contain",
        backgroundColor:"white",
        marginTop:20,
        borderWidth:5,
        borderColor:"black",
    },
    title:{
        fontWeight:"bold",
        color:"aliceblue",
        fontSize:25,
        textAlign:"center"
    },
    description:{
        fontStyle: "italic",
        color:"aliceblue",
        textAlign:"center",
        marginVertical:20,
        lineHeight:20,
        fontSize:17,
    },
    price:{
        fontWeight:"bold",
        fontSize:20,
        color:"aliceblue",
        textAlign:"right"
    },
})