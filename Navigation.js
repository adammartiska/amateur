import * as React from "react";
import ContestScreen from "./Screens/ContestScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./Constants/Colors";

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContestScreen"
          component={ContestScreen}
          options={{
            title: "Nove spojenie",
            headerStyle: {
              backgroundColor: "#3F4045",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              //fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
