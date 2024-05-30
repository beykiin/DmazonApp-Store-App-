import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'black', 
        borderColor:"black",
        borderWidth:1,
        margin:10,
        flexDirection:"row",
        borderRadius:10
    },
    image:{
        width:100,
        minHeight:100,
        margin:10,
        borderRadius:10,
        resizeMode:"contain",
        backgroundColor:"white"
    },
    bodyContainer:{
        flex:1,
        padding:5,
        justifyContent:"space-between"
    },
    title:{
        fontWeight:"bold",
        fontSize:17,
        color:"aliceblue"
    },
    price:{
        textAlign:"right",
        fontSize:16,
        fontStyle: "italic",
        color: "lightgrey",
        fontWeight: "bold"
    }
})