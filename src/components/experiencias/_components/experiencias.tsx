"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const experiencias = [
  {
    id: 1,
    cargo: "FullStack Developer",
    empresa: "INNYX Educação",
    periodo: "fev de 2025 - o momento · 6 meses",
    tipo: "Tempo integral",
    localizacao: "Presencial",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGCzqxbCCSIkw/company-logo_100_100/company-logo_100_100/0/1689078459851/innyxtecnologia_logo?e=1756944000&v=beta&t=hv6m_Is4Lsho4G9_a6zBPLsIbLHf7ZaVp2MwAzodLzA", // Você pode adicionar o logo se tiver
    descricao: "Desenvolvedor Fullstack Web & Mobile | Innyx Educação",
    detalhes: "Atualmente atuo como Desenvolvedor Fullstack na Innyx Educação, contribuindo ativamente na criação e manutenção de aplicações web e mobile escaláveis e de alta performance. Trabalho diariamente com tecnologias como Vue.js, Next.js, PHP, Node.js, React Native (Expo) e Python, desenvolvendo soluções completas, desde a concepção de novas features até a entrega em produção.",
    responsabilidades: [
      "Desenvolvimento e manutenção de APIs RESTful e integrações entre sistemas internos e externos.",
      "Implementação de interfaces modernas e responsivas com foco em performance e experiência do usuário.",
      "Aplicação de boas práticas de Clean Code e arquitetura de software para garantir escalabilidade e facilidade de manutenção.",
      "Atuação em conjunto com time de produto e design para entrega de soluções eficientes e centradas no usuário.",
      "Suporte e manutenção contínua de sistemas internos e novos projetos, sempre buscando otimizações.",
      "Participação ativa em code reviews, planejamento de backlogs e melhorias contínuas no fluxo de desenvolvimento."
    ]
  },
  {
    id: 2,
    cargo: "FullStack Developer",
    empresa: "Encaixa.ai",
    periodo: "jan de 2024 - o momento · 1 ano 7 meses",
    tipo: "Tempo integral",
    localizacao: "Remota",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGJl1c-3B42-Q/company-logo_100_100/company-logo_100_100/0/1710792237459?e=1756944000&v=beta&t=CyO13IthICcZYRp_At7w-o8pJghPWFwtxB2IW9gKyO8",
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
    id: 3,
    cargo: "Desenvolvedor web freelancer",
    empresa: "Freelance",
    periodo: "mar de 2022 - o momento · 3 anos 5 meses",
    tipo: "Freelance",
    localizacao: "Remota",
    logo: "/freelance-logo.png", // Você pode adicionar um ícone genérico
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
    id: 4,
    cargo: "Desenvolvedor web",
    empresa: "Grupo ICTS",
    periodo: "abr de 2023 - abr de 2024 · 1 ano 1 mês",
    tipo: "Presencial",
    localizacao: "Manaus, Amazonas, Brasil",
    logo: "/ICTS.png",
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