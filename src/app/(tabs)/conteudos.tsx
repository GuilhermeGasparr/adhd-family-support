import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
// ─── Animated Card ───────────────────────────────────────────────────────────

function AnimatedCard({
  item,
  index,
}: {
  item: (typeof CONTENTS)[0];
  index: number;
}) {
  const translateY = useRef(new Animated.Value(30)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  // Nova animação dedicada ao efeito Hover (passar o mouse)
  const hoverAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 420,
        delay: index * 70,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        friction: 8,
        tension: 60,
        delay: index * 70,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Eventos de clique / toque (Scale)
  const onPressIn = () =>
    Animated.spring(scale, {
      toValue: 0.96,
      friction: 5,
      tension: 200,
      useNativeDriver: true,
    }).start();

  const onPressOut = () =>
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 120,
      useNativeDriver: true,
    }).start();

  // Eventos de Mouse Hover (Levantar)
  const onHoverIn = () => {
    Animated.spring(hoverAnim, {
      toValue: 1, // Ativa o estado de hover
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const onHoverOut = () => {
    Animated.spring(hoverAnim, {
      toValue: 0, // Interrompe o estado de hover
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  // Interpolação para levantar o card em -6px quando hoverAnim for 1
  const hoverTranslateY = hoverAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -6],
  });

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          { translateY: translateY }, // Animação de entrada (surgir de baixo)
          { translateY: hoverTranslateY }, // Animação de hover (levantar)
          { scale }, // Animação de clique (reduzir tamanho)
        ],
        marginBottom: 14,
      }}
    >
      <Pressable
        onPress={item.onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        // Adicionando os listeners de Hover (Web/Desktop)
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        style={styles.card}
      >
        {/* Icon bubble */}
        <View style={[styles.iconBubble, { backgroundColor: item.colorBg }]}>
          <Ionicons name={item.icon as any} size={24} color={item.colorIcon} />
        </View>

        {/* Text */}
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.cardSubtitle} numberOfLines={2}>
            {item.subtitle}
          </Text>
        </View>

        {/* Arrow */}
        <View style={styles.arrowWrap}>
          <Ionicons name="chevron-forward" size={16} color="#C0C8D8" />
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ─── Search Bar ──────────────────────────────────────────────────────────────

function ModernSearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (t: string) => void;
}) {
  const focusAnim = useRef(new Animated.Value(0)).current;

  const onFocus = () =>
    Animated.timing(focusAnim, {
      toValue: 1,
      duration: 220,
      useNativeDriver: false,
    }).start();

  const onBlur = () =>
    Animated.timing(focusAnim, {
      toValue: 0,
      duration: 220,
      useNativeDriver: false,
    }).start();

  const borderColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#E8ECF4", "#4A7DDE"],
  });

  return (
    <Animated.View style={[styles.searchWrapper, { borderColor }]}>
      <Ionicons
        name="search-outline"
        size={18}
        color="#9AA3B8"
        style={{ marginRight: 10 }}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar conteúdo..."
        placeholderTextColor="#B0B8CC"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {value.length > 0 && (
        <Pressable onPress={() => onChangeText("")} hitSlop={8}>
          <Ionicons name="close-circle" size={18} color="#B0B8CC" />
        </Pressable>
      )}
    </Animated.View>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTENTS = [
  {
    title: "Diagnóstico da Condição",
    subtitle: "Compreenda o processo de identificação da condição",
    icon: "clipboard-outline",
    colorBg: "#E0F2FE",
    colorIcon: "#0284C7",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "conditionDiagnosis" },
      }),
  },
  {
    title: "Informações sobre Tratamento",
    subtitle: "Entenda como buscar a melhor ajuda para sua criança",
    icon: "medical-outline",
    colorBg: "#DCFCE7",
    colorIcon: "#16A34A",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "treatment" },
      }),
  },
  {
    title: "Estratégias para o dia a dia",
    subtitle: "Crie uma rotina estruturada e leve para a criança",
    icon: "bulb-outline",
    colorBg: "#FEF3C7",
    colorIcon: "#D97706",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "estrategies" },
      }),
  },
  {
    title: "Orientações Práticas para a Família",
    subtitle: "Saiba como lidar com sua criança no cotidiano",
    icon: "people-outline",
    colorBg: "#F3E8FF",
    colorIcon: "#9333EA",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "practicalGuidelines" },
      }),
  },
  {
    title: "Alertas e Sinais de Gravidade",
    subtitle: "Perceba quando a situação se torna mais grave",
    icon: "warning-outline",
    colorBg: "#FEE2E2",
    colorIcon: "#DC2626",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "alerts" },
      }),
  },
  {
    title: "Comorbidades",
    subtitle: "Identifique as principais comorbidades associadas à condição",
    icon: "git-network-outline",
    colorBg: "#EDE9FE",
    colorIcon: "#6366F1",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "comorbidities" },
      }),
  },
  {
    title: "Contexto Psicológico",
    subtitle: "Entenda mais sobre o contexto psicológico que envolve o TDAH",
    icon: "happy-outline",
    colorBg: "#FCE7F3",
    colorIcon: "#DB2777",
    onPress: () =>
      router.push({
        pathname: "/details/[contentId]",
        params: { contentId: "psychologicalContext" },
      }),
  },
];
// ─── Screen ──────────────────────────────────────────────────────────────────

