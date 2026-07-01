import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type ToolbarProps = {
  title: string;
  subtitle?: string;
  icon: ImageSourcePropType;
  onMenuPress?: () => void;
};

export default function Toolbar({
  title,
  subtitle,
  icon,
  onMenuPress,
}: ToolbarProps) {
  return (
    <View style={styles.header}>
      <View style={styles.containerLogo}>
        <Image source={icon} style={styles.logo} />
      </View>

      <View style={styles.headerLeft}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <Pressable
        onPress={() => router.push("./chatbot")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 75,
    width: "100%",
    backgroundColor: "#548ea8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 25,
    elevation: 2,
  },

  title: {
    fontWeight: "700",
    fontSize: 19,
    color: "#ffffff",
  },

  subtitle: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 12,
  },

  headerLeft: {
    flex: 1,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  containerLogo: {
    width: 75,
    height: 75,
    transform: [{ translateY: 2 }],
  },
});
