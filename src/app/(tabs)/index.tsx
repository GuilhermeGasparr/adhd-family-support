import InfoCard from "@/components/InfoCard";
import "@/i18n";
import { useTranslation } from "react-i18next";
import { useRef, useCallback, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

// ─── Animated InfoCard wrapper ───────────────────────────────────────────────

function AnimatedCard({
  children,
  delay,
  translateYAnim,
  opacityAnim,
  scaleAnim,
}: {
  children: React.ReactNode;
  delay: number;
  translateYAnim: Animated.Value;
  opacityAnim: Animated.Value;
  scaleAnim: Animated.Value;
}) {
  return (
    <Animated.View
      style={{
        opacity: opacityAnim,
        transform: [{ translateY: translateYAnim }, { scale: scaleAnim }],
        marginBottom: 14,
      }}
    >
      {children}
    </Animated.View>
  );
}

// ─── Floating Chat Button ────────────────────────────────────────────────────

function ChatFab() {
  const [showLabel, setShowLabel] = useState(true);

  const fabScale = useRef(new Animated.Value(0)).current;
  const pressScale = useRef(new Animated.Value(1)).current;
  const haloScale = useRef(new Animated.Value(1)).current;
  const haloOpacity = useRef(new Animated.Value(0.5)).current;
  const labelOpacity = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      // Entrance
      Animated.sequence([
        Animated.delay(500),
        Animated.spring(fabScale, {
          toValue: 1,
          friction: 6,
          tension: 80,
          useNativeDriver: true,
        }),
      ]).start();

      // Breathing halo, loops forever
      const halo = Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(haloScale, {
              toValue: 1.55,
              duration: 1400,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(haloOpacity, {
              toValue: 0,
              duration: 1400,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(haloScale, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(haloOpacity, {
            toValue: 0.5,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(900),
        ])
      );
      halo.start();

      // Friendly label, shows briefly then fades
      Animated.sequence([
        Animated.delay(900),
        Animated.timing(labelOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2800),
        Animated.timing(labelOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => setShowLabel(false));

      return () => halo.stop();
    }, [])
  );

  function handlePress() {
    Animated.sequence([
      Animated.timing(pressScale, {
        toValue: 0.88,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.spring(pressScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    router.push("/chatbot");
  }

  return (
    <View style={styles.fabWrapper} pointerEvents="box-none">
      {showLabel && (
        <Animated.View style={[styles.fabLabel, { opacity: labelOpacity }]}>
          <Text style={styles.fabLabelText}>Precisa de ajuda? 💬</Text>
        </Animated.View>
      )}

      <Animated.View style={{ transform: [{ scale: fabScale }] }}>
        <Animated.View
          style={[
            styles.fabHalo,
            {
              opacity: haloOpacity,
              transform: [{ scale: haloScale }],
            },
          ]}
        />

        <Animated.View style={{ transform: [{ scale: pressScale }] }}>
          <Pressable
            onPress={handlePress}
            style={styles.fab}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Abrir assistente virtual"
          >
            <Ionicons name="chatbubble-ellipses" size={26} color="#FFF" />
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────

export default function Index() {
  const { t } = useTranslation("translation");

  // Animation refs — one per animated block
  const headerOpacity = useRef(new Animated.Value(0)).current;
  const headerTranslateY = useRef(new Animated.Value(-16)).current;

  const welcomeOpacity = useRef(new Animated.Value(0)).current;
  const welcomeTranslateY = useRef(new Animated.Value(20)).current;
  const welcomeScale = useRef(new Animated.Value(0.97)).current;

  const card1Opacity = useRef(new Animated.Value(0)).current;
  const card1TranslateY = useRef(new Animated.Value(28)).current;
  const card1Scale = useRef(new Animated.Value(0.97)).current;

  const card2Opacity = useRef(new Animated.Value(0)).current;
  const card2TranslateY = useRef(new Animated.Value(28)).current;
  const card2Scale = useRef(new Animated.Value(0.97)).current;

  const card3Opacity = useRef(new Animated.Value(0)).current;
  const card3TranslateY = useRef(new Animated.Value(28)).current;
  const card3Scale = useRef(new Animated.Value(0.97)).current;

  const sectionOpacity = useRef(new Animated.Value(0)).current;

  // Reset all values then play animations — called every time screen is focused
  const playAnimations = useCallback(() => {
    // Reset
    headerOpacity.setValue(0);
    headerTranslateY.setValue(-16);
    welcomeOpacity.setValue(0);
    welcomeTranslateY.setValue(20);
    welcomeScale.setValue(0.97);
    card1Opacity.setValue(0);
    card1TranslateY.setValue(28);
    card1Scale.setValue(0.97);
    card2Opacity.setValue(0);
    card2TranslateY.setValue(28);
    card2Scale.setValue(0.97);
    card3Opacity.setValue(0);
    card3TranslateY.setValue(28);
    card3Scale.setValue(0.97);
    sectionOpacity.setValue(0);

    Animated.stagger(80, [
      // Header
      Animated.parallel([
        Animated.timing(headerOpacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(headerTranslateY, {
          toValue: 0,
          friction: 8,
          tension: 70,
          useNativeDriver: true,
        }),
      ]),
      // Welcome card
      Animated.parallel([
        Animated.timing(welcomeOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(welcomeTranslateY, {
          toValue: 0,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
        Animated.spring(welcomeScale, {
          toValue: 1,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
      // Section label
      Animated.timing(sectionOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      // Cards staggered
      Animated.parallel([
        Animated.timing(card1Opacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(card1TranslateY, {
          toValue: 0,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
        Animated.spring(card1Scale, {
          toValue: 1,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(card2Opacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(card2TranslateY, {
          toValue: 0,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
        Animated.spring(card2Scale, {
          toValue: 1,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(card3Opacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(card3TranslateY, {
          toValue: 0,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
        Animated.spring(card3Scale, {
          toValue: 1,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  // Triggers every time this screen comes into focus
  useFocusEffect(
    useCallback(() => {
      playAnimations();
    }, [playAnimations]),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* ── Header ── */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerOpacity,
              transform: [{ translateY: headerTranslateY }],
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.headerEyebrow}>Bem-vindo</Text>
            <Text style={styles.headerTitle}>{t("Header.title")}</Text>
            <Text style={styles.headerSubtitle}>{t("Header.subtitle")}</Text>
          </View>
        </Animated.View>

        <View style={styles.container}>
          {/* ── Welcome Card ── */}
          <Animated.View
            style={[
              styles.welcomeCard,
              {
                opacity: welcomeOpacity,
                transform: [
                  { translateY: welcomeTranslateY },
                  { scale: welcomeScale },
                ],
              },
            ]}
          >
            {/* Top row: icon + greeting */}
            <View style={styles.welcomeTop}>
              <View style={styles.iconBubble}>
                <Image
                  source={require("../../assets/icon-welcome.png")}
                  style={styles.welcomeIcon}
                />
              </View>
              <View style={styles.welcomeTextWrap}>
                <Text style={styles.welcomeTitle}>
                  {t("Welcome.title_welcome")}
                </Text>
              </View>
            </View>

            {/* Info banner */}
            <View style={styles.infoBanner}>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color="#4A7DDE"
                style={{ marginRight: 10, flexShrink: 0 }}
              />
              <Text style={styles.infoText}>{t("Welcome.text_info")}</Text>
            </View>
          </Animated.View>

          {/* ── Section label ── */}
          <Animated.View style={{ opacity: sectionOpacity }}>
            <View style={styles.sectionRow}>
              <Text style={styles.sectionEyebrow}>Explorar</Text>
              <Text style={styles.sectionTitle}>{t("explore_text")}</Text>
            </View>
          </Animated.View>

          {/* ── Info Cards ── */}
          <AnimatedCard
            delay={0}
            translateYAnim={card1TranslateY}
            opacityAnim={card1Opacity}
            scaleAnim={card1Scale}
          >
            <InfoCard
              title={t("InfoCards.title_info1")}
              subtitle={t("InfoCards.subtitle_info1")}
              colorBg="#E0F5FA"
              colorIcon="#0BBEBB"
              onPress={() =>
                router.push({
                  pathname: "/details/[contentId]",
                  params: { contentId: "whatIs" },
                })
              }
              icon="book-outline"
            />
          </AnimatedCard>

          <AnimatedCard
            delay={80}
            translateYAnim={card2TranslateY}
            opacityAnim={card2Opacity}
            scaleAnim={card2Scale}
          >
            <InfoCard
              title={t("InfoCards.title_info2")}
              subtitle={t("InfoCards.subtitle_info2")}
              colorBg="#F3E2F1"
              colorIcon="#A51091"
              onPress={() =>
                router.push({
                  pathname: "/details/[contentId]",
                  params: { contentId: "conditionDiagnosis" },
                })
              }
              icon="heart-outline"
            />
          </AnimatedCard>

          <AnimatedCard
            delay={160}
            translateYAnim={card3TranslateY}
            opacityAnim={card3Opacity}
            scaleAnim={card3Scale}
          >
            <InfoCard
              title={t("InfoCards.title_info3")}
              subtitle={t("InfoCards.subtitle_info3")}
              colorBg="#FEF0DC"
              colorIcon="#B17617"
              onPress={() =>
                router.push({
                  pathname: "/details/[contentId]",
                  params: { contentId: "estrategies" },
                })
              }
              icon="bandage-outline"
            />
          </AnimatedCard>
        </View>
      </ScrollView>

      <ChatFab />
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  scrollContainer: {
    paddingBottom: 48,
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  headerEyebrow: {
    fontSize: 12,
    fontWeight: "700",
    color: "#3D6FD1",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111527",
    letterSpacing: -0.8,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#565F76",
    lineHeight: 21,
  },

  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },

  welcomeCard: {
    backgroundColor: "#ffffffbc",
    borderRadius: 24,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#f9fafd",
    shadowColor: "#a4a8b0",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
  welcomeTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconBubble: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#E3EBFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  welcomeIcon: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  welcomeTextWrap: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111527",
    letterSpacing: -0.3,
    lineHeight: 28,
  },

  infoBanner: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#E3EBFF",
    borderRadius: 14,
    padding: 14,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: "#374162",
    lineHeight: 20,
    fontWeight: "400",
  },

  sectionRow: {
    marginBottom: 18,
  },
  sectionEyebrow: {
    fontSize: 12,
    fontWeight: "700",
    color: "#cecece",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111527",
    letterSpacing: -0.3,
  },

  fabWrapper: {
    position: "absolute",
    right: 20,
    bottom: 28,
    alignItems: "flex-end",
  },

  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#089D9A",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#089D9A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  fabHalo: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#089D9A",
  },

  fabLabel: {
    backgroundColor: "#1A2036",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    marginBottom: 10,
    maxWidth: 190,
  },

  fabLabelText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "600",
  },
});