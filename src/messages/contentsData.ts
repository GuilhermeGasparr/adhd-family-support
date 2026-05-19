export interface ContentItem {
  title: string;
  subtitle: string;
  image?: string;
  sections?: string[];
}

export const contentsData: Record<string, ContentItem> = {
  whatIs: {
    title: "O que é TDAH",
    subtitle: "Entenda o transtorno e suas características principais",
    sections: [
      "Transtorno do neurodesenvolvimento com desatenção, hiperatividade e impulsividade que impactam o funcionamento.",
    ],
  },
  wantedHelp: {
    title: "Como procurar ajuda",
    subtitle: "Entenda como buscar a melhor ajuda para sua criança",
  },
  estrategies: {
    title: "Estratégias para o dia a dia",
    subtitle: "Saiba como criar uma rotina estruturada e leve para a criança",
  },
  directs: {
    title: "Direitos da criança com TDAH",
    subtitle: "Informe-se dos direitos que sua criança têm",
  },
};
