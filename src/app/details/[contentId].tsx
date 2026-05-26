import { contentsData } from "@/messages/contentsData";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Feather
          name="arrow-left"
          size={26}
          color="#222"
          onPress={() => router.back()}
        />
      </View>

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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {data.sections?.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.heading}</Text>

              {section.content.map((paragraph, pIndex) => (
                <Text key={pIndex} style={styles.body}>
                  {paragraph}
                </Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
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
  marginHorizontal: 16,
  marginTop: -30,
  borderRadius: 28,
  padding: 24,
  maxHeight: "70%",
  minHeight: "55%",
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
    marginBottom: 20,
    lineHeight: 24,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 14,
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

  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: "#FFF",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
});
