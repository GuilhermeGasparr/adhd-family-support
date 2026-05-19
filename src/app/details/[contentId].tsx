import { contentsData } from "@/messages/contentsData";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DetailScreen() {
  const { contentId } = useLocalSearchParams<{
    contentId: string;
  }>();

  const data = contentsData[contentId];

  if (!data) {
    return (
      <View style={styles.center}>
        <Text>Conteúdo não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {data.image ? (
        <Image source={{ uri: data.image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>📘</Text>
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>

        {data.sections?.map((paragraph, index) => (
          <Text key={index} style={styles.body}>
            {paragraph}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  content: {
    paddingBottom: 40,
  },

  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },

  placeholder: {
    height: 250,
    backgroundColor: "#DDEAF8",
    justifyContent: "center",
    alignItems: "center",
  },

  placeholderText: {
    fontSize: 80,
  },

  card: {
    backgroundColor: "#FFF",
    marginTop: -25,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
    lineHeight: 24,
  },

  body: {
    fontSize: 17,
    lineHeight: 28,
    color: "#444",
    marginBottom: 18,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});