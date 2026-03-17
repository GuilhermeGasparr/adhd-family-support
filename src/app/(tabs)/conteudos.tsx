import { useState } from "react";
import { useTranslation } from "react-i18next";
import InfoCard from "@/components/InfoCard";
import SearchBar from "@/components/SearchBar";
import Toolbar from "@/components/Toolbar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Conteudos() {
  const [search, setSearch] = useState("");
  const { t } = useTranslation()

  const contents = [
    {
      title: t("InfoCards.title_info2"),
      subtitle: t("InfoCards.subtitle_info2"),
      icon: "heart-outline",
      colorBg: "#c8edf5",
      colorIcon: "#0bbebb",
    
    },
    {
      title: "Como procurar ajuda",
      subtitle:
        "Entenda como buscar a melhor ajuda para sua criança",
      icon: "phone-portrait-outline",
      colorBg: "#d8f8d6",
      colorIcon: "#19850a",
    },
    {
      title: "Estratégias para o dia a dia",
      subtitle:
        "Saiba como criar uma rotina estruturada e leve para a criança",
      icon: "stats-chart-outline",
      colorBg: "#f1cabc",
      colorIcon: "#ed6825",
    },
    {
      title: "Direitos da criança com TDAH",
      subtitle:
        "Informe-se dos direitos que sua criança têm",
      icon: "journal-outline",
      colorBg: "#e4b9e0",
      colorIcon: "#a51091",
    },
  ];

  const filteredContents = contents.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <Toolbar
          title="Conteúdos"
          icon={require("@/assets/icon-home.png")}
          subtitle="Pesquise mais sobre a condição"
        />

        <View style={styles.container}>
          <SearchBar
            value={search}
            onChangeText={setSearch}
          />

          <Text style={styles.browseContents}>
            Browse Categories
          </Text>

          {filteredContents.length > 0 ? (
            filteredContents.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon as any}
                colorBg={item.colorBg}
                colorIcon={item.colorIcon}
              />
            ))
          ) : (
            <Text style={styles.noResults}>
              Nenhum resultado encontrado
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  scrollContainer: {
    paddingBottom: 30,
  },

  container: {
    paddingHorizontal: 16,
  },

  browseContents: {
    fontSize: 18,
    fontWeight: "500",
    color: "#837d7d",
    marginBottom: 20,
    marginTop: 10,
  },

  noResults: {
    textAlign: "center",
    marginTop: 40,
    color: "#999",
    fontSize: 14,
  },
});