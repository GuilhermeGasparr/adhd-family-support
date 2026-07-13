import { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
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
  const scale = useRef(new Animated.Value(1)).current;
  const iconScale = useRef(new Animated.Value(1)).current;
  const chevronX = useRef(new Animated.Value(0)).current;
  const shadowOpacity = useRef(new Animated.Value(0.12)).current;

  const animateTo = (
    toScale: number,
    toIconScale: number,
    toChevronX: number,
    toShadow: number
  ) => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: toScale,
        useNativeDriver: true,
        speed: 30,
        bounciness: 6,
      }),
      Animated.spring(iconScale, {
        toValue: toIconScale,
        useNativeDriver: true,
        speed: 30,
        bounciness: 8,
      }),
      Animated.spring(chevronX, {
        toValue: toChevronX,
        useNativeDriver: true,
        speed: 30,
        bounciness: 8,
      }),
      Animated.timing(shadowOpacity, {
        toValue: toShadow,
        duration: 120,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handlePressIn = () => animateTo(0.97, 1.08, 4, 0.05);
  const handlePressOut = () => animateTo(1, 1, 0, 0.12);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      hitSlop={4}
    >
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale }],
            shadowOpacity,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.iconContainer,
            {
              backgroundColor: colorBg,
              transform: [{ scale: iconScale }],
            },
          ]}
        >
          <Ionicons name={icon} size={22} color={colorIcon} />
        </Animated.View>

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>

        <Animated.View style={{ transform: [{ translateX: chevronX }] }}>
          <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEF1F6",
    elevation: 2,
    shadowColor: "#1A2233",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
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
    color: "#1F2937",
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 17,
  },
});