import React,{useContext, useEffect, useState} from "react";
import { TextInput, StyleSheet, Button } from "react-native";
import { NotesContext } from "../context/NotesContext";

const CreateNote = ({navigation, route})=>{
    const notesContext = useContext(NotesContext);
    const [note, setNote] = useState({id: null, title: null, text: null});

    if(route !=null && route.params != null && route.params.id != null){
        useEffect( ()=> {
            setNote(notesContext.state.find(n => n.id == route.params.id));
        },[]);        
    }

    return(
        <>
        <Button 
            title={note.id == null ? "Add" : "Update"} 
            onPress={() => {
                if(note.id != null){
                    notesContext.update(note);
                    navigation.navigate('Notes');
                    return;
                }
                if(note.title != null && note.title != '' && note.text != null  && note.text != ''){
                    notesContext.add({title: note.title, text: note.text});
                    navigation.navigate('Notes');
                }
            }}
        />
        {note.id != null  
            && (<Button 
            title="Delete" 
            onPress={() => {
                notesContext.remove({id: note.id});
                navigation.navigate('Notes');
            }}
        />)}
        
          <TextInput
            onChangeText={newTitle => setNote({...note,title: newTitle})}
            autoCapitalize="sentences"
            value={note.title}
            autoCorrect={false}
            placeholder="Title"
            style={styles.titleInput}
          />
          <TextInput
            multiline={true}
            onChangeText={newText => setNote({...note,text: newText})}
            autoCapitalize="sentences"
            value={note.text}
            autoCorrect={false}
            placeholder="Note"
            style={styles.textInput}
          />
      </>
    );
}

const styles = StyleSheet.create({
    titleInput:{
        backgroundColor: '#CCC',
        height: 50,
        padding: 10,
        fontSize: 25
    },
    textInput:{
        backgroundColor: '#DDD',
        flex: 1,
        padding: 10,
        fontSize: 20,
        textAlignVertical: 'top'
    },
    
});

export default CreateNote;
