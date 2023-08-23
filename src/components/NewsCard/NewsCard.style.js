import { Image, StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        border: 12,
        marginLeft: 12,
        marginRight:12,
        marginTop:16,
        borderRadius: 12,
        
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderTopLeftRadius: 12,
        borderTopRightRadius:12,
    },
    title: {
        fontSize:20,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
        color: "black",        
    },
    desc: {
        fontSize:16,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 10,
        color: "black",
    },
    author: {
        fontSize:12,
        fontStyle: "italic",
        textAlign: "right",
        color: "grey",
        marginBottom: 8,
        marginRight: 8,

    }
})