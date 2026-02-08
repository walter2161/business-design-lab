import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Package, RefreshCw, ShieldCheck, AlertTriangle, Scale, Clock, Mail } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Termos de Uso e Compra
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8">
            <Section
              icon={<Package className="h-5 w-5" />}
              title="1. Natureza do Produto Digital"
            >
              <p>
                A Loja de Negócios comercializa <strong>Modelos de Negócio Digitais</strong>, que consistem em pacotes de 
                arquivos, templates, planilhas, scripts e materiais educacionais para implementação de negócios.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="font-semibold text-foreground mb-2">O que você recebe:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>30 arquivos organizados em 6 categorias estratégicas</li>
                  <li>Templates editáveis (Word, Excel, PDF)</li>
                  <li>Acesso ao Agente de IA Especialista no modelo</li>
                  <li>Mini-curso de implementação</li>
                  <li>Atualizações futuras do modelo</li>
                </ul>
              </div>
            </Section>

            <Section
              icon={<Clock className="h-5 w-5" />}
              title="2. Acesso e Período de Uso"
            >
              <p>
                Ao adquirir um Modelo de Negócio, você recebe:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Acesso imediato:</strong> Após a confirmação do pagamento, os arquivos ficam disponíveis instantaneamente</li>
                <li><strong>Período de acesso garantido:</strong> Mínimo de 12 (doze) meses a partir da data de compra</li>
                <li><strong>Downloads ilimitados:</strong> Durante o período de acesso, você pode baixar os arquivos quantas vezes precisar</li>
                <li><strong>Renovação opcional:</strong> Após 12 meses, o acesso pode ser renovado mediante pagamento de taxa de manutenção</li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
                <p className="text-sm">
                  <strong>Nota:</strong> Recomendamos que você faça o download de todos os arquivos durante o período de acesso 
                  e mantenha cópias de segurança em seu dispositivo.
                </p>
              </div>
            </Section>

            <Section
              icon={<RefreshCw className="h-5 w-5" />}
              title="3. Atualizações de Produtos"
            >
              <p>
                A Loja de Negócios se compromete a manter os modelos atualizados:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Atualizações inclusas:</strong> Melhorias, correções e novos templates são adicionados sem custo adicional durante o período de acesso</li>
                <li><strong>Novas ferramentas:</strong> Ferramentas e funcionalidades significativamente novas podem ser oferecidas como upgrade pago</li>
                <li><strong>Notificações:</strong> Você será notificado por e-mail sobre atualizações relevantes</li>
                <li><strong>Versões anteriores:</strong> Mantemos acesso às versões anteriores para garantir compatibilidade</li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="font-semibold text-foreground mb-2">Sistema de Updates:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Minor updates:</strong> Correções e melhorias — inclusos gratuitamente</li>
                  <li><strong>Major updates:</strong> Novas versões do modelo — preço promocional para clientes</li>
                  <li><strong>Add-ons:</strong> Módulos extras — disponíveis para compra separada</li>
                </ul>
              </div>
            </Section>

            <Section
              icon={<ShieldCheck className="h-5 w-5" />}
              title="4. Licença de Uso"
            >
              <p>
                Ao adquirir um Modelo de Negócio, você recebe uma <strong>licença pessoal e intransferível</strong> para:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Usar o material para implementar SEU próprio negócio</li>
                <li>Adaptar e modificar os templates para suas necessidades</li>
                <li>Utilizar o Agente de IA para dúvidas sobre implementação</li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  É expressamente proibido:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Revender, redistribuir ou compartilhar os materiais</li>
                  <li>Usar o conteúdo para criar produtos concorrentes</li>
                  <li>Disponibilizar os arquivos em plataformas públicas</li>
                  <li>Remover marcas d'água ou créditos dos materiais</li>
                </ul>
              </div>
            </Section>

            <Section
              icon={<AlertTriangle className="h-5 w-5" />}
              title="5. Garantias e Limitações"
            >
              <p>
                É importante compreender as limitações do produto:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Não garantimos resultados financeiros:</strong> Os benchmarks apresentados são referências de mercado, não promessas de resultado</li>
                <li><strong>Esforço necessário:</strong> O sucesso depende da sua dedicação, execução e contexto de mercado</li>
                <li><strong>Material educacional:</strong> O conteúdo é informativo e não constitui consultoria profissional específica</li>
                <li><strong>Responsabilidade:</strong> Decisões de negócio são de sua inteira responsabilidade</li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
                <p className="text-sm">
                  Recomendamos que você consulte profissionais especializados (contadores, advogados, consultores) 
                  para questões específicas do seu negócio.
                </p>
              </div>
            </Section>

            <Section
              icon={<Scale className="h-5 w-5" />}
              title="6. Política de Reembolso"
            >
              <p>
                Por se tratar de <strong>produto digital com entrega imediata</strong>, aplicam-se as seguintes regras:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Direito de arrependimento:</strong> Você pode solicitar reembolso em até 7 (sete) dias corridos após a compra, conforme o Código de Defesa do Consumidor</li>
                <li><strong>Condição:</strong> O reembolso será processado se os materiais não tiverem sido baixados ou se o acesso for limitado a verificação inicial</li>
                <li><strong>Uso extensivo:</strong> Se houver evidência de uso extensivo dos materiais (múltiplos downloads, acesso prolongado ao Agente IA), o reembolso poderá ser negado</li>
                <li><strong>Prazo de processamento:</strong> Reembolsos aprovados são processados em até 10 dias úteis</li>
              </ul>
            </Section>

            <Section
              icon={<FileText className="h-5 w-5" />}
              title="7. Propriedade Intelectual"
            >
              <p>
                Todo o conteúdo disponibilizado é protegido por direitos autorais:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Os Modelos de Negócio são criações originais da Loja de Negócios</li>
                <li>A metodologia, estrutura e organização são propriedade exclusiva</li>
                <li>O Agente de IA e seus prompts são protegidos por direitos autorais</li>
                <li>Violações podem resultar em ações legais cabíveis</li>
              </ul>
            </Section>

            <Section
              icon={<Scale className="h-5 w-5" />}
              title="8. Foro e Legislação"
            >
              <p>
                Este contrato é regido pelas leis da República Federativa do Brasil.
              </p>
              <p className="mt-3">
                Fica eleito o foro da Comarca de São Paulo - SP para dirimir quaisquer controvérsias 
                oriundas do presente contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </Section>

            <Section
              icon={<Mail className="h-5 w-5" />}
              title="9. Contato"
            >
              <p>
                Para dúvidas sobre estes termos ou sobre sua compra:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
                <p><strong>Atendimento ao Cliente:</strong></p>
                <p>E-mail: suporte@lojadenegocios.com.br</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>Horário: Segunda a Sexta, 9h às 18h</p>
              </div>
            </Section>

            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <p className="text-muted-foreground">
                Ao realizar uma compra na Loja de Negócios, você declara ter lido, compreendido e aceito 
                integralmente os termos acima descritos.
              </p>
            </div>
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

export default Terms;
