import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Message } from "../types/message";

type Props = {
  message: Message;
  index?: number;
};

export default function ChatBubble({ message, index = 0 }: Props) {
  const isUser = message.sender === "user";

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 280,
        delay: index === 0 ? 150 : 0,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        friction: 7,
        tension: 60,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.botContainer,
        { opacity, transform: [{ translateY }] },
      ]}
    >
      {!isUser && (
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>🤖</Text>
        </View>
      )}

      <View
        style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text style={[styles.text, isUser && styles.userText]}>
          {message.text}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  userContainer: {
    justifyContent: "flex-end",
  },

  botContainer: {
    justifyContent: "flex-start",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E6FBFA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  avatarEmoji: {
    fontSize: 15,
  },

  bubble: {
    maxWidth: "78%",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },

  userBubble: {
    backgroundColor: "#0BBEBB",
    borderBottomRightRadius: 6,
  },

  botBubble: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 6,
  },

  text: {
    fontSize: 15.5,
    color: "#1E2233",
    lineHeight: 22,
  },

  userText: {
    color: "#FFF",
  },
});