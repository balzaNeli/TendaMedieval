import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sword, Shield, Crown, Hammer, Star, Quote, Flame, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-medieval.jpg";
import forgeImg from "@/assets/about-forge.jpg";
import productSword from "@/assets/product-sword.jpg";
import productHelmet from "@/assets/product-helmet.jpg";
import productShield from "@/assets/product-shield.jpg";
import productGoblet from "@/assets/product-goblet.jpg";

const services = [
  { icon: Sword, title: "Espadas Forjadas", desc: "Réplicas históricas e lâminas funcionais forjadas à mão por mestres ferreiros." },
  { icon: Shield, title: "Armaduras & Escudos", desc: "Peças de couro e aço com acabamento sob medida para colecionadores e cosplay." },
  { icon: Crown , title: "Adornos Reais", desc: "Coroas, taças, candelabros e relíquias para decoração temática autêntica." },
  { icon: Hammer, title: "Encomendas Exclusivas", desc: "Projetos únicos sob medida — do brasão da sua casa à arma dos seus sonhos." },
];

const products = [
  { img: productSword, name: "Espada Longa do Cavaleiro", price: "R$ 1.890", tag: "Edição Forjada" },
  { img: productHelmet, name: "Elmo Real Ornamentado", price: "R$ 2.450", tag: "Peça Única" },
  { img: productShield, name: "Escudo Heráldico", price: "R$ 1.290", tag: "Personalizável" },
  { img: productGoblet, name: "Cálice Sagrado de Joias", price: "R$    690", tag: "Coleção Real" },
];

const testimonials = [
  { name: "Eduardo M.", role: "Colecionador", text: "A qualidade da forja é simplesmente impressionante. Minha espada chegou afiada como um juramento de honra." },
  { name: "Larissa R.", role: "Cosplayer", text: "Atendimento medieval, qualidade real. A armadura ficou perfeita para meu personagem — todos perguntam onde comprei!" },
  { name: "Cavaleiros do Norte", role: "Grupo de Reenactment", text: "Equipamos toda a nossa ordem na Tenda Medieval. Peças resistentes, autênticas e entregues no prazo." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Tenda Medieval — Armas, Armaduras e Relíquias Forjadas à Mão";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <Flame className="w-5 h-5 text-gold" />
            <span>Tenda <span className="text-gold">Medieval</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#sobre" className="hover:text-gold transition">Sobre</a>
            <a href="#servicos" className="hover:text-gold transition">Serviços</a>
            <a href="#colecao" className="hover:text-gold transition">Coleção</a>
            <a href="#depoimentos" className="hover:text-gold transition">Depoimentos</a>
          </nav>
          <Button variant="gold" size="sm" asChild>
            <a href="#cta">Visitar a Tenda</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <img src={heroImg} alt="Espada e escudo medieval em altar de pedra" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 bg-background/60" />

        <div className="relative container text-center max-w-4xl py-24">
          <p className="font-display tracking-[0.3em] text-gold text-sm md:text-base mb-6 animate-ember">⚔ FORJADO DESDE 1387 ⚔</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
            Empunhe a <span className="animate-shine">lenda</span>.
            <br />Vista a história.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Espadas, armaduras e relíquias forjadas à mão por mestres artesãos.
            Cada peça é uma saga — e a sua próxima conquista começa aqui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <a href="#colecao">Explorar Coleção <ChevronRight className="ml-1" /></a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#servicos">Forjar sob Medida</a>
            </Button>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
            <span>✦ Forja Artesanal</span>
            <span>✦ Garantia Vitalícia</span>
            <span>✦ Envio para todo o Reino</span>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img src={forgeImg} alt="Forja medieval com espadas e armaduras" loading="lazy" width={1280} height={960}
              className="rounded-lg shadow-forge border border-border" />
            <div className="absolute -bottom-6 -right-6 hidden md:flex bg-gradient-gold text-gold-foreground px-6 py-4 rounded-lg shadow-gold font-display font-bold">
              <div>
                <div className="text-3xl">+30</div>
                <div className="text-xs uppercase tracking-widest">anos de forja</div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display tracking-[0.3em] text-gold text-sm mb-4">SOBRE A TENDA</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Onde o aço encontra a alma.</h2>
            <div className="ornate-divider mb-6" />
            <p className="text-muted-foreground text-lg mb-4">
              A Tenda Medieval nasceu do fogo da paixão por uma era em que cada lâmina contava uma história.
              Há mais de três décadas, nossos mestres ferreiros mantêm vivas as técnicas ancestrais de forja —
              martelo, brasa e dedicação.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Não vendemos produtos. Entregamos relíquias. Cada peça que sai da nossa tenda carrega
              a marca do artesão e a promessa de durar mais que reinos.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[["+5k", "Cavaleiros"], ["+800", "Peças Únicas"], ["100%", "Forjado à mão"]].map(([n, l]) => (
                <div key={l} className="text-center p-4 bg-card border border-border rounded-lg">
                  <div className="font-display text-2xl text-gold font-bold">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 bg-muted/30 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-display tracking-[0.3em] text-gold text-sm mb-4">NOSSA FORJA</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Serviços dignos de um rei</h2>
            <div className="ornate-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="bg-gradient-card border-border p-8 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold group">
                <div className="w-14 h-14 rounded-lg bg-forest-deep border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all">
                  <Icon className="w-7 h-7 text-gold group-hover:text-gold-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO / COLEÇÃO */}
      <section id="colecao" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-display tracking-[0.3em] text-gold text-sm mb-4">RELÍQUIAS EM DESTAQUE</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">A coleção dos bravos</h2>
            </div>
            <Button variant="outlineGold" asChild>
              <a href="#cta">Ver Catálogo Completo <ChevronRight className="ml-1" /></a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card key={p.name} className="group bg-gradient-card border-border overflow-hidden hover:border-gold/60 transition-all duration-500 hover:shadow-gold">
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{p.tag}</span>
                  <h3 className="font-display text-lg font-bold mt-2 mb-3 leading-tight">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-gold">{p.price}</span>
                    <Button variant="gold" size="sm">Empunhar</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest opacity-10" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-display tracking-[0.3em] text-gold text-sm mb-4">JURAMENTOS DA NOSSA ORDEM</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Cavaleiros que confiam em nossa forja</h2>
            <div className="ornate-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-gradient-card border-border p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-gold mt-1">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-gold/40 shadow-gold">
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-forest-deep/60 to-background" />
            <div className="relative px-6 py-20 md:px-16 md:py-28 text-center max-w-3xl mx-auto">
              <Crown className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                A sua lenda <span className="animate-shine">começa hoje</span>.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Garanta 10% OFF na sua primeira peça forjada. Frete grátis em pedidos acima de R$ 500
                para todo o reino.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl">Empunhar Minha Lenda</Button>
                <Button variant="outlineGold" size="xl">Falar com um Mestre</Button>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-8">
                ✦ Pagamento seguro ✦ Garantia vitalícia ✦ Envio em 48h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold">
            <Flame className="w-4 h-4 text-gold" />
            Tenda <span className="text-gold">Medieval</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tenda Medieval. Forjado com honra.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold">Termos</a>
            <a href="#" className="hover:text-gold">Privacidade</a>
            <a href="#" className="hover:text-gold">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
