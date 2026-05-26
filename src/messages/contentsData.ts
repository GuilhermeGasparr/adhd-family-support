export interface Section {
  heading: string;
  content: string[];
}

export interface ContentItem {
  title: string;
  subtitle: string;
  image?: string;
  sections?: Section[];
}

export const contentsData: Record<string, ContentItem> = {
  whatIs: {
    title: "Entenda a Condição",
    subtitle:
      "Entenda o transtorno e suas características principais",
    image: "",
    sections: [
      {
        heading: "Conceito de TDAH:",
        content: [
          "Transtorno do neurodesenvolvimento com desatenção, hiperatividade e impulsividade"
        ],
      },
      {
        heading: "Quais são os Sintomas da Desatenção ?",
        content: [
          "• Dificuldade de manter atenção em tarefas",
          "• Cometer erros por descuido.", 
          "• Parecer não escutar quando lhe dirigem a palavra.",
          "• Não seguir instruções até o fim.", 
          "• Dificuldade de organização", 
          "• Evitar tarefas que exigem esforço mental contínuo", 
          "• Perder objetos, distrair-se facilmente e esquecer atividades do dia a dia."

        ],
      },
      {
        heading: "Como identificar hiperatividade ?",
        content: [
          "• Inquietação (mexer mãos e pés)",
          "• Levantar-se quando deveria permanecer sentado",
          "• Correr ou subir em locais inadequados (ou sensação interna de inquietação em adolescentes)",
          "• Dificuldade de brincar de forma tranquila",
          "• Estar constantemente “a mil”, falar excessivamente e agir como se estivesse “ligado no motor” "
        ]
      },
      {
        heading: "O TDAH tem cura ?",
        content: [
          "O TDAH é uma condição do neurodesenvolvimento. Não se fala usualmente em cura, mas muitos sintomas podem melhorar significativamente com tratamento e suporte adequado",
        ]
      }
    ],
  },
  wantedHelp: {
    title: "Como procurar ajuda",
    subtitle:
      "Entenda como buscar a melhor ajuda para sua criança",
    sections: [
      {
        heading: "Primeiro passo",
        content: [
          "Buscar avaliação profissional especializada.",
        ],
      },
    ],
  },
};