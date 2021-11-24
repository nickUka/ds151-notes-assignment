import React,{useContext} from "react";
import { Button, FlatList,} from 'react-native';
import Note from "../components/Notes";
import { NotesContext } from "../context/NotesContext";

const HomeScreen = ({navigation}) => {
    const notesContext = useContext(NotesContext);
    const notesList = notesContext.state.sort();
    return(
    <>
        <Button 
            title="Compose" 
            onPress={() => navigation.navigate('Compose')}
        />
        <FlatList 
            contentContainerStyle={{flexGrow: 1, alignItems:"center", alignContent: 'space-around'}}
            key="grid"
            numColumns={2}  
            keyExtractor={item => item.id.toString()}
            data={notesList}
            renderItem={({item}) => {
                return <Note
                title={item.title}
                text={item.text}
                onPress ={() => navigation.navigate('Compose', {
                   id: item.id,
                })}
            />
            }}
        />
    </>
    );
}

export default HomeScreen;