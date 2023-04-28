import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

import AlbumCard from "./components/AlbumCard/AlbumCard";
import HomeScreen from "./screens/HomeScreen";
import MyAlbumsScreen from "./screens/MyAlbumsScreen";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MyAlbums" component={MyAlbumsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}