export default function Conteudos() {
  const [search, setSearch] = useState("");

  const headerOpacity = useRef(new Animated.Value(0)).current;
  const headerTranslateY = useRef(new Animated.Value(-12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(headerTranslateY, {
        toValue: 0,
        friction: 8,
        tension: 70,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const filtered = CONTENTS.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerOpacity,
              transform: [{ translateY: headerTranslateY }],
            },
          ]}
        >
          <Text style={styles.headerEyebrow}>Biblioteca</Text>
          <Text style={styles.headerTitle}>Conteúdos</Text>
          <Text style={styles.headerSubtitle}>
            Pesquise e explore informações sobre a condição
          </Text>
        </Animated.View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <ModernSearchBar value={search} onChangeText={setSearch} />
        </View>

        {/* Section label */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionLabel}>
            {search
              ? `${filtered.length} resultado${filtered.length !== 1 ? "s" : ""}`
              : "Todas as categorias"}
          </Text>
        </View>

        {/* Cards */}
        <View style={styles.cardsContainer}>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <AnimatedCard key={item.title} item={item} index={index} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
              <Text style={styles.emptyHint}>Tente outro termo de busca</Text>
            </View>
          )}
        </View>
      </ScrollView>
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
    paddingBottom: 40,
  },

  // Header
  header: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 8,
  },
  headerEyebrow: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4A7DDE",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.8,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#7A869A",
    lineHeight: 21,
    fontWeight: "400",
  },

  // Search
  searchContainer: {
    paddingHorizontal: 22,
    marginTop: 20,
    marginBottom: 4,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1.5,
    shadowColor: "#A0B4D0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#0F172A",
    fontWeight: "400",
  },

  // Section
  sectionRow: {
    paddingHorizontal: 22,
    marginTop: 22,
    marginBottom: 14,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9AA3B8",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },

  // Cards
  cardsContainer: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: "#A0B4D0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 5,
    gap: 14,
  },
  iconBubble: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  cardText: {
    flex: 1,
    gap: 3,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    letterSpacing: -0.2,
    lineHeight: 21,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#7A869A",
    lineHeight: 19,
    fontWeight: "400",
  },
  arrowWrap: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: "#F4F6FB",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  // Empty
  emptyState: {
    alignItems: "center",
    paddingTop: 60,
    gap: 8,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3D4A63",
  },
  emptyHint: {
    fontSize: 13,
    color: "#9AA3B8",
  },
});
