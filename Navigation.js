import * as React from "react";
import ContestScreen from "./ContestScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ContestScreen" component={ContestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
