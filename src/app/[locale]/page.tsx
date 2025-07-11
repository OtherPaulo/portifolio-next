import Home from '@/components/home/page';
import Sobre from '@/components/sobre/page';
import Empresas from '@/components/empresas/page';
import Experiencias from '@/components/experiencias/page';
import Servicos from '@/components/servicos/page';
import Contato from '@/components/contato/page';
import Chat from '@/components/chat/page';
import Footer from '@/components/footer/page';

export default function LocalePage() {
  return (
    <>
      <Home />
      <Sobre />
      <Empresas />
      <Experiencias />
      <Servicos />
      <Contato />
      <Chat />
      <Footer />
    </>
  );
}