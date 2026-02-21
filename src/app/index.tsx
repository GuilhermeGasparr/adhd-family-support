import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toolbar from "../components/Toolbar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar
        title="TDAH Apoio"
        subtitle="Informação e apoio para famílias"
        icon={require("../assets/icon-home.png")}
        onMenuPress={() => console.log("Menu aberto")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});