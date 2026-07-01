import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import ChatBubble from "@/components/ChatBubble";
import { Message } from "../types/message";
import { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { askChatbot } from "@/services/chatbotService";
import { Ionicons } from "@expo/vector-icons";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "👋 Olá! Sou a assistente virtual do Yara. Posso responder dúvidas sobre TDAH utilizando a base de conhecimento do aplicativo. Como posso ajudar?",
    },
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

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

    const answer = await askChatbot(userMessage);

    setMessages((previous) => [
      ...previous,
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: answer,
      },
    ]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatBubble message={item} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua pergunta..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />

        <Pressable onPress={sendMessage}>
          <Ionicons name="send" size={26} color="#0BBEBB" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#DDD",
  },

  input: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 10,
  },
});
