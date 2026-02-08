import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Database, UserCheck, Mail, AlertCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Política de Privacidade
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8">
            <Section
              icon={<Database className="h-5 w-5" />}
              title="1. Coleta de Dados"
            >
              <p>
                A Loja de Negócios coleta apenas os dados estritamente necessários para a prestação de nossos serviços, incluindo:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Nome completo e e-mail para criação de conta</li>
                <li>Dados de pagamento processados por gateways seguros (não armazenamos dados de cartão)</li>
                <li>Histórico de compras e downloads</li>
                <li>Dados de navegação para melhoria da experiência</li>
              </ul>
            </Section>

            <Section
              icon={<Lock className="h-5 w-5" />}
              title="2. Uso dos Dados"
            >
              <p>Seus dados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Processar compras e entregas de produtos digitais</li>
                <li>Enviar comunicações sobre atualizações de produtos adquiridos</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais e fiscais</li>
              </ul>
            </Section>

            <Section
              icon={<UserCheck className="h-5 w-5" />}
              title="3. Seus Direitos (LGPD)"
            >
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Acesso:</strong> Solicitar informações sobre seus dados pessoais</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</li>
                <li><strong>Exclusão:</strong> Solicitar a eliminação de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação:</strong> Revogar o consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
              </ul>
            </Section>

            <Section
              icon={<Lock className="h-5 w-5" />}
              title="4. Segurança dos Dados"
            >
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Acesso restrito a dados pessoais apenas por funcionários autorizados</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </Section>

            <Section
              icon={<Database className="h-5 w-5" />}
              title="5. Cookies e Tecnologias"
            >
              <p>
                Utilizamos cookies para melhorar sua experiência:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong>Cookies de preferências:</strong> Salvam suas configurações</li>
                <li><strong>Cookies analíticos:</strong> Ajudam a entender o uso do site</li>
              </ul>
              <p className="mt-3">
                Você pode gerenciar suas preferências de cookies através das configurações do navegador.
              </p>
            </Section>

            <Section
              icon={<AlertCircle className="h-5 w-5" />}
              title="6. Retenção de Dados"
            >
              <p>
                Seus dados são mantidos pelo tempo necessário para:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Prestação dos serviços contratados</li>
                <li>Cumprimento de obrigações legais (mínimo 5 anos para dados fiscais)</li>
                <li>Defesa em processos judiciais ou administrativos</li>
              </ul>
            </Section>

            <Section
              icon={<Mail className="h-5 w-5" />}
              title="7. Contato do Encarregado (DPO)"
            >
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
                <p><strong>Encarregado de Proteção de Dados:</strong></p>
                <p>E-mail: privacidade@lojadenegocios.com.br</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>Endereço: Av. Paulista, 1000 - Sala 1501, São Paulo - SP</p>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section className="rounded-lg border border-border bg-card p-6">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-primary">{icon}</span>
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="text-muted-foreground leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

export default PrivacyPolicy;
