'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useTranslations } from 'next-intl'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export default function Contato() {
    const t = useTranslations('contact')
    const [name, setName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const numeroWhatsapp = "+5592994094783"
        const mensagemWhatsapp = `Nome: ${name}%0ANome da Empresa: ${companyName}%0AAssunto: ${subject}%0AMensagem: ${message}`
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemWhatsapp}`
        window.open(urlWhatsapp, '_blank')
    }

    return (
        <motion.section 
            id="contato" 
            className="w-full max-w-2xl mx-auto py-12 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-center mb-6">Entre em Contato via WhatsApp</h2>
            </motion.div>
            
            <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
            >
                <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Seu nome" 
                        required 
                    />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="companyName">Empresa</Label>
                    <Input 
                        id="companyName" 
                        value={companyName} 
                        onChange={(e) => setCompanyName(e.target.value)} 
                        placeholder="Nome da empresa" 
                        required 
                    />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input 
                        id="subject" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        placeholder="Assunto da mensagem" 
                        required 
                    />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Sua mensagem" 
                        required 
                        className="min-h-[150px]" 
                    />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <Button type="submit" className="w-full">Enviar Mensagem via WhatsApp</Button>
                </motion.div>
            </motion.form>
        </motion.section>
    )
}