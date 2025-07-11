"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";
import { useTranslations } from 'next-intl';


const ExperienceCard = ({ experiencia, index }: { experiencia: any; index: number }) => {
  const t = useTranslations('experience');
  
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
              {t(experiencia.tipo)}
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {experiencia.description}
          </p>
          
          {experiencia.details && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {experiencia.details}
            </p>
          )}
          
          {experiencia.responsibilities && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                {t('responsibilities')}
              </h4>
              <ul className="space-y-1">
                {experiencia.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {experiencia.conclusion && (
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm italic">
              {experiencia.conclusion}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Experiencias() {
  const t = useTranslations('experience');
  
  const experiencias = [
    {
      id: 1,
      cargo: t('positions.innyx.title'),
      empresa: t('positions.innyx.company'),
      periodo: t('positions.innyx.period'),
      tipo: 'fullTime',
      localizacao: t('onSite'),
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGCzqxbCCSIkw/company-logo_100_100/company-logo_100_100/0/1689078459851/innyxtecnologia_logo?e=1756944000&v=beta&t=hv6m_Is4Lsho4G9_a6zBPLsIbLHf7ZaVp2MwAzodLzA",
      description: t('positions.innyx.description'),
      details: t('positions.innyx.details'),
      responsibilities: t.raw('positions.innyx.responsibilities')
    },
    {
      id: 2,
      cargo: t('positions.encaixa.title'),
      empresa: t('positions.encaixa.company'),
      periodo: t('positions.encaixa.period'),
      tipo: 'fullTime',
      localizacao: t('remote'),
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGJl1c-3B42-Q/company-logo_100_100/company-logo_100_100/0/1710792237459?e=1756944000&v=beta&t=CyO13IthICcZYRp_At7w-o8pJghPWFwtxB2IW9gKyO8",
      description: t('positions.encaixa.description'),
      responsibilities: t.raw('positions.encaixa.responsibilities')
    },
    {
      id: 3,
      cargo: t('positions.freelance.title'),
      empresa: t('positions.freelance.company'),
      periodo: t('positions.freelance.period'),
      tipo: 'freelance',
      localizacao: t('remote'),
      logo: "https://cdn-icons-png.flaticon.com/512/9495/9495859.png",
      description: t('positions.freelance.description'),
      details: t('positions.freelance.details'),
      responsibilities: t.raw('positions.freelance.responsibilities')
    },
    {
      id: 4,
      cargo: t('positions.icts.title'),
      empresa: t('positions.icts.company'),
      periodo: t('positions.icts.period'),
      tipo: 'fullTime',
      localizacao: "Manaus, Amazonas, Brasil",
      logo: "https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/logo-icts.jpg?alt=media&token=d42e5f7e-8708-4518-b46c-965b5f205d63",
      description: t('positions.icts.description'),
      details: t('positions.icts.details'),
      responsibilities: t.raw('positions.icts.responsibilities'),
      conclusion: t('positions.icts.conclusion')
    }
  ];
  
  return (
    <section id="experiencias" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
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