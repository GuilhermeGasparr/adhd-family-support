import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={({ route }) => {
        const routeName = route.name.split("/").pop();

        const icons: Record<string, any> = {
          index: "home-outline",
          conteudos: "book-outline",
          salvos: "bookmark-outline",
        };

        const labels: Record<string, string> = {
          index: "Início",
          conteudos: "Conteúdos",
          salvos: "Salvos",
        };

        return {
          headerShown: false,
          tabBarActiveTintColor: "#4A90E2",
          tabBarInactiveTintColor: "#999",

          tabBarLabel: labels[routeName ?? ""] ?? routeName,

          tabBarStyle: {
            height: Platform.OS === "web" ? 70 : 60 + insets.bottom,
            paddingBottom:
              Platform.OS === "web" ? 10 : insets.bottom,
            paddingTop: 6,
          },

          tabBarIcon: ({ color, size }) => {
            const iconName =
              icons[routeName ?? ""] ?? "ellipse-outline";

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        };
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="conteudos" />
      <Tabs.Screen name="salvos" />
    </Tabs>
  );
}