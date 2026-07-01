import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ChatButton() {
  return (
    <TouchableOpacity
      onPress={() => router.push("./chatbot")}
    >
      <Ionicons
        name="chatbubble-ellipses"
        size={28}
        color="#2E7DFF"
      />
    </TouchableOpacity>
  );
}