import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TextInput,
  Pressable,
  Animated,
  Image,
} from "react-native";
import ChatBubble from "@/components/ChatBubble";
import TypingIndicator from "@/components/TypingIndicator";
import { Message } from "../types/message";
import { useRef, useState } from "react";
import { askChatbot } from "@/services/chatbotService";
import { Ionicons } from "@expo/vector-icons";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "👋 Olá! Sou a assistente virtual do TDAH Apoio. Posso responder dúvidas sobre TDAH utilizando a base de conhecimento do aplicativo. Como posso ajudar?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef<FlatList>(null);
  const sendScale = useRef(new Animated.Value(1)).current;

  function animateSendButton() {
    Animated.sequence([
      Animated.timing(sendScale, {
        toValue: 0.8,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.spring(sendScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }

  async function sendMessage() {
    if (!input.trim()) return;

    animateSendButton();

    const userMessage = input;

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now().toString(),
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setIsTyping(true);

    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });

    const answer = await askChatbot(userMessage);

    setIsTyping(false);
    setMessages((previous) => [
      ...previous,
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: answer,
      },
    ]);

    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.botAvatar}>
          <Image
            source={require("@/assets/avatar-02.png")}
            style={styles.botAvatarImage}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Assistente TDAH Apoio</Text>
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Online agora</Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ChatBubble message={item} index={index} />
          )}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={() =>
            listRef.current?.scrollToEnd({ animated: true })
          }
          ListFooterComponent={isTyping ? <TypingIndicator /> : null}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua pergunta..."
            placeholderTextColor="#9AA3B2"
            value={input}
            onChangeText={setInput}
            style={styles.input}
            multiline
            maxLength={500}
          />

          <Animated.View style={{ transform: [{ scale: sendScale }] }}>
            <Pressable
              onPress={sendMessage}
              style={[
                styles.sendButton,
                !input.trim() && styles.sendButtonDisabled,
              ]}
              disabled={!input.trim()}
            >
              <Ionicons name="send" size={20} color="#FFF" />
            </Pressable>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderColor: "#EDEFF4",
  },

  botAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E6FBFA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    overflow: "hidden",
  },

  botAvatarImage: {
    width: "100%",
    height: "100%",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E2233",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#3ECF8E",
    marginRight: 5,
  },

  statusText: {
    fontSize: 12,
    color: "#7A8296",
  },

  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    flexGrow: 1,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 12,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#EDEFF4",
  },

  input: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 120,
    fontSize: 15,
    color: "#1E2233",
  },

  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0BBEBB",
    justifyContent: "center",
    alignItems: "center",
  },

  sendButtonDisabled: {
    backgroundColor: "#B9E9E8",
  },
});
