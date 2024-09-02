import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import trocaTemaScreen from "../screens/trocaTemaScreen"


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>


        
<Stack.Screen
          name="TrocaTema"
          component={trocaTemaScreen}
          options={{
            title: "Inserir Login",
            headerShown: false,
          }}
        />
        

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
