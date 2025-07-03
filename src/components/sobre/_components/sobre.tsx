"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: ["Node.js", "PHP", "Python", "Java", "Express.js", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ["React Native", "Expo", "Flutter", "Progressive Web Apps"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["Docker", "Git", "GitHub", "Vercel", "Netlify", "AWS", "Linux"]
  },
  {
    category: "Metodologias",
    icon: <Code className="w-6 h-6" />,
    technologies: ["Scrum", "Kanban", "Clean Code", "TDD", "Arquitetura de Software", "Code Review"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Sobre() {
  return (
    <motion.section 
      id="sobre"
      className="w-full py-16 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Seção Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Texto de Apresentação */}
          <motion.div 
            className="flex-1 space-y-6"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
              variants={itemVariants}
            >
              Sobre Mim
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-lg text-neutral-600 dark:text-neutral-300"
              variants={itemVariants}
            >
              <p className="leading-relaxed">
                Olá! Sou <strong className="text-neutral-800 dark:text-white">Paulo Rodrigues</strong>, 
                um desenvolvedor FullStack apaixonado por tecnologia e inovação. Com mais de 3 anos de experiência 
                no desenvolvimento de soluções web e mobile, tenho o prazer de transformar ideias em produtos digitais 
                que fazem a diferença.
              </p>
              
              <p className="leading-relaxed">
                Atualmente, sou Co-Founder na{" "}
                <LinkPreview url="https://encaixa.ai" className="font-bold text-blue-600 dark:text-blue-400">
                  Encaixa.ai
                </LinkPreview>{" "}
                e trabalho como FullStack Developer na INNYX Educação. Também estou desenvolvendo um micro-SaaS inovador chamado{" "}
                <LinkPreview url="https://app.devpaulorodrigues.tech/" className="font-bold text-blue-600 dark:text-blue-400">
                  Klirva
                </LinkPreview>
                , uma solução moderna e acessível para e-commerces.
              </p>
              
              <p className="leading-relaxed">
                Minha experiência inclui mais de <strong>20 projetos entregues</strong> como freelancer, 
                trabalhando com empresas de diversos segmentos e desenvolvendo desde landing pages até 
                sistemas complexos de gestão e e-commerce.
              </p>
              
              <p className="leading-relaxed">
                Visite meu{" "}
                <LinkPreview
                  url="https://link-bio-paulo.netlify.app/"
                  className="font-bold text-blue-600 dark:text-blue-400"
                >
                  Link-Bio
                </LinkPreview>{" "}
                para acompanhar todos os meus projetos e novidades.
              </p>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div 
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
              <Image
                src="/working.png?height=350&width=350"
                alt="Paulo Rodrigues - Desenvolvedor FullStack"
                width={350}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </BackgroundGradient>
          </motion.div>
        </div>

        {/* Seção de Skills */}
        <motion.div 
          className="space-y-8"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-4">
              Tecnologias & Habilidades
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Domino um amplo conjunto de tecnologias modernas para desenvolvimento web e mobile, 
              sempre buscando as melhores práticas e soluções mais eficientes.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
                variants={skillCardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Seção de Estatísticas */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl"
            variants={skillCardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              20+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projetos Entregues
            </div>
          </motion.div>

          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"
            variants={skillCardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              3+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Anos de Experiência
            </div>
          </motion.div>

          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl"
            variants={skillCardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              15+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Tecnologias Dominadas
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}