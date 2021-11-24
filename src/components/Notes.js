import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityBase } from "react-native";

const Note = ({title, text, onPress})=>{
    return(
        <TouchableOpacity
            onPress={() =>  onPress()}
        >
            <View style={style.notes}>
                <Text style={{color: "#333", fontSize: 17, fontWeight: "bold",}}>{title}:</Text>
                <Text style={{color: "#555", fontSize: 13,flex: 1}}>{text}</Text>
            </View>
        </TouchableOpacity>        
    );
}

const style  = StyleSheet.create({
    notes:{
        borderRadius: 15,
        backgroundColor: "#CCC",
        flexDirection: 'column',
        alignContent: "space-around",
        height: 150,
        width: 100,
        marginHorizontal: 35,
        marginVertical: 20,
        padding:15
    }
});

export default Note;