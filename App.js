import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { UploadScreen } from "./src/screens/UploadScreen";
import { CameraScreen } from "./src/screens/CameraScreen";
import { PreviewScreen } from "./src/screens/PreviewScreen";
import { AnalysisScreen } from "./src/screens/AnalysisScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="Analysis" component={AnalysisScreen} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
  // return (
  //    <SafeAreaProvider style={styles.container}>
  //     <NavigationContainer style={styles.container}>
  //       <AppNavigator />
  //     </NavigationContainer>
  //    </SafeAreaProvider>
  // );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
