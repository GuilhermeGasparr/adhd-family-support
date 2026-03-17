import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InfoCardProps {
  title: string;
  subtitle: string;
  icon?: keyof typeof Ionicons.glyphMap;
  colorIcon: string;
  colorBg: string;
  onPress?: () => void;
}

export default function InfoCard({
  title,
  subtitle,
  icon = "information-circle-outline",
  colorIcon,
  colorBg,
  onPress,
}: InfoCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: colorBg }]}>
        <Ionicons name={icon} size={22} color={colorIcon}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#999" />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom: 14,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
  },
});