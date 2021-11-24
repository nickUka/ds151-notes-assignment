import React, {createContext, useReducer} from "react";

const NotesContext = createContext();

const notesReducer = (state, action) =>{
    let newNotes;
    switch(action.type){
        case 'add':
            return([...state, {id: state.length, title: action.title, text: action.text}]);
        case 'remove':
            newNotes = state.filter((item) => item.id != (action.id));
            return ([...newNotes]);
        case 'update':
            newNotes = state.filter((item) => item.id != (action.id));
            return ([...newNotes, {id: action.id, title: action.title, text: action.text}]);
        default:
            return({...state});
    }
}

const NotesProvider = ({children}) => {
    const [state, dispatch] = useReducer(notesReducer, []);

    const add = ({title, text}) => {
        dispatch({type: 'add', text: text, title: title});
    }

    const remove = ({id}) => {
        dispatch({type: 'remove', id: id});
    }
    
    const update = ({id, title, text}) => {
        dispatch({type: 'update', id: id, text: text, title: title});
    }

    return(
        <NotesContext.Provider value={{state, add, remove, update}}>
            {children}
        </NotesContext.Provider>
    );
}

export {NotesContext, NotesProvider};