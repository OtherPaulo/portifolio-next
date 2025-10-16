"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

// Função para calcular a duração entre duas datas
const calcularDuracao = (dataInicio: string): string => {
  const meses = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
  ];
  
  // Parse da data de início (formato: "ago de 2025")
  const [mesInicio, , anoInicio] = dataInicio.split(' ');
  const mesIndex = meses.indexOf(mesInicio.toLowerCase());
  
  if (mesIndex === -1) return dataInicio;
  
  const dataInicioObj = new Date(parseInt(anoInicio), mesIndex);
  const dataAtual = new Date();
  
  const diffEmMeses = (dataAtual.getFullYear() - dataInicioObj.getFullYear()) * 12 + 
                     (dataAtual.getMonth() - dataInicioObj.getMonth());
  
  if (diffEmMeses < 1) {
    return `${dataInicio} - o momento · 1 mês`;
  } else if (diffEmMeses < 12) {
    return `${dataInicio} - o momento · ${diffEmMeses} ${diffEmMeses === 1 ? 'mês' : 'meses'}`;
  } else {
    const anos = Math.floor(diffEmMeses / 12);
    const mesesRestantes = diffEmMeses % 12;
    
    if (mesesRestantes === 0) {
      return `${dataInicio} - o momento · ${anos} ${anos === 1 ? 'ano' : 'anos'}`;
    } else {
      return `${dataInicio} - o momento · ${anos} ${anos === 1 ? 'ano' : 'anos'} ${mesesRestantes} ${mesesRestantes === 1 ? 'mês' : 'meses'}`;
    }
  }
};

// Função para processar os dados das experiências
const processarExperiencias = (experiencias: any[]) => {
  return experiencias.map(exp => {
    // Se o período contém "o momento", recalcula a duração
    if (exp.periodo && exp.periodo.includes('o momento')) {
      const dataInicio = exp.periodo.split(' - ')[0];
      const novoPeriodo = calcularDuracao(dataInicio);
      
      return {
        ...exp,
        periodo: novoPeriodo
      };
    }
    
    // Se tem cargo anterior, também processa ele
    if (exp.cargoAnterior && exp.cargoAnterior.periodo && exp.cargoAnterior.periodo.includes('o momento')) {
      const dataInicioAnterior = exp.cargoAnterior.periodo.split(' - ')[0];
      const novoPeriodoAnterior = calcularDuracao(dataInicioAnterior);
      
      return {
        ...exp,
        cargoAnterior: {
          ...exp.cargoAnterior,
          periodo: novoPeriodoAnterior
        }
      };
    }
    
    return exp;
  });
};

