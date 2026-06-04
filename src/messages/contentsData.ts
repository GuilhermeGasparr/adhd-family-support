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
    subtitle: "Entenda o transtorno e suas características principais .",
    image: "",
    sections: [
      {
        heading: "Conceito de TDAH:",
        content: [
          "Transtorno do neurodesenvolvimento com desatenção, hiperatividade e impulsividade .",
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
          "• Perder objetos, distrair-se facilmente e esquecer atividades do dia a dia.",
        ],
      },
      {
        heading: "Como identificar hiperatividade ?",
        content: [
          "• Inquietação (mexer mãos e pés)",
          "• Levantar-se quando deveria permanecer sentado",
          "• Correr ou subir em locais inadequados (ou sensação interna de inquietação em adolescentes)",
          "• Dificuldade de brincar de forma tranquila",
          "• Estar constantemente “a mil”, falar excessivamente e agir como se estivesse “ligado no motor” ",
        ],
      },
      {
        heading: "O TDAH tem cura ?",
        content: [
          "O TDAH é uma condição do neurodesenvolvimento. Não se fala usualmente em cura, mas muitos sintomas podem melhorar significativamente com tratamento e suporte adequado .",
        ],
      },
      {
        heading: "O TDAH é causado por falta de limites ?",
        content: [
          "Não. Trata-se de uma condição com base neurobiológica, com forte influência genética e fatores ambientais, não sendo causada pelo estilo parental .",
        ],
      },
      {
        heading: "Existem tipos de TDAH ?",
        content: [
          "Sim. Pode se apresentar de forma predominantemente desatenta, predominantemente hiperativa/impulsiva ou combinada .",
        ],
      },
      {
        heading: "Em que idade aparecem os sintomas ?",
        content: [
          "Os sintomas do TDAH geralmente surgem na infância e, pelos critérios diagnósticos, precisam estar presentes antes dos 12 anos. Em muitas crianças, sinais de desatenção, impulsividade ou hiperatividade já podem ser percebidos na pré-escola, especialmente em ambientes que exigem rotina, espera e controle do comportamento .",
        ],
      },
      {
        heading: "TDAH melhora com a idade ?",
        content: [
          "Pode haver redução de alguns sintomas ao longo do tempo, especialmente a hiperatividade. No entanto, muitos indivíduos continuam apresentando dificuldades na adolescência e na vida adulta, principalmente relacionadas à atenção e organização .",
        ],
      },
      {
        heading: "Frequência de diagnóstico da Condição em Crianças",
        content: [
          "É uma condição frequente do neurodesenvolvimento, afetando cerca de 5% das crianças, com variações conforme o contexto e os critérios utilizados .",
        ],
      },
      {
        heading:
          "Herdabilidade como Fator Crucial para o surgimento da condição",
        content: [
          "Há forte contribuição genética, com alta herdabilidade. Fatores ambientais também podem influenciar a expressão dos sintomas.",
        ],
      },
      {
        heading: "O que significa TDAH combinado ?",
        content: ["É quando há presença significativa de sintomas tanto de desatenção quanto de hiperatividade/impulsividade, com impacto no funcionamento."],
      },
      {
        heading: "O tipo desatento é menos grave ?",
        content: ["Não necessariamente. Pode causar prejuízo importante, especialmente no desempenho acadêmico, organização e autonomia."],
      },   
      {
        heading: "Os sintomas variam ao longo do dia ?",
        content: ["Sim. Podem oscilar conforme o nível de cansaço, demandas cognitivas, ambiente e estrutura disponível."],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
    ],
  },
  conditionDiagnosis: {
    title: "Diagnóstico da Condição",
    subtitle:
      "Saiba como é feito a investigação e diagnóstico da condição na criança",
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
          "Sim. As informações da escola são fundamentais para entender o comportamento da criança em outros ambientes além de casa .",
        ],
      },
      {
        heading: "Como diferenciar TDAH de comportamento normal ?",
        content: [
          "No TDAH, os sintomas são persistentes, mais intensos do que o esperado para a idade, aparecem em diferentes contextos e causam prejuízo real no funcionamento social, acadêmico ou familiar .",
        ],
      },
      {
        heading: "Meu filho não me ouve, é TDAH ?",
        content: [
          "Pode ser, mas não é possível concluir apenas por esse comportamento. Dificuldades em “ouvir” podem estar ligadas à desatenção, impulsividade ou até a fatores situacionais. É importante observar se há um padrão persistente, em diferentes contextos, com impacto no funcionamento. Uma avaliação profissional é o caminho adequado .",
        ],
      },
      {
        heading: "Existe exame para TDAH ?",
        content: [
          "Não. Não há um exame único que confirme o diagnóstico. O diagnóstico é clínico, baseado na análise de sintomas, histórico do desenvolvimento e impacto funcional na vida da criança .",
        ],
      },
      {
        heading: "Quantos sintomas são necessários para o diagnóstico ?",
        content: ["O diagnóstico considera a presença de vários sintomas persistentes de desatenção e/ou hiperatividade-impulsividade, geralmente por pelo menos 6 meses, em mais de um contexto (como casa e escola), com prejuízo funcional significativo. O número de sintomas exigido varia com a idade, e a avaliação deve ser realizada por profissional qualificado."],
      },
      {
        heading: "Precisa ocorrer em mais de um ambiente ?",
        content: ["Sim. Os sintomas devem estar presentes em pelo menos dois contextos (como casa e escola) e de forma consistente, o que ajuda a diferenciar dificuldades situacionais de um padrão mais amplo de funcionamento."],
      },
      {
        heading: "Por quanto tempo os sintomas devem existir ?",
        content: ["Devem persistir por, no mínimo, 6 meses, com frequência e intensidade suficientes para causar prejuízo real no dia a dia da criança."],
      },
      {
        heading: "Pode ser apenas ansiedade ?",
        content: ["Pode. Alguns sintomas, como inquietação, distração e dificuldade de concentração, podem ocorrer tanto na ansiedade quanto no TDAH. Por isso, é essencial uma avaliação profissional cuidadosa para diferenciar as condições ou identificar quando elas coexistem."],
      },
      {
        heading: "Pode ser apenas falta de sono ?",
        content: ["O sono insuficiente ou de má qualidade pode causar sintomas semelhantes ao TDAH, como desatenção, irritabilidade e agitação. Por isso, é importante avaliar e corrigir o sono antes ou junto da investigação, com orientação de um profissional de saúde."],
      },
      {
        heading: "Questionários ajudam no diagnóstico ?",
        content: ["Sim. Escalas e questionários padronizados ajudam a organizar informações de pais e professores, identificar padrões de sintomas e monitorar evolução. Não substituem a avaliação clínica completa."],
      },
      {
        heading: "A história familiar é importante ?",
        content: ["Sim. O TDAH tem forte componente hereditário; histórico familiar aumenta a probabilidade e orienta a investigação.          "],
      },
      {
        heading: "Relatórios escolares são necessários ?",
        content: ["Ajudam muito. Informações da escola permitem avaliar o comportamento em outro contexto, identificar prejuízos acadêmicos e orientar intervenções."],
      },
      {
        heading: "Adultos também podem ter TDAH ?",
        content: ["Sim. Em muitos casos, os sintomas persistem na adolescência e vida adulta, especialmente desatenção, desorganização e dificuldades de planejamento."],
      },
      {
        heading: "Psicólogo pode diagnosticar ?",
        content: ["Pode realizar avaliação clínica detalhada e contribuir para o diagnóstico. Idealmente, o processo envolve profissionais de saúde qualificados, podendo incluir abordagem multiprofissional."],
      },
      {
        heading: "Como classificar leve, moderado ou grave ?",
        content: ["Considera-se a quantidade de sintomas, sua intensidade e, principalmente, o grau de prejuízo funcional nas áreas acadêmica, social e familiar."],
      },
    ],
  },
  estrategies: {
    title: "Estratégias para o dia a dia",
    subtitle: "Dicas práticas para a rotina familiar",
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
          "Não. O mais eficaz é dar uma instrução por vez, de forma clara e direta, garantindo que a criança compreenda antes de avançar para a próxima .",
        ],
      },
      {
        heading: "Regulação Emocional da criança",
        content: [
          "Auxilie a criança a identificar e nomear emoções, ensine estratégias simples como pausa, respiração e afastamento momentâneo da situação, e modele respostas mais adequadas diante de frustrações .",
        ],
      },
      {
        heading: "Orientações práticas para o contexto escolar",
        content: [
          "A comunicação entre família e escola é fundamental para alinhar estratégias, monitorar o comportamento em diferentes contextos e oferecer suporte consistente.",
        ],
      },
      {
        heading: "Organização visual ajuda ?",
        content: [
          "Sim. Recursos como quadros de rotina, listas, lembretes visuais e uso de cores facilitam a compreensão, a previsibilidade e a execução de tarefas .",
        ],
      },
      {
        heading: "Crianças com TDAH entendem tempo facilmente ?",
        content: [
          "Não. Muitas apresentam dificuldade na percepção do tempo. O uso de cronômetros, relógios visuais e avisos prévios pode ajudar na organização das atividades .",
        ],
      },
      {
        heading: "Como organizar a rotina ?",
        content: [
          "Estruture o dia com horários definidos para acordar, estudar, brincar e dormir. Antecipe mudanças, use apoio visual e mantenha consistência, associando regras claras a reforços positivos .",
        ],
      },
      {
        heading: "O que é reforço positivo ?",
        content: [
          "É a utilização de elogios ou recompensas após um comportamento adequado, com o objetivo de aumentar a probabilidade de que ele se repita .",
        ],
      },
      {
        heading:
          "Como um estabelecimento de rotina ajuda no processo de desenvolvimento do aplicativo",
        content: [
          "Rotinas previsíveis ajudam crianças com TDAH a organizar tarefas, reduzir esquecimentos, antecipar transições e diminuir conflitos diários.",
        ],
      },

      {
        heading: "Melhorando a Atenção da Criança",
        content: [
          "Divida tarefas em etapas curtas, intercale pausas breves, utilize cronômetros ou timers visuais e reduza estímulos distratores. Instruções claras, metas específicas e feedback imediato ajudam a manter o foco e a persistência.",
        ],
      },
      {
        heading: "Treinamento Parental",
        content: [
          "Programas de treinamento parental têm boa evidência para melhorar manejo comportamental, relação familiar e sintomas funcionais, especialmente em crianças menores.",
        ],
      },
      {
        heading: "Estratégias para organização da rotina escolar",
        content: [
          "Utilize horários fixos, previsíveis e consistentes, com apoio de listas e recursos visuais. Divida tarefas longas em etapas menores, estabeleça prioridades claras e mantenha um ambiente com poucos estímulos distratores. A previsibilidade favorece a autonomia e a execução das atividades.",
        ],
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
          "É indicada quando os sintomas são moderados a graves e causam prejuízo significativo no funcionamento (escolar, social ou familiar), após avaliação profissional. A decisão deve ser individualizada e monitorada.",
        ],
      },
      {
        heading: "Só medicação resolve ?",
        content: [
          "Não. O melhor resultado costuma ocorrer com abordagem multimodal, combinando medicação (quando indicada) com intervenções comportamentais, orientações aos pais e estratégias escolares .",
        ],
      },
      {
        heading: "Quando procurar ajuda ?",
        content: [
          "Quando os sintomas são persistentes (em geral por meses), ocorrem em mais de um contexto e geram prejuízo no desempenho acadêmico, nas relações sociais ou na rotina familiar.",
        ],
      },
      {
        heading: "Medicamentos são seguros ?",
        content: [
          "Sim, quando prescritos e acompanhados por profissional qualificado. Apresentam boa evidência de eficácia e um perfil de segurança bem estabelecido, com monitoramento regular para ajustar dose e efeitos .",
          "Qualquer interrupção deve ser feita com orientação médica, considerando benefícios, efeitos e evolução do quadro .",
          "Medicamentos, quando usados conforme prescrição e com acompanhamento, não implicam dependência clínica automática. O uso inadequado, sem supervisão, é que representa risco .",
          "O acompanhamento regular é essencial para avaliar eficácia, ajustar doses, monitorar efeitos colaterais e garantir segurança no tratamento .",
        ],
      },
      {
        heading: "Terapia substitui medicação ?",
        content: [
          "Depende. Em casos leves, intervenções comportamentais podem ser suficientes, especialmente em crianças menores. Em quadros moderados a graves, a combinação de abordagens costuma trazer melhores resultados.",
        ],
      },
      {
        heading: "Indicação para tomar Medicamentos",
        content: [
          "A indicação depende da intensidade dos sintomas e do impacto no funcionamento. Nem todas as crianças necessitam de tratamento medicamentoso .",
        ],
      },
      {
        heading: "Efeitos Colaterais possíveis",
        content: [
          "Os mais comuns incluem redução do apetite, dificuldade para dormir e irritabilidade. Em geral, são manejáveis com ajustes de dose ou horário .",
        ],
      },
      {
        heading: "Mudanças na Dose do Medicamento",
        content: [
          "A dose é individualizada e pode ser ajustada ao longo do tempo conforme resposta clínica e tolerabilidade .",
        ],
      },
      {
        heading: "O tratamento é contínuo ?",
        content: [
          "Geralmente sim, com reavaliações periódicas. O plano pode ser ajustado conforme a evolução e as necessidades da criança .",
        ],
      },
      {
        heading: "Velocidade do Efeito dos Medicamentos",
        content: [
          "Muitos apresentam efeito em curto prazo, especialmente estimulantes, mas podem ser necessários ajustes para alcançar o melhor resultado .",
        ],
      },
      {
        heading: "Todos respondem igual à medicação ?",
        content: [
          "Não. A resposta varia entre indivíduos, sendo comum a necessidade de ajustes no tipo de medicamento ou na dose para melhor eficácia e tolerância .",
        ],
      },
      {
        heading: "Pode haver troca de medicamento ?",
        content: [
          "Sim. A escolha é individualizada e pode ser ajustada conforme a resposta clínica e a tolerabilidade. Trocas são comuns quando não há benefício suficiente ou surgem efeitos adversos relevantes .",
        ],
      },
      {
        heading: "Consultas regulares são necessárias ?",
        content: [
          "Sim. O acompanhamento periódico é essencial para avaliar eficácia, ajustar doses, monitorar efeitos colaterais e revisar o plano terapêutico .",
        ],
      },
      {
        heading: "Esquecer doses prejudica ?",
        content: [
          "Pode reduzir o efeito do tratamento. A adesão irregular reduz a eficácia do tratamento e pode levar à oscilação dos sintomas ao longo do dia .",
        ],
      },
      {
        heading: "Influência da Medicação na perda de peso",
        content: [
          "Pode ocorrer, principalmente por redução do apetite. Por isso, é importante monitorar peso e crescimento e ajustar o manejo quando necessário .",
        ],
      },
      {
        heading: "Pode afetar o sono ?",
        content: [
          "Sim, especialmente dependendo do tipo de medicação, dose e horário de uso. Ajustes podem ser feitos para minimizar esse efeito .",
        ],
      },
      {
        heading: "Terapias complementares ajudam?",
        content: [
          "Podem contribuir, como atividade física, intervenções psicossociais e suporte educacional. No entanto, devem ser usadas como complemento, não substituindo tratamentos com evidência estabelecida quando indicados .",
        ],
      },
      {
        heading: "Tratamento é para toda vida ?",
        content: [
          "Depende. O curso é variável: alguns sintomas podem reduzir com o tempo, mas muitos indivíduos continuam necessitando de suporte. O plano deve ser reavaliado periodicamente .",
        ],
      },
      {
        heading: "A escola deve saber do tratamento ?",
        content: [
          "Sim. A comunicação com a escola permite alinhar estratégias, oferecer adaptações quando necessário e melhorar o suporte à criança .",
        ],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
    ],
  },
  practicalGuidelines: {
    title: "Orientações Práticas para a Família",
    subtitle: "Saiba como lidar com sua criança no cotidiano",
    image: "",
    sections: [
      {
        heading: "Como a Rotina pode Ajudar",
        content: [
          "Rotinas estruturadas e previsíveis melhoram a organização, reduzem a desatenção e facilitam o cumprimento de tarefas, sendo uma das estratégias mais recomendadas no manejo do TDAH .",
        ],
      },
      {
        heading: "Maneiras de instruir de forma eficaz",
        content: [
          "Use frases curtas, claras e diretas, dando uma instrução por vez. Garanta contato visual antes de falar, peça para a criança repetir o que entendeu e, quando possível, acompanhe com apoio visual. Orientações imediatas e específicas aumentam a chance de execução .",
        ],
      },
      {
        heading: "Ignorar comportamento ruim funciona ?",
        content: [
          "Para comportamentos leves e que buscam atenção (como resmungos ou pequenas provocações), a retirada de atenção do comportamento pode ajudar a reduzir a frequência. Deve ser combinada com reforço ativo de comportamentos adequados para ser mais eficaz.",
        ],
      },
      {
        heading: "Sistema de Recompensa da Criança",
        content: [
          "O reforço positivo é uma das estratégias mais eficazes, especialmente quando é imediato, consistente e específico. Ele aumenta a probabilidade de repetição dos comportamentos desejados e melhora o engajamento da criança .",
        ],
      },
      {
        heading: "Dieta influencia TDAH ?",
        content: [
          "Alimentação equilibrada é importante para saúde geral. Algumas crianças podem se beneficiar de ajustes específicos, mas dieta isoladamente não substitui tratamentos baseados em evidência .",
        ],
      },
      {
        heading: "Atividade Física como auxiliar",
        content: [
          "Sim. A prática regular de atividade física está associada a melhora da atenção, do humor, do sono e da autorregulação. Também pode reduzir inquietação e favorecer o funcionamento global, sendo um importante complemento no manejo.",
        ],
      },
      {
        heading:
          "Ambiente silencioso como auxiliar no aprendizado da criança com TDAH",
        content: [
          "Ambientes com menos estímulos auditivos e visuais favorecem a atenção e a permanência na tarefa. Reduzir distrações é particularmente importante durante o estudo, leitura e realização de deveres.",
        ],
      },
      {
        heading: "A escola deve adaptar atividades ?",
        content: [
          "Sim. Adaptações como instruções mais objetivas, divisão de tarefas, tempo adicional, uso de recursos visuais e apoio na organização melhoram o desempenho e reduzem o prejuízo funcional no ambiente escolar .",
        ],
      },
      {
        heading: "Tela piora TDAH ?",
        content: [
          "Uso excessivo de telas, especialmente à noite, pode piorar sono, irritabilidade e desatenção. Se houver conflitos intensos ou prejuízo escolar, procure orientação profissional .",
        ],
      },
      {
        heading: "Sono como influenciador direto dos sintomas da criança",
        content: [
          "Sono insuficiente ou de baixa qualidade pode intensificar desatenção, impulsividade e irritabilidade, além de prejudicar memória e regulação emocional. Em crianças com TDAH, alterações do sono tendem a agravar os sintomas e o funcionamento diário. Por isso, manter uma rotina regular de sono, com horários consistentes e boa higiene do sono, é parte importante do manejo .",
        ],
      },
      {
        heading: "Listas ajudam ?",
        content: [
          "Sim. Listas visuais e checklists apoiam a memória de trabalho e a organização, facilitando o acompanhamento de tarefas, materiais e etapas.",
        ],
      },
      {
        heading: "Cronômetro ajuda ?",
        content: [
          "Sim. Cronômetros tornam o tempo concreto, ajudam a iniciar tarefas e favorecem períodos curtos de concentração.",
        ],
      },
      {
        heading: "Dividir tarefas ajuda ?",
        content: [
          "Sim. Fracionar atividades em etapas menores reduz a sobrecarga, melhora a compreensão e aumenta a probabilidade de conclusão.",
        ],
      },
      {
        heading: "Regras claras ajudam ?",
        content: [
          "Sim. Regras simples, objetivas e consistentes tornam as expectativas mais previsíveis e facilitam a adesão ao comportamento esperado.",
        ],
      },
      {
        heading: "Consistência dos pais no auxílio à Criança",
        content: [
          "Sim. A aplicação consistente de regras e consequências aumenta a eficácia das estratégias comportamentais e reduz comportamentos desafiadores.",
        ],
      },
      {
        heading: "Validar sentimentos ajuda ?",
        content: [
          "Sim. Reconhecer e nomear as emoções da criança favorece a regulação emocional, reduz a intensidade das reações e ensina formas mais adaptativas de lidar com frustrações.",
        ],
      },
      {
        heading: "Punição funciona ?",
        content: [
          "Isoladamente, não é a estratégia mais eficaz. Abordagens baseadas em reforço positivo, regras claras e consequências consistentes tendem a produzir melhores resultados. Quando usadas, consequências devem ser proporcionais, imediatas e combinadas com ensino de comportamentos alternativos.",
        ],
      },
      {
        heading: "Olhar nos olhos ajuda ?",
        content: [
          "Sim. Garantir contato visual, chamar pelo nome e verificar se a criança está atenta antes de dar a instrução aumenta a compreensão e a probabilidade de execução.",
        ],
      },
      {
        heading: "Professores devem participar ?",
        content: [
          "Sim. O alinhamento entre família, escola e profissionais de saúde melhora a consistência das estratégias e reduz prejuízos em diferentes contextos.",
        ],
      },
      {
        heading: "Planejar o dia ajuda ?",
        content: [
          "Sim. Planejar horários de estudo, lazer e sono, com rotinas previsíveis e apoio visual, reduz esquecimentos, melhora a organização e favorece a autonomia.",
        ],
      },
      {
        heading: "TDAH afeta família ?",
        content: [
          "Sim. Pode gerar estresse, conflitos e sobrecarga. Orientação parental e estratégias estruturadas ajudam a melhorar a convivência e o manejo.",
        ],
      },
      {
        heading: "Pais precisam de apoio ?",
        content: ["Sim. Orientação estruturada, psicoeducação e intervenções baseadas em evidência ajudam os pais a aplicar estratégias eficazes, reduzindo conflitos e melhorando os resultados."],
      },
      {
        heading: "Informação no Apoio aos pais",
        content: ["Quando os pais compreendem o funcionamento do TDAH, conseguem ajustar expectativas, կիրառar estratégias consistentes e aderir melhor ao tratamento, o que melhora o prognóstico."],
      },
      {
        heading: "Estratégias consistentes ajudam ?",
        content: ["Sim. A consistência na aplicação de regras, rotinas e reforços é um dos fatores mais importantes para o sucesso das intervenções comportamentais e para a redução dos sintomas e prejuízos funcionais."],
      },
      {
        heading: "Melhoras comportamentais são imediatas ?",
        content: ["Nem sempre. Intervenções comportamentais costumam ter efeito progressivo e dependem de prática consistente ao longo do tempo. Já alguns tratamentos, como medicação quando indicada, podem ter efeito mais rápido, mas geralmente exigem ajustes para melhor resultado."],
      },
      {
        heading: "Seguir tratamento é importante ?",
        content: ["Sim. A adesão ao plano terapêutico está associada à redução dos sintomas e melhora do funcionamento acadêmico, social e familiar, além de impacto positivo na autoestima."],
      },
      {
        heading: "Como manter consistência nas regras ?",
        content: ["Definindo poucas regras, claras e objetivas, combinadas previamente e aplicadas de forma previsível. A consistência entre cuidadores é fundamental para aumentar a eficácia."],
      },
      {
        heading: "Gritar ajuda no controle do comportamento ?",
        content: ["Não. Pode aumentar a reatividade emocional, piorar o comportamento e prejudicar o vínculo. Estratégias baseadas em orientação clara, calma e consistente são mais eficazes."],
      },
      {
        heading: "Repetição como auxiliar no aprendizado",
        content: ["A repetição, associada a reforço positivo e feedback imediato, favorece a consolidação de comportamentos e habilidades."], 
      },
      {
        heading: "Comparação com outras crianças",
        content: ["Comparações negativas tendem a reduzir a autoestima e a motivação. O mais eficaz é focar no progresso individual da criança."],
      },
      {
        heading: "Grupos de apoio para auxílio dos pais",
        content: ["Sim. Promovem troca de experiências, suporte emocional e maior adesão a estratégias baseadas em evidência."],
      },
      {
        heading: "Ser firme ajuda ?",
        content: ["Sim. Uma postura firme, previsível e consistente, combinada com acolhimento, facilita o entendimento de limites e expectativas."],
      },
      {
        heading: "Superproteger ajuda ?",
        content: ["Não. Pode limitar o desenvolvimento da autonomia. O ideal é oferecer suporte gradual, incentivando independência conforme a capacidade da criança."],
      },
      {
        heading: "Dar feedback imediato ajuda ?",
        content: ["Sim. Feedback claro e imediato aumenta a compreensão, fortalece o comportamento adequado e melhora o aprendizado."],
      },
      {
        heading: "Planejar a semana ajuda ?",
        content: ["Sim. O planejamento semanal, com horários definidos e apoio visual, melhora a organização, reduz esquecimentos e facilita a antecipação de tarefas e compromissos."],
      },
      {
        heading: "Progresso Gradual da Criança",
        content: ["Sim. As melhorias costumam ocorrer de forma progressiva e dependem de consistência nas estratégias, acompanhamento e ajustes ao longo do tempo."],
      },
      {
        heading: "Crianças com TDAH precisam de rotina rígida ?",
        content: ["Precisam de rotina estruturada e previsível, mas com flexibilidade planejada. Estrutura dá segurança; flexibilidade ajuda a lidar com imprevistos sem aumentar a desorganização."],
      },
      {
        heading: "Antecipar mudanças ajuda ?",
        content: ["Sim. Avisar previamente sobre mudanças na rotina reduz ansiedade, melhora a adaptação e diminui comportamentos desorganizados."],
      },
      {
        heading: "Elogio verbal funciona ?",
        content: ["Sim. É mais eficaz quando imediato, específico e focado no comportamento (“você guardou seus materiais sem ajuda, muito bem”)."],
      },
      {
        heading: "Recompensas devem ser frequentes ?",
        content: ["Sim, especialmente no início das intervenções comportamentais. A frequência pode ser reduzida gradualmente conforme o comportamento se consolida."],
      },
      {
        heading: "Ignorar sempre é adequado ?",
        content: ["Não. A retirada de atenção deve ser usada apenas para comportamentos leves e que buscam atenção. Comportamentos importantes ou de risco exigem intervenção direta."],
      },
      {
        heading: "Consequências devem ser imediatas ?",
        content: ["Sim. Consequências próximas ao comportamento aumentam a associação entre ação e resultado, tornando a estratégia mais eficaz."],
      },
      {
        heading: "Falar olhando nos olhos ajuda sempre ?",
        content: ["Pode ajudar a aumentar a atenção da criança no momento da orientação, mas geralmente funciona melhor quando combinado com instruções curtas, claras, objetivas e dadas uma etapa de cada vez. Reduzir distrações e pedir que a criança repita o que entendeu também pode facilitar a compreensão e execução da tarefa."],
      },
      {
        heading: "Repetir instruções é necessário ?",
        content: ["Sim. A repetição, associada a linguagem clara e verificação de compreensão, ajuda a consolidar o entendimento, especialmente quando combinada com apoio visual ou demonstração prática."],
      },
      {
        heading: "Estudo em pequenos blocos de tempo",
        content: ["Períodos curtos de estudo, intercalados com pausas, favorecem a manutenção da atenção e aumentam a produtividade."],
      },
      {
        heading: "Pausas programadas nos estudos",
        content: ["Sim. Pausas breves e planejadas ajudam a prevenir fadiga mental, melhorar o autocontrole e manter o engajamento nas tarefas."],
      },
      {
        heading: "Sentar na frente da sala ajuda ?",
        content: ["Sim. Reduz estímulos distratores e facilita o acesso às instruções do professor, melhorando o foco e a participação."],
      },
      {
        heading: "Adaptações feitas pelo professor na sala de aula",
        content: ["Sim. Adaptações como instruções mais objetivas, divisão de atividades e apoio na organização aumentam a chance de sucesso acadêmico."],
      },
      {
        heading: "Reduzir carga de tarefa ajuda ?",
        content: ["Em alguns casos, sim. Ajustar a quantidade, mantendo os objetivos de aprendizagem, pode evitar sobrecarga e melhorar a qualidade da execução."],
      },
      {
        heading: "Tempo extra em provas é indicado ?",
        content: ["Pode ser. Quando há dificuldade de atenção e processamento, o tempo adicional permite demonstrar melhor o conhecimento."],
      },
      {
        heading: "Agenda escolar no auxílio da Criança",
        content: ["Sim. O uso de agenda auxilia no planejamento, organização e acompanhamento de tarefas e prazos."],
      },
      {
        heading: "Checklists são úteis?",
        content: ["Sim. Listas estruturadas ajudam na execução passo a passo, reduzem esquecimentos e aumentam a autonomia."],
      },
      {
        heading: "Técnicas de respiração ajudam ?",
        content: ["Sim. Estratégias simples de respiração auxiliam na regulação emocional, reduzindo impulsividade e reatividade."],
      },
      {
        heading: "Nomear emoções é útil?",
        content: ["Sim. Identificar e nomear emoções favorece o autocontrole, melhora a comunicação e contribui para respostas mais adaptativas."],
      },
      {
        heading: "Rotina de sono deve ser fixa ?",
        content: ["Sim. Identificar e nomear emoções favorece o autocontrole, melhora a comunicação e contribui para respostas mais adaptativas."],
      },
      {
        heading: "Reduzir estímulos visuais ajuda ?",
        content: ["Sim. Ambientes com menos estímulos visuais e auditivos reduzem distrações e facilitam a atenção sustentada, especialmente durante tarefas que exigem concentração."],
      },
      {
        heading: "Apps de organização ajudam ?",
        content: ["Podem ajudar. Quando usados de forma orientada, aplicativos de agenda, lembretes e listas apoiam a organização e o planejamento, funcionando melhor quando integrados à rotina da criança."],
      },
      {
        heading: "Timer visual ajuda ?",
        content: ["Sim. Torna o tempo mais concreto, ajudando a iniciar, manter e finalizar tarefas, além de facilitar a transição entre atividades."],
      },
      {
        heading: "Todos devem seguir as mesmas regras ?",
        content: ["Sim. A consistência entre cuidadores e contextos é fundamental para o aprendizado de comportamentos e para a eficácia das intervenções."],
      },
    ],
  },
  alerts: {
    title: "Alertas e Sinais de Gravidade",
    subtitle: "Perceba quando a situação se torna mais grave",
    image: "",

    sections: [
      {
        heading: "Quando o TDAH é grave ?",
        content: [
          "Quando os sintomas são intensos, persistentes e causam prejuízo significativo no funcionamento acadêmico, social ou familiar.",
        ],
      },
      {
        heading: "Repetência pode estar ligada ?",
        content: [
          "Sim. Dificuldades de atenção, organização e execução de tarefas podem impactar o desempenho escolar e, em alguns casos, contribuir para repetência.",
        ],
      },
      {
        heading: "Influência do TDAH nas Amizades da Criança",
        content: [
          "Pode interferir nas relações sociais devido à impulsividade, dificuldade em esperar a vez, interpretar sinais sociais e regular emoções, o que pode gerar conflitos ou rejeição pelos pares.",
        ],
      },
      {
        heading: "Riscos de Acidentes para a Criança",
        content: [
          "A impulsividade e a desatenção estão associadas a maior risco de acidentes, especialmente em atividades que exigem vigilância e controle comportamental.",
        ],
      },
      {
        heading: "Pode causar ansiedade ?",
        content: [
          "Pode estar associado. Ansiedade é uma comorbidade frequente e pode surgir tanto por fatores compartilhados quanto pelas dificuldades vivenciadas no dia a dia.",
        ],
      },
      {
        heading: "Esquecimento frequente é sinal de alerta ?",
        content: [
          "Sim. Quando é recorrente, ocorre em diferentes contextos e traz prejuízo funcional (escola, rotina, relações), merece avaliação mais cuidadosa.",
        ],
      },
      {
        heading: "Irritabilidade Relacionada ao TDAH",
        content: [
          "Pode ocorrer, principalmente em situações de frustração, sobrecarga ou dificuldade de autorregulação emocional.",
        ],
      },
      {
        heading: "Dificuldade em terminar tarefas é comum ?",
        content: [
          "Sim. É um dos sinais frequentes, relacionado a dificuldades de atenção sustentada, organização e persistência em atividades que exigem esforço mental.",
        ],
      },
      {
        heading: "Impulsividade extrema é preocupante ?",
        content: [
          "Sim. Quando é intensa, frequente e traz riscos ou prejuízo significativo, indica necessidade de avaliação e possível ajuste nas estratégias de manejo.",
        ],
      },
      {
        heading: "Ligação entre caída brusca de desempenho escolar e TDAH",
        content: [
          "Sim. Mudanças repentinas no rendimento escolar ou comportamento devem ser investigadas, pois podem indicar agravamento dos sintomas ou presença de outras condições associadas.",
        ],
      },
      {
        heading:
          "Crises emocionais frequentes em crianças com TDAH são normais ?",
        content: [
          "Não. Crises intensas, frequentes ou que impactam a rotina indicam dificuldade de regulação emocional e precisam de avaliação e intervenção adequadas.",
        ],
      },
      {
        heading: "Isolamento Social em Crianças com TDAH",
        content: [
          "Pode ocorrer, especialmente quando há dificuldades nas interações sociais ou experiências repetidas de frustração. Quando persistente, merece atenção.",
        ],
      },
      {
        heading: "Dificuldade em seguir regras de segurança ?",
        content: [
          "Sim. A impulsividade e a busca por respostas imediatas podem dificultar o cumprimento de regras de segurança, aumentando o risco em algumas situações.",
        ],
      },
      {
        heading: "Problemas de aprendizagem são comuns?",
        content: [
          "Sim. Transtornos de aprendizagem ocorrem com maior frequência em crianças com TDAH do que na população geral e podem ampliar o impacto no desempenho escolar, exigindo avaliação e intervenções específicas.",
        ],
      },
      {
        heading: "",
        content: [""],
      },
    ],
  },
  comorbidities: {
    title: "Comorbidades",
    subtitle:
      "Identifique as principais comorbidades de uma criança com a condição",
    image: "",

    sections: [
      {
        heading:
          "Criança com dificuldade em aprender precisa de acompanhamento ?",
        content: [
          "Sim. Quando a dificuldade é persistente, é importante avaliação profissional para identificar causas, como TDAH, transtornos de aprendizagem ou outros fatores, e orientar intervenções adequadas .",
        ],
      },
      {
        heading: "TDAH e suas influencias na linguagem",
        content: [
          "Pode estar associado, em alguns casos, a dificuldades na linguagem, especialmente na organização do discurso e compreensão de instruções mais complexas.",
        ],
      },
      {
        heading: "Pode haver dificuldade motora?",
        content: [
          "Sim. Algumas crianças podem apresentar dificuldades de coordenação motora, o que pode impactar atividades escolares e do dia a dia .",
        ],
      },
      {
        heading: "Ansiedade piora o TDAH ?",
        content: [
          "Sim. A ansiedade pode intensificar sintomas como desatenção e inquietação, além de aumentar o impacto funcional, exigindo manejo conjunto .",
        ],
      },
      {
        heading: "Baixa motivação pode ser depressão ?",
        content: [
          "Pode. Desmotivação persistente, especialmente quando acompanhada de tristeza, irritabilidade, alterações de sono ou perda de interesse, pode indicar depressão ou outra condição associada. É importante avaliação profissional para diferenciar causas e orientar o manejo.",
        ],
      },
      {
        heading: "Dislexia em Coexistência com TDAH",
        content: [
          "Transtornos de aprendizagem, como a dislexia, frequentemente coexistem com TDAH e podem potencializar as dificuldades acadêmicas, exigindo avaliação e intervenção específicas.",
        ],
      },
      {
        heading: "Insônia em Coexistência com TDAH",
        content: [
          "Dificuldades de sono são comuns, podendo estar relacionadas ao próprio TDAH, à rotina irregular ou ao uso de medicação. A higiene do sono é uma parte importante do manejo.",
        ],
      },
      {
        heading: "Oposição é comum ?",
        content: [
          "Pode ocorrer. Comportamentos opositores podem coexistir, especialmente quando há frustração frequente ou dificuldades de autorregulação, sendo importante avaliar o contexto e a intensidade.",
        ],
      },
      {
        heading: "Problemas de sono são comuns ?",
        content: [
          "Sim. Alterações no sono são frequentes e podem envolver dificuldade para iniciar ou manter o sono. Isso tende a agravar sintomas de desatenção, irritabilidade e autorregulação.",
        ],
      },
      {
        heading: "Ligação entre TDAH e Depressão",
        content: [
          "Pode estar associado. A depressão é uma comorbidade possível, muitas vezes relacionada às dificuldades persistentes e frustrações no dia a dia.",
        ],
      },
      {
        heading: "Agressividade ligada ao TDAH",
        content: [
          "Pode ocorrer, especialmente em contextos de frustração ou dificuldade de regulação emocional. É importante avaliar frequência, intensidade e impacto.",
        ],
      },
      {
        heading: "Ansiedade é comum ?",
        content: [
          "Sim. Transtornos de ansiedade são frequentemente associados e podem intensificar sintomas como inquietação e dificuldade de concentração.",
        ],
      },
      {
        heading: "Criança pode se sentir incapaz ?",
        content: [
          "Sim. Dificuldades repetidas e feedback negativo podem afetar a autoestima. Valorizar esforços e conquistas é essencial para fortalecer a confiança.",
        ],
      },
      {
        heading: "Pode causar desobediência ?",
        content: [
          "Pode estar associado a comportamentos que parecem desobediência, mas muitas vezes refletem dificuldade de atenção, impulsividade ou compreensão da instrução, e não oposição intencional.",
        ],
      },
      {
        heading: "Frustração é comum ?",
        content: [
          "Sim. Diante de dificuldades frequentes, a criança pode apresentar baixa tolerância à frustração e reações emocionais intensas.",
        ],
      },
      {
        heading: "O TDAH como Influência da Independência da Criança",
        content: [
          "Pode dificultar planejamento, organização e execução de tarefas diárias, impactando a autonomia.",
        ],
      },
      {
        heading: "TDAH ligado ao atraso nas atividades da Criança",
        content: [
          "A desatenção, a dificuldade de iniciar tarefas e o manejo do tempo podem levar a atrasos frequentes na rotina.",
        ],
      },
      {
        heading: "Pode causar explosões emocionais ?",
        content: [
          "Sim. Dificuldades de regulação emocional são frequentes e podem levar a reações intensas e desproporcionais, especialmente diante de frustração. Essas manifestações respondem bem a intervenções comportamentais e treinamento de habilidades emocionais.",
        ],
      },
      {
        heading: "Pode afetar notas ?",
        content: [
          "Sim. O TDAH pode comprometer atenção sustentada, organização, planejamento e conclusão de tarefas, impactando diretamente o desempenho acadêmico e as avaliações escolares.",
        ],
      },
      {
        heading: "Pode reprovar por TDAH ?",
        content: [
          "Pode. Quando não há identificação e suporte adequados, os prejuízos funcionais podem levar a baixo rendimento e, em alguns casos, repetência. Intervenções precoces reduzem esse risco.",
        ],
      },
      {
        heading: "TDAH como influência na dificuldade em fazer amigos",
        content: [
          "Impulsividade, dificuldade em esperar a vez, interpretar sinais sociais e regular emoções podem interferir nas relações com os pares.",
        ],
      },
      {
        heading: "Vergonha é comum ?",
        content: [
          "Pode ocorrer. Experiências repetidas de crítica, fracasso ou rejeição podem levar a sentimentos de vergonha, baixa autoestima e evitação de situações desafiadoras.",
        ],
      },
      {
        heading: "Pais ficam sobrecarregados ?",
        content: [
          "Sim. O manejo diário pode gerar estresse parental elevado. Programas de treinamento de pais e apoio profissional demonstram melhorar tanto o comportamento da criança quanto o bem-estar da família.",
        ],
      },
      {
        heading: "Esquecer tarefas diárias é comum ?",
        content: [
          "Sim. Déficits de atenção e memória de trabalho contribuem para esquecimentos frequentes de atividades, compromissos e responsabilidades.",
        ],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
      {
        heading: "",
        content: [""],
      },
    ],
  },
};
