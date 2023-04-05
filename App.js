import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex:1, backgroundColor: "tomato"}}></View>
      <View style={{ flex:1, backgroundColor: "teal"}}></View>
      <View style={{ flex:1, backgroundColor: "orange"}}></View>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