const experienciasBase = [
  {
    id: 1,
    cargo: "Desenvolvedor Fullstack C-LEVEL",
    empresa: "Enablers Solutions",
    periodo: "ago de 2025 - o momento",
    tipo: "Tempo integral",
    localizacao: "Presencial",
    logo: "https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/logo%20enablers.jpg?alt=media&token=edab92fa-1073-420e-96dd-2c7e2ee2b172",
    descricao: "Atuação como Desenvolvedor Full Stack na Enablers Solutions, contribuindo ativamente no desenvolvimento de um sistema de rastreamento multifunções integrado a dispositivos IoT. Minha atuação envolve desde a arquitetura até a entrega de soluções robustas e escaláveis, utilizando o conceito de multi-tenancy para suportar múltiplas organizações dentro da mesma plataforma.",
    responsabilidades: [
      "Implementação de mapas interativos com visualização em tempo real de dispositivos IoT.",
      "Liderança na conversão de biblioteca legada de JavaScript para TypeScript, aumentando a segurança e performance da aplicação.",
      "Aceleração do desenvolvimento colaborativo e integração com novos sistemas.",
      "Melhoria contínua da stack com foco em Clean Code, testes automatizados, CI/CD e arquitetura de microsserviços.",
      "Atuação focada em performance, escalabilidade e alinhamento com as necessidades de negócio e experiência do usuário."
    ]
  },
  {
    id: 2,
    cargo: "Consultor de Software",
    empresa: "INNYX Educação",
    periodo: "ago de 2025 - o momento",
    tipo: "Tempo integral",
    localizacao: "Remota",
    logo: "https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/innyxtecnologia_logo.jpg?alt=media&token=15f882e4-7dbe-445b-89ec-da57ba762c63",
    descricao: "Consultor de Software | Innyx Educação",
    detalhes: "Atualmente atuo como Consultor de Software na Innyx Educação, oferecendo expertise técnica e estratégica para otimização de processos de desenvolvimento, arquitetura de software e implementação de melhores práticas. Contribuo para a evolução tecnológica da empresa através de consultoria especializada em desenvolvimento web e mobile.",
    cargoAnterior: {
      cargo: "FullStack Developer",
      periodo: "fev de 2025 - ago de 2025",
      descricao: "Desenvolvedor Fullstack Web & Mobile | Innyx Educação",
      detalhes: "Atuei como Desenvolvedor Fullstack na Innyx Educação, contribuindo ativamente na criação e manutenção de aplicações web e mobile escaláveis e de alta performance. Trabalhei diariamente com tecnologias como Vue.js, Next.js, PHP, Node.js, React Native (Expo) e Python, desenvolvendo soluções completas, desde a concepção de novas features até a entrega em produção.",
      responsabilidades: [
        "Desenvolvimento e manutenção de APIs RESTful e integrações entre sistemas internos e externos.",
        "Implementação de interfaces modernas e responsivas com foco em performance e experiência do usuário.",
        "Aplicação de boas práticas de Clean Code e arquitetura de software para garantir escalabilidade e facilidade de manutenção.",
        "Atuação em conjunto com time de produto e design para entrega de soluções eficientes e centradas no usuário.",
        "Suporte e manutenção contínua de sistemas internos e novos projetos, sempre buscando otimizações.",
        "Participação ativa em code reviews, planejamento de backlogs e melhorias contínuas no fluxo de desenvolvimento."
      ]
    },
    responsabilidades: [
      "Consultoria técnica para otimização de arquiteturas de software e processos de desenvolvimento.",
      "Análise e recomendação de tecnologias e ferramentas para melhorar performance e escalabilidade dos sistemas.",
      "Mentoria técnica para equipes de desenvolvimento, compartilhando conhecimento e boas práticas.",
      "Avaliação e sugestão de melhorias em código legado e implementação de padrões de qualidade.",
      "Consultoria em estratégias de integração entre sistemas e APIs para otimizar fluxos de trabalho.",
      "Participação em planejamento estratégico de tecnologia e definição de roadmaps técnicos."
    ]
  },
  {
    id: 3,
    cargo: "FullStack Developer",
    empresa: "Encaixa.ai",
    periodo: "jan de 2024 - o momento",
    tipo: "Tempo integral",
    localizacao: "Remota",
    logo: "https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/logo%20encaixa%20ai.jpg?alt=media&token=3970223b-db85-41e8-988b-b1bf9372ebd0",
    descricao: "Na Encaixa.ai, atuo como desenvolvedor responsável por transformar ideias em funcionalidades sólidas e eficientes, contribuindo para o desenvolvimento e evolução de uma plataforma moderna e centrada na experiência do usuário.",
    responsabilidades: [
      "Criação e desenvolvimento de páginas web, focando em performance, responsividade e alinhamento com a identidade da aplicação.",
      "Implementação de regras de negócio com base nos requisitos funcionais e técnicos, garantindo aderência aos objetivos estratégicos do produto.",
      "Integração de soluções de pagamento no backend, assegurando segurança e fluidez na experiência de transações.",
      "Desenvolvimento de APIs RESTful em Node.js, otimizadas para performance e fácil manutenção.",
      "Criação de endpoints dedicados a webhooks, permitindo a comunicação eficaz entre sistemas externos e internos."
    ]
  },
  {
    id: 4,
    cargo: "Desenvolvedor web freelancer",
    empresa: "Freelance",
    periodo: "mar de 2022 - o momento",
    tipo: "Freelance",
    localizacao: "Remota",
    logo: "https://cdn-icons-png.flaticon.com/512/9495/9495859.png", // Você pode adicionar um ícone genérico
    descricao: "Atuo como desenvolvedor freelancer com mais de 20 projetos entregues com sucesso, atendendo clientes de diversos segmentos com soluções personalizadas e eficientes. Minha experiência vai desde o desenvolvimento de aplicações completas do zero até a manutenção e evolução de sistemas já existentes, sempre com foco em performance, usabilidade e escalabilidade.",
    detalhes: "Ao longo dessa jornada, trabalhei com uma ampla gama de tecnologias e stacks, adaptando a escolha das ferramentas às necessidades específicas de cada projeto. Entre elas: JavaScript (Vue.js, React, Next.js), Node.js, PHP, Python, React Native, Expo, entre outras.",
    responsabilidades: [
      "Desenvolvimento end-to-end de sistemas web e mobile.",
      "Criação de APIs, painéis administrativos, e-commerce, aplicativos mobile e sistemas internos personalizados.",
      "Atendimento direto ao cliente, levantamento de requisitos e acompanhamento pós-entrega.",
      "Manutenção e otimização de aplicações legadas.",
      "Aplicação de boas práticas de código limpo, versionamento (Git), testes e segurança.",
      "Gestão autônoma de prazos, escopo e entrega de valor constante."
    ]
  },
  {
    id: 5,
    cargo: "Desenvolvedor web",
    empresa: "Grupo ICTS",
    periodo: "abr de 2023 - abr de 2024 · 1 ano 1 mês",
    tipo: "Presencial",
    localizacao: "Manaus, Amazonas, Brasil",
    logo: "https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/logo-icts.jpg?alt=media&token=d42e5f7e-8708-4518-b46c-965b5f205d63",
    descricao: "Desenvolvedor Web | Grupo ICTS – Área de P&D",
    detalhes: "Atuei no setor de Pesquisa e Desenvolvimento (P&D) do Grupo ICTS, contribuindo diretamente para a criação e evolução de soluções web robustas e escaláveis. Trabalhei com foco em inovação, qualidade de entrega e boas práticas de desenvolvimento.",
    responsabilidades: [
      "Desenvolvimento de aplicações web utilizando as stacks Angular, Java e Node.js.",
      "Criação e manutenção de APIs RESTful, garantindo integração fluida entre sistemas e alta performance nas requisições.",
      "Construção de componentes reutilizáveis e modulares em Angular, promovendo padronização e reuso de código em diferentes partes do sistema.",
      "Utilização de banco de dados PostgreSQL, versionamento com Git e conteinerização com Docker.",
      "Participação ativa em squads multidisciplinares, utilizando metodologias ágeis como Scrum e Kanban para organização, planejamento e entregas contínuas de valor.",
      "Forte alinhamento com boas práticas de desenvolvimento, documentação e revisão de código."
    ],
    conclusao: "Essa experiência foi fundamental para o meu crescimento técnico e profissional, especialmente em contextos que exigem escalabilidade, colaboração em equipe e inovação constante."
  }
];

