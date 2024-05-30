import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';


const  Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="ProductsPage" component={Products} options={{
          title:"DMAZON",
          headerStyle:{backgroundColor:"black"},
          headerTitleStyle:{color:"azure",fontSize:40},
          headerTitleAlign: "center",
          headerTintColor: 'aliceblue',
      
      }}/>
        <Stack.Screen  name="DetailPage" component={Detail} options={{
          title:"DETAILS",
          headerStyle:{backgroundColor:"black"},
          headerTitleStyle:{color:"azure",fontSize:40},
          headerTitleAlign: "center",
          headerTintColor: 'aliceblue',
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router


