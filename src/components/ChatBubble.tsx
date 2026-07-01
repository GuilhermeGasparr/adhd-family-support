import { StyleSheet, Text, View } from "react-native";
import { Message } from "../types/message";

type Props = {
  message: Message;
};

export default function ChatBubble({ message }: Props) {
  const isUser = message.sender === "user";

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.botContainer,
      ]}
    >
      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        <Text style={[styles.text, isUser && styles.userText]}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 12,
  },

  userContainer: {
    alignItems: "flex-end",
  },

  botContainer: {
    alignItems: "flex-start",
  },

  bubble: {
    maxWidth: "80%",
    borderRadius: 18,
    padding: 14,
  },

  userBubble: {
    backgroundColor: "#0BBEBB",
  },

  botBubble: {
    backgroundColor: "#ECECEC",
  },

  text: {
    fontSize: 16,
    color: "#222",
    lineHeight: 22,
  },

  userText: {
    color: "#FFF",
  },
});
