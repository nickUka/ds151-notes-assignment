import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NotesProvider } from "./src/context/NotesContext";
import CreateNote from "./src/screens/Note";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={HomeScreen}/>
          <Stack.Screen name="Compose" component={CreateNote}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>    
  );
}

export default App;