// Processa as experiências para calcular automaticamente as durações
const experiencias = processarExperiencias(experienciasBase);

const ExperienceCard = ({ experiencia, index }: { experiencia: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        {experiencia.logo && (
          <div className="flex-shrink-0">
            <img 
              src={experiencia.logo} 
              alt={experiencia.empresa}
              className="w-12 h-12 rounded-lg object-contain bg-gray-100 dark:bg-gray-700 p-1"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experiencia.cargo}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <Building className="w-4 h-4 text-gray-500" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {experiencia.empresa}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experiencia.periodo}</span>
            </div>
            
            {experiencia.localizacao && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experiencia.localizacao}</span>
              </div>
            )}
            
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              {experiencia.tipo}
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {experiencia.descricao}
          </p>
          
          {experiencia.detalhes && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {experiencia.detalhes}
            </p>
          )}
          
          {experiencia.responsabilidades && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                Principais responsabilidades:
              </h4>
              <ul className="space-y-1">
                {experiencia.responsabilidades.map((resp: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {experiencia.conclusao && (
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm italic">
              {experiencia.conclusao}
            </p>
          )}
          
          {experiencia.cargoAnterior && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {experiencia.cargoAnterior.cargo}
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {experiencia.cargoAnterior.periodo}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                {experiencia.cargoAnterior.descricao}
              </p>
              
              {experiencia.cargoAnterior.detalhes && (
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                  {experiencia.cargoAnterior.detalhes}
                </p>
              )}
              
              {experiencia.cargoAnterior.responsabilidades && (
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    Principais responsabilidades:
                  </h5>
                  <ul className="space-y-1">
                    {experiencia.cargoAnterior.responsabilidades.map((resp: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Experiencias() {
  return (
    <section id="experiencias" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Minha jornada como desenvolvedor, contribuindo para projetos inovadores e soluções tecnológicas
          </p>
        </div>
        
        <div className="space-y-8">
          {experiencias.map((experiencia, index) => (
            <ExperienceCard 
              key={experiencia.id} 
              experiencia={experiencia} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}