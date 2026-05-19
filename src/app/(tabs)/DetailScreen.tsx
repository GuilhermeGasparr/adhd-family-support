import { contentsData } from "@/messages/contentsData";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const DetailScreen = () => {
  const { contentId } = useLocalSearchParams<{
    contentId: string;
  }>();
  const data = contentsData[contentId];

  if (!data) {
    return <Text>Conteúdo não encontrado.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Imagem dinâmica */}
      {data.image && (
        <Image source={{ uri: data.image }} style={styles.image} />
      )}

      {/* Título dinâmico */}
      <Text style={styles.title}>{data.title}</Text>

      {/* Mapeia os vários parágrafos de texto */}
      {data.sections?.map((paragraph, index) => (
        <Text key={index} style={styles.body}>
          {paragraph}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, resizeMode: "cover" },
  title: { fontSize: 24, fontWeight: "bold", margin: 20, color: "#333" },
  body: {
    fontSize: 16,
    lineHeight: 26,
    marginHorizontal: 20,
    marginBottom: 15,
    color: "#555",
  },
});

export default DetailScreen;
