import InfoCard from "@/components/InfoCard";
import "@/i18n";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toolbar from "../../components/Toolbar";
export default function Index() {
  const { t } = useTranslation('translation');
  return (
    <SafeAreaView style={styles.safeArea}>
      <Toolbar
        title={t("Header.title")}
        subtitle={t("Header.subtitle")}
        icon={require("../../assets/icon-home.png")}
        onMenuPress={() => console.log("Menu aberto")}
      />
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.card}>
            <View style={styles.welcomeCard}>
              <View style={styles.iconContainer}>
                <View style={styles.bgIcon} />
                <Image
                  source={require("../../assets/icon-welcome.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{t("Welcome.title_welcome")}</Text>
                <Text style={styles.subtitle}></Text>
              </View>
            </View>
            <View style={styles.cardInfo}>
              <Image
                style={styles.bgInfo}
                source={require("../../assets/icon-info.png")}
              ></Image>
              <Text style={styles.textInfo}>{t("Welcome.text_info")}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.exploreText}>{t("explore_text")}</Text>
          </View>
          <InfoCard
            title={t("InfoCards.title_info1")}
            subtitle={t("InfoCards.subtitle_info1")}
            colorBg="#e2f6f9"
            colorIcon="#24c4bc"
            onPress={() =>
              console.log("Aqui abre as informações do transtorno")
            }
            icon="book-outline"
          />
          <InfoCard
            title={t("InfoCards.title_info2")}
            subtitle={t("InfoCards.subtitle_info2")}
            colorBg="#efbde0"
            colorIcon="#cc2db9"
            onPress={() =>
              console.log("Aqui abre as informações do transtorno")
            }
            icon="heart-outline"
          />
          <InfoCard
            title={t("InfoCards.title_info3")}
            subtitle={t("InfoCards.subtitle_info3")}
            colorBg="#f5d2aa"
            colorIcon="#dc6d13"
            onPress={() =>
              console.log("Aqui abre as informações do transtorno")
            }
            icon="bandage-outline"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 16,
    alignContent: "center",
  },

  contentWrapper: {
    width: "90%",
    maxWidth: 1080,
    alignSelf: "center",
  },

  containerItems: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#a43030",
    width: "100%",
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 1080,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignSelf: "center",
    flexDirection: "column",
    padding: 22,
    marginBottom: 40,
  },
  cardInfo: {
    backgroundColor: "#f5d6c9",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    flexShrink: 1,
  },

  textInfo: {
    fontWeight: "300",
    fontSize: 12,
    flexShrink: 1,
  },
  bgInfo: {
    width: 35,
    height: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    flexShrink: 1,
    marginStart: 14,
  },

  title: {
    fontSize: 22,
    fontWeight: "500",
  },

  subtitle: {
    fontWeight: "200",
    flexShrink: 1,
    paddingBottom: 10,
  },

  iconContainer: {
    width: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 5,
  },

  icon: {
    height: 70,
    resizeMode: "contain",
  },

  bgIcon: {
    position: "absolute",
    width: 45,
    height: 45,
    backgroundColor: "#f3f3f3e3",
    elevation: 1,
    borderRadius: 12,
  },

  welcomeCard: {
    flexDirection: "row",
  },

  exploreContainer: {
    width: "90%",
    alignSelf: "center",
  },

  exploreText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
  },
});
