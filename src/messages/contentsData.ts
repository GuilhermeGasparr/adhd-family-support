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
      "Entenda o transtorno e suas características principais .",
    image: "",
    sections: [
      {
        heading: "Conceito de TDAH:",
        content: [
          "Transtorno do neurodesenvolvimento com desatenção, hiperatividade e impulsividade ."
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
          "O TDAH é uma condição do neurodesenvolvimento. Não se fala usualmente em cura, mas muitos sintomas podem melhorar significativamente com tratamento e suporte adequado .",
        ]
      },
      {
        heading: "O TDAH é causado por falta de limites ?",
        content: [
          "Não. Trata-se de uma condição com base neurobiológica, com forte influência genética e fatores ambientais, não sendo causada pelo estilo parental ."
        ]
      },
      {
        heading: "Existem tipos de TDAH ?",
        content: [
          "Sim. Pode se apresentar de forma predominantemente desatenta, predominantemente hiperativa/impulsiva ou combinada ."
        ]
      },
      {
        heading: "Em que idade aparecem os sintomas ?",
        content: [
          "Os sintomas do TDAH geralmente surgem na infância e, pelos critérios diagnósticos, precisam estar presentes antes dos 12 anos. Em muitas crianças, sinais de desatenção, impulsividade ou hiperatividade já podem ser percebidos na pré-escola, especialmente em ambientes que exigem rotina, espera e controle do comportamento ."
        ]
      },
      {
        heading: "TDAH melhora com a idade ?",
        content: [
          "Pode haver redução de alguns sintomas ao longo do tempo, especialmente a hiperatividade. No entanto, muitos indivíduos continuam apresentando dificuldades na adolescência e na vida adulta, principalmente relacionadas à atenção e organização ."
        ]
      },
      {
        heading: "Frequência de diagnóstico da Condição em Crianças",
        content: [
          "É uma condição frequente do neurodesenvolvimento, afetando cerca de 5% das crianças, com variações conforme o contexto e os critérios utilizados ."
        ]
      },
      {
        heading: "Herdabilidade como Fator Crucial para o surgimento da condição",
        content: [
          "Há forte contribuição genética, com alta herdabilidade. Fatores ambientais também podem influenciar a expressão dos sintomas."
        ],
      }
    ],
  },
  conditionDiagnosis: {
    title: "Diagnóstico da Condição",
    subtitle: "Saiba como é feito a investigação e diagnóstico da condição na criança",
    image: "",
    sections: [
      {
        heading: "Quanto tempo leva para diagnosticar TDAH ?",
        content: [
          "O tempo pode variar, pois envolve uma avaliação clínica cuidadosa, análise do histórico da criança e coleta de informações em diferentes contextos.",
        ],
      },
      {
        heading: "A escola participa do diagnóstico ?",
        content: [
          "Sim. As informações da escola são fundamentais para entender o comportamento da criança em outros ambientes além de casa ."
        ],
      },
      {
        heading: "Como diferenciar TDAH de comportamento normal ?",
        content: [
          "No TDAH, os sintomas são persistentes, mais intensos do que o esperado para a idade, aparecem em diferentes contextos e causam prejuízo real no funcionamento social, acadêmico ou familiar ."
        ],
      },
      {
        heading: "Meu filho não me ouve, é TDAH ?",
        content: [
          "Pode ser, mas não é possível concluir apenas por esse comportamento. Dificuldades em “ouvir” podem estar ligadas à desatenção, impulsividade ou até a fatores situacionais. É importante observar se há um padrão persistente, em diferentes contextos, com impacto no funcionamento. Uma avaliação profissional é o caminho adequado ."
        ],
      },
      {
        heading: "Existe exame para TDAH ?",
        content: [
          "Não. Não há um exame único que confirme o diagnóstico. O diagnóstico é clínico, baseado na análise de sintomas, histórico do desenvolvimento e impacto funcional na vida da criança ."
        ],
      },
    ]
  },
  estrategies: {
    title: "Estratégias para o dia a dia",
    subtitle:
      "Dicas práticas para a rotina familiar",
      image: "",
    sections: [
      {
        heading: "O que posso fazer em casa ?",
        content: [
          "Estabelecer uma rotina previsível, com horários definidos e ambiente organizado, usar instruções curtas e objetivas, dividir tarefas em etapas pequenas e aplicar reforço positivo de forma consistente. Reduzir distrações e acompanhar de perto a execução das atividades também ajuda no desempenho.",
        ],
      },
      {
        heading: "Mudanças bruscas de rotina prejudicam ?",
        content: [
          "Sim! Crianças com TDAH tendem a responder melhor a ambientes previsíveis. Mudanças inesperadas podem aumentar a desorganização e a dificuldade de adaptação.",
        ],
      },
      {
        heading: "Sistema de Recompensa da Criança com TDAH",
        content: [
          "Sim. Recompensas próximas ao comportamento são mais eficazes, pois facilitam a associação entre a ação e a consequência, aumentando a chance de repetição do comportamento adequado .",
        ],
      },
      {
        heading: "Dar muitas ordens ao mesmo tempo funciona ?",
        content: [
          "Não. O mais eficaz é dar uma instrução por vez, de forma clara e direta, garantindo que a criança compreenda antes de avançar para a próxima ."
        ]
      },
      {
        heading: "Regulação Emocional da criança", 
        content: [
          "Auxilie a criança a identificar e nomear emoções, ensine estratégias simples como pausa, respiração e afastamento momentâneo da situação, e modele respostas mais adequadas diante de frustrações ."
        ]
      },
      {
        heading: "Orientações práticas para o contexto escolar", 
        content: [
          "A comunicação entre família e escola é fundamental para alinhar estratégias, monitorar o comportamento em diferentes contextos e oferecer suporte consistente."
        ]
      },
      {
        heading: "Organização visual ajuda ?", 
        content: [
          "Sim. Recursos como quadros de rotina, listas, lembretes visuais e uso de cores facilitam a compreensão, a previsibilidade e a execução de tarefas ."
        ]
      },
      {
        heading: "Crianças com TDAH entendem tempo facilmente ?", 
        content: [
          "Não. Muitas apresentam dificuldade na percepção do tempo. O uso de cronômetros, relógios visuais e avisos prévios pode ajudar na organização das atividades ."
        ]
      },
      {
        heading: "Como organizar a rotina ?", 
        content: [
          "Estruture o dia com horários definidos para acordar, estudar, brincar e dormir. Antecipe mudanças, use apoio visual e mantenha consistência, associando regras claras a reforços positivos ."
        ]
      },
      {
        heading: "O que é reforço positivo ?", 
        content: [
          "É a utilização de elogios ou recompensas após um comportamento adequado, com o objetivo de aumentar a probabilidade de que ele se repita ."
        ]
      },
      { 
        heading: "Como um estabelecimento de rotina ajuda no processo de desenvolvimento do aplicativo",
        content: [
          "Rotinas previsíveis ajudam crianças com TDAH a organizar tarefas, reduzir esquecimentos, antecipar transições e diminuir conflitos diários.",
        ]
      },

      {
        heading: "Melhorando a Atenção da Criança",
        content: [
          "Divida tarefas em etapas curtas, intercale pausas breves, utilize cronômetros ou timers visuais e reduza estímulos distratores. Instruções claras, metas específicas e feedback imediato ajudam a manter o foco e a persistência."
        ]
      },
      { 
        heading: "Treinamento Parental", 
        content: [
          "Programas de treinamento parental têm boa evidência para melhorar manejo comportamental, relação familiar e sintomas funcionais, especialmente em crianças menores.",
        ]
      },
      { 
        heading: "Estratégias para organização da rotina escolar", 
        content: [
          "Utilize horários fixos, previsíveis e consistentes, com apoio de listas e recursos visuais. Divida tarefas longas em etapas menores, estabeleça prioridades claras e mantenha um ambiente com poucos estímulos distratores. A previsibilidade favorece a autonomia e a execução das atividades.",
        ]
      },
    ],
  },
  treatment: {
    title: "Informações sobre Tratamento",
    subtitle: "Entenda como buscar a melhor ajuda para sua criança",
    image: "",
    sections: [
      {
        heading: "Quando usar medicamentos ?",
        content: [
          "É indicada quando os sintomas são moderados a graves e causam prejuízo significativo no funcionamento (escolar, social ou familiar), após avaliação profissional. A decisão deve ser individualizada e monitorada."
        ]
      },
      {
        heading: "Só medicação resolve ?",
        content: [
          "Não. O melhor resultado costuma ocorrer com abordagem multimodal, combinando medicação (quando indicada) com intervenções comportamentais, orientações aos pais e estratégias escolares ."
        ]
      },
      {
        heading: "Quando procurar ajuda ?",
        content: [
          "Quando os sintomas são persistentes (em geral por meses), ocorrem em mais de um contexto e geram prejuízo no desempenho acadêmico, nas relações sociais ou na rotina familiar."
        ]
      },
      {
        heading: "Medicamentos são seguros ?",
        content: [
          "Sim, quando prescritos e acompanhados por profissional qualificado. Apresentam boa evidência de eficácia e um perfil de segurança bem estabelecido, com monitoramento regular para ajustar dose e efeitos .",
          "Qualquer interrupção deve ser feita com orientação médica, considerando benefícios, efeitos e evolução do quadro .",
          "Medicamentos, quando usados conforme prescrição e com acompanhamento, não implicam dependência clínica automática. O uso inadequado, sem supervisão, é que representa risco .",
          "O acompanhamento regular é essencial para avaliar eficácia, ajustar doses, monitorar efeitos colaterais e garantir segurança no tratamento ."
        ]
      },
      {
        heading: "Terapia substitui medicação ?",
        content: [
         "Depende. Em casos leves, intervenções comportamentais podem ser suficientes, especialmente em crianças menores. Em quadros moderados a graves, a combinação de abordagens costuma trazer melhores resultados."
        ]
      },
    ]
  },
  practicalGuidelines: {
    title: "Orientações Práticas para a Família",
    subtitle: "Saiba como lidar com sua criança no cotidiano",
    image: "",
    sections: [
      {
        heading: "Como a Rotina pode Ajudar",
        content: [
          "Rotinas estruturadas e previsíveis melhoram a organização, reduzem a desatenção e facilitam o cumprimento de tarefas, sendo uma das estratégias mais recomendadas no manejo do TDAH ."
        ]
      },
      {
        heading: "Maneiras de instruir de forma eficaz",
        content: [
          "Use frases curtas, claras e diretas, dando uma instrução por vez. Garanta contato visual antes de falar, peça para a criança repetir o que entendeu e, quando possível, acompanhe com apoio visual. Orientações imediatas e específicas aumentam a chance de execução ."
        ]
      },
      {
        heading: "Ignorar comportamento ruim funciona ?",
        content: [
          "Para comportamentos leves e que buscam atenção (como resmungos ou pequenas provocações), a retirada de atenção do comportamento pode ajudar a reduzir a frequência. Deve ser combinada com reforço ativo de comportamentos adequados para ser mais eficaz."
        ]
      },
      {
        heading: "Sistema de Recompensa da Criança",
        content: [
          "O reforço positivo é uma das estratégias mais eficazes, especialmente quando é imediato, consistente e específico. Ele aumenta a probabilidade de repetição dos comportamentos desejados e melhora o engajamento da criança ."
        ]
      },
      {
        heading: "Dieta influencia TDAH ?",
        content: [
          "Alimentação equilibrada é importante para saúde geral. Algumas crianças podem se beneficiar de ajustes específicos, mas dieta isoladamente não substitui tratamentos baseados em evidência ."
        ]
      },
      {
        heading: "Atividade Física como auxiliar",
        content: [
          "Sim. A prática regular de atividade física está associada a melhora da atenção, do humor, do sono e da autorregulação. Também pode reduzir inquietação e favorecer o funcionamento global, sendo um importante complemento no manejo."
        ]
      },
      {
        heading: "",
        content: [
          ""
        ]
      },
      {
        heading: "",
        content: [
          ""
        ]
      },
      {
        heading: "",
        content: [
          ""
        ]
      },
    ]
  }
};