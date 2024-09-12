'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Contato() {
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
        <section id="contato" className="w-full max-w-2xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Entre em Contato via WhatsApp</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Seu nome" 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="companyName">Empresa</Label>
                    <Input 
                        id="companyName" 
                        value={companyName} 
                        onChange={(e) => setCompanyName(e.target.value)} 
                        placeholder="Nome da empresa" 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input 
                        id="subject" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        placeholder="Assunto da mensagem" 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Sua mensagem" 
                        required 
                        className="min-h-[150px]" 
                    />
                </div>
                <Button type="submit" className="w-full">Enviar Mensagem via WhatsApp</Button>
            </form>
        </section>
    )
}
