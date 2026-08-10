import { contentsData } from "@/messages/contentsData";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 650;
export default function DetailScreen() {
  const { contentId } = useLocalSearchParams<{ contentId: string }>();
  const data = contentsData[contentId];

  // Entrance animation refs
  const backBtnScale = useRef(new Animated.Value(1)).current;
  const backBtnOpacity = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(40)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;

  // Scroll-driven "rising card" animation
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Staggered entrance animations
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(100),
        Animated.parallel([
          Animated.timing(backBtnOpacity, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.spring(backBtnScale, {
            toValue: 1,
            friction: 6,
            tension: 100,
            useNativeDriver: true,
          }),
        ]),
      ]),
      Animated.sequence([
        Animated.delay(200),
        Animated.parallel([
          Animated.timing(cardOpacity, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
          }),
          Animated.spring(cardTranslateY, {
            toValue: 0,
            friction: 8,
            tension: 60,
            useNativeDriver: true,
          }),
        ]),
      ]),
      Animated.sequence([
        Animated.delay(350),
        Animated.parallel([
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.spring(titleTranslateY, {
            toValue: 0,
            friction: 8,
            tension: 70,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, []);

  const handleBackPressIn = () => {
    Animated.spring(backBtnScale, {
      toValue: 0.88,
      friction: 5,
      tension: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBackPressOut = () => {
    Animated.spring(backBtnScale, {
      toValue: 1,
      friction: 4,
      tension: 120,
      useNativeDriver: true,
    }).start(() => router.back());
  };

  if (!data) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Conteúdo não encontrado.</Text>
      </View>
    );
  }

  // Image parallax: stretches slightly on pull-down, drifts up slower than
  // scroll on the way up so the card visibly overtakes it as you read.
  const imageTranslateY = scrollY.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
    outputRange: [-IMAGE_HEIGHT * 0.5, 0, IMAGE_HEIGHT * 0.5],
    extrapolate: "clamp",
  });
  const imageScale = scrollY.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Back Button — fixed above everything */}
      <Animated.View
        style={[
          styles.backButtonWrapper,
          {
            opacity: backBtnOpacity,
            transform: [{ scale: backBtnScale }],
          },
        ]}
      >
        <Pressable
          onPressIn={handleBackPressIn}
          onPressOut={handleBackPressOut}
          style={styles.backButton}
          hitSlop={10}
        >
          <Feather name="arrow-left" size={20} color="#1A1A2E" />
        </Pressable>
      </Animated.View>

      {/* Single scroll: image and card scroll together, so the card
          naturally rises and covers the image as the reader scrolls down */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Image */}
        <Animated.View
          style={[
            styles.imageWrapper,
            {
              opacity: imageOpacity,
              transform: [
                { translateY: imageTranslateY },
                { scale: imageScale },
              ],
            },
          ]}
        >
          {data.image ? (
            <Image source={{ uri: data.image }} style={styles.image} />
          ) : (
            <Image
              source={require("../../assets/familia-tdah2.png")}
              style={styles.image}
            />
          )}
        </Animated.View>

        {/* Content Card — rises over the image as the ScrollView scrolls */}
        <Animated.View
          style={[
            styles.card,
            {
              opacity: cardOpacity,
              transform: [{ translateY: cardTranslateY }],
            },
          ]}
        >
          <Animated.View
            style={{
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }],
            }}
          >
            {/* Pill tag */}
            <View style={styles.pill}>
              <Text style={styles.pillText}>Conteúdo</Text>
            </View>

            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subtitle}>{data.subtitle}</Text>

            {/* Divider */}
            <View style={styles.divider} />
          </Animated.View>

          {data.sections?.map((section, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.sectionHeadingRow}>
                <View style={styles.sectionAccent} />
                <Text style={styles.sectionTitle}>{section.heading}</Text>
              </View>

              {section.content.map((paragraph, pIndex) => (
                <Text key={pIndex} style={styles.body}>
                  {paragraph}
                </Text>
              ))}
            </View>
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },

  scrollContent: {
    paddingBottom: 48,
  },

  // Hero
  imageWrapper: {
    height: IMAGE_HEIGHT,
    width: "100%",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholder: {
    height: "100%",
    backgroundColor: "#D9E8F7",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderEmoji: {
    fontSize: 72,
  },

  // Back Button
  backButtonWrapper: {
    position: "absolute",
    top: 54,
    left: 20,
    zIndex: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.95)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  // Card
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    marginTop: -36,
    borderRadius: 32,
    paddingHorizontal: 26,
    paddingTop: 28,
    paddingBottom: 0,
    shadowColor: "#A0B4D0",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 10,
  },

  // Pill tag
  pill: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF4FF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 14,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4A7DDE",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.5,
    lineHeight: 34,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7A99",
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: "400",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEF1F7",
    marginBottom: 24,
  },

  section: {
    marginBottom: 30,
  },

  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  sectionAccent: {
    width: 4,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#4A7DDE",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0F172A",
    letterSpacing: -0.2,
    flex: 1,
  },

  body: {
    fontSize: 15.5,
    lineHeight: 27,
    color: "#3D4A63",
    marginBottom: 14,
    fontWeight: "400",
  },

  // Error
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6FB",
  },
  notFound: {
    fontSize: 16,
    color: "#6B7A99",
  },
});
