import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { MapPin, Phone, Clock, Star, Menu, X, Instagram, Facebook, Car, Utensils, CalendarDays, ChevronRight, Wine, Coffee, Soup, Fish, Beef, Salad } from "lucide-react";
import "./styles.css";

const WA = "5519971248417";
const endereco = "Rua Luiz de Queiroz, 113 - Centro, Piracicaba - SP, 13400-780";
const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

function WhatsAppIcon({size=22}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="waSvg">
      <path fill="currentColor" d="M16.02 3.2C8.98 3.2 3.25 8.82 3.25 15.72c0 2.2.6 4.35 1.74 6.24L3.1 28.8l7.08-1.8a13.05 13.05 0 0 0 5.84 1.38c7.04 0 12.77-5.62 12.77-12.53S23.06 3.2 16.02 3.2Zm0 22.98c-1.8 0-3.55-.47-5.1-1.35l-.37-.21-4.2 1.07 1.12-4.02-.25-.41a10.19 10.19 0 0 1-1.56-5.41c0-5.68 4.65-10.3 10.36-10.3 5.72 0 10.37 4.62 10.37 10.3 0 5.68-4.65 10.33-10.37 10.33Zm5.68-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.72.15-.2.31-.82 1-.99 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.81-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.72-1.7-.98-2.32-.26-.62-.52-.53-.72-.54h-.62c-.2 0-.54.08-.83.39-.29.31-1.09 1.05-1.09 2.56s1.12 2.98 1.27 3.18c.16.21 2.2 3.3 5.34 4.63.75.31 1.33.5 1.78.64.75.23 1.43.2 1.97.12.6-.09 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.45-.08-.13-.29-.21-.6-.36Z"/>
    </svg>
  );
}

function zap(texto="Olá! Gostaria de fazer uma reserva/pedido no Portal do Engenho.") {
  return `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
}

const pratos = [
  { cat:"Parmegianas", nome:"Filé Mignon à Parmegiana", preco:"R$ 183,00", desc:"Pequeno 2 pessoas, médio 3 pessoas, grande 4 pessoas. Acompanha arroz e fritas.", img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80", destaque:true },
  { cat:"Parmegianas", nome:"Pintado à Parmegiana", preco:"R$ 75,48", desc:"Pintado preparado à parmegiana, servido com arroz e fritas.", img:"https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80", destaque:true },
  { cat:"Peixes", nome:"Salmão à Marinara", preco:"R$ 86,70", desc:"Lula, polvo, camarão, marisco e pimentão.", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
  { cat:"Peixes", nome:"Salmão ao Molho de Maracujá", preco:"R$ 78,88", desc:"Acompanha arroz branco.", img:"https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80" },
  { cat:"Peixes", nome:"Salmão ao Quatro Queijos", preco:"R$ 80,58", desc:"Mussarela, catupiry, gorgonzola, parmesão, arroz e fritas.", img:"https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=900&q=80" },
  { cat:"Peixes", nome:"Pintado à Marinara", preco:"R$ 79,22", desc:"Arroz, lula, polvo, camarão, marisco e pimentão.", img:"https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=900&q=80" },
  { cat:"Peixes", nome:"Pintado ao Molho de Camarão", preco:"R$ 78,20", desc:"Camarão médio, pimentão e arroz.", img:"https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80" },
  { cat:"Peixes", nome:"Bacalhau à Portuguesa", preco:"R$ 156,24", desc:"Clássico bacalhau preparado à portuguesa.", img:"https://images.unsplash.com/photo-1625944228741-cf30983ecb06?auto=format&fit=crop&w=900&q=80" },

  { cat:"Carnes", nome:"Filé Mignon Individual", preco:"R$ 108,00", desc:"Filé mignon individual preparado no ponto da casa.", img:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
  { cat:"Carnes", nome:"Filé Grelhado Alho e Óleo", preco:"R$ 79,22", desc:"Brócolis com alho, batatas coradas e arroz.", img:"https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80" },
  { cat:"Carnes", nome:"Filé ao Strogonoff", preco:"R$ 79,22", desc:"Acompanha arroz e fritas.", img:"https://images.unsplash.com/photo-1625944228741-cf30983ecb06?auto=format&fit=crop&w=900&q=80" },
  { cat:"Carnes", nome:"Filé à Piamontese", preco:"R$ 81,94", desc:"Risoto, molho madeira, champignon e bacon.", img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80" },
  { cat:"Carnes", nome:"Picanha à Brasileira", preco:"R$ 171,52", desc:"Farofa, arroz e fritas.", img:"https://images.unsplash.com/photo-1558030089-02acba3c214e?auto=format&fit=crop&w=900&q=80" },
  { cat:"Carnes", nome:"Filé à Milanesa à Cubana", preco:"R$ 157,44", desc:"Arroz à grega, fritas e frutas.", img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80" },
  { cat:"Infantil", nome:"Filé Mignon Grelhado Infantil", preco:"R$ 55,00", desc:"Acompanha arroz e fritas.", img:"https://images.unsplash.com/photo-1543352634-8734d8c41544?auto=format&fit=crop&w=900&q=80" },
  { cat:"Infantil", nome:"Frango Grelhado ou à Milanesa", preco:"R$ 36,00", desc:"Acompanha arroz e fritas.", img:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },

  { cat:"Massas", nome:"Tagliarine ou Espaguete ao Molho de Camarão", preco:"R$ 58,90", desc:"Camarão médio e pimentão.", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80" },
  { cat:"Massas", nome:"Tagliarine ou Espaguete à Bolonhesa", preco:"R$ 54,56", desc:"Massa tradicional ao molho bolonhesa.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" },
  { cat:"Massas", nome:"Capeletti ou Ravioli ao Quatro Queijos", preco:"R$ 49,60", desc:"Molho quatro queijos cremoso.", img:"https://images.unsplash.com/photo-1625944525803-473f1e44f0e7?auto=format&fit=crop&w=900&q=80" },
  { cat:"Massas", nome:"Capeletti ou Ravioli à Romanesca", preco:"R$ 49,60", desc:"Molho branco, presunto, ervilha e champignon.", img:"https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?auto=format&fit=crop&w=900&q=80" },
  { cat:"Risotos", nome:"Risoto à Marinara", preco:"R$ 64,48", desc:"Lula, polvo, camarão, marisco e pimentão.", img:"https://images.unsplash.com/photo-1633964913295-ceb43826e7c7?auto=format&fit=crop&w=900&q=80" },
  { cat:"Risotos", nome:"Risoto de Camarão", preco:"R$ 60,14", desc:"Camarão médio, molho de tomate e pimentão.", img:"https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?auto=format&fit=crop&w=900&q=80" },
  { cat:"Risotos", nome:"Risoto de Palmito", preco:"R$ 44,02", desc:"Palmito, molho de tomate e pimentão.", img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80" },

  { cat:"Porções", nome:"Mignon Acebolado", preco:"R$ 75,60", desc:"Porção especial de mignon acebolado.", img:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80" },
  { cat:"Porções", nome:"Camarão à Milanesa", preco:"R$ 60,48", desc:"Camarão empanado e crocante.", img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80" },
  { cat:"Porções", nome:"Isca de Peixe", preco:"R$ 55,44", desc:"Porção de isca de pintado.", img:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },
  { cat:"Porções", nome:"Lula à Dorê", preco:"R$ 56,16", desc:"Lula empanada no ponto certo.", img:"https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80" },

  { cat:"Entradas", nome:"Couvert", preco:"R$ 15,00", desc:"Tomate seco, patê, berinjela e torradas.", img:"https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80" },
  { cat:"Entradas", nome:"Bolinho de Bacalhau", preco:"R$ 62,00", desc:"12 unidades.", img:"https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&w=900&q=80" },
  { cat:"Entradas", nome:"Bolinho de Camarão", preco:"R$ 62,00", desc:"12 unidades.", img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80" },
  { cat:"Entradas", nome:"Fritas", preco:"R$ 19,20", desc:"Porção de batatas fritas.", img:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80" },
  { cat:"Entradas", nome:"Entrada Completa", preco:"R$ 46,43", desc:"Legumes, alface e palmito.", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },

  { cat:"Bebidas", nome:"Caipirinha Cachaça Limão", preco:"R$ 21,00", desc:"Caipirinha clássica de limão.", img:"https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=900&q=80" },
  { cat:"Bebidas", nome:"Caipirinha Smirnoff", preco:"R$ 29,90", desc:"Limão ou morango.", img:"https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80" },
  { cat:"Bebidas", nome:"Caipirinha Absolut", preco:"R$ 35,00", desc:"Limão ou morango.", img:"https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=900&q=80" },
  { cat:"Bebidas", nome:"Suco Natural", preco:"R$ 10,90", desc:"Sabores variados: laranja, limão, maracujá, morango e mais.", img:"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat:"Bebidas", nome:"Refrigerantes", preco:"R$ 9,00", desc:"Coca-Cola, Fanta, Sprite, Guaraná, Coca Zero e outros.", img:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=900&q=80" },
  { cat:"Bebidas", nome:"Vinho Tinto", preco:"R$ 16,90", desc:"Vinho suave ou seco.", img:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80" },
  { cat:"Guarnições", nome:"Arroz Piamontese", preco:"R$ 22,30", desc:"Guarnição cremosa para acompanhar pratos especiais.", img:"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80" },
  { cat:"Guarnições", nome:"Brócolis com Alho", preco:"R$ 23,76", desc:"Brócolis salteado com alho.", img:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=80" },
  { cat:"Sopas e Cremes", nome:"Sopa de Camarão e Mariscos", preco:"R$ 97,00", desc:"Sopa especial com frutos do mar.", img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80" },
  { cat:"Sopas e Cremes", nome:"Creme de Palmito", preco:"R$ 56,00", desc:"Creme encorpado e saboroso.", img:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80" },
];

const galeria = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
];

function Header({page,setPage}){
  const [open,setOpen]=useState(false);
  const links = [["home","Início"],["cardapio","Cardápio"],["historia","História"],["galeria","Galeria"],["contato","Contato"]];
  return <header>
    <div className="topbar">
      <span><MapPin size={14}/> {endereco}</span>
      <span><Phone size={14}/> (19) 97124-8417</span>
      <span><Clock size={14}/> Seg a Sex: 11h às 15h | 18h às 23h</span>
    </div>
    <nav className="nav">
      <button className="brand" onClick={()=>setPage("home")}>
        <div><b>PORTAL DO<br/>ENGENHO</b><small>Desde 1988</small></div>
      </button>
      <button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <div className={open?"links show":"links"}>
        {links.map(([id,label])=><button key={id} onClick={()=>{setPage(id);setOpen(false)}} className={page===id?"active":""}>{label}</button>)}
        <a className="reserve" href={zap()} target="_blank"><WhatsAppIcon size={18}/> Reservar / Pedir</a>
      </div>
    </nav>
  </header>
}

function Hero({setPage}){
  return <section className="hero">
    <div className="heroOverlay"/>
    <div className="heroText">
      <p className="eyebrow">Restaurante em Piracicaba</p>
      <h1>Tradição, sabor e experiências <span>inesquecíveis</span></h1>
      <p>Desde 1988, o Portal do Engenho encanta gerações com pratos feitos com amor, ingredientes selecionados e o verdadeiro sabor da culinária brasileira.</p>
      <div className="heroBtns">
        <a href={zap()} target="_blank" className="btn primary"><WhatsAppIcon size={19}/> Fazer reserva / pedido</a>
        <button onClick={()=>setPage("cardapio")} className="btn ghost">Ver cardápio <Utensils size={17}/></button>
      </div>
    </div>
  </section>
}

function Home({setPage}){
  return <>
    <Hero setPage={setPage}/>
    <section className="section grid2">
      <div>
        <p className="eyebrow green">Nossa história</p>
        <h2>Tradição que atravessa gerações</h2>
        <p>O Portal do Engenho nasceu com o propósito de unir boa gastronomia, aconchego e atendimento de excelência. Localizado no Centro de Piracicaba, tornou-se ponto de encontro para famílias, amigos e visitantes.</p>
        <div className="highlight"><Star fill="currentColor"/> Conhecido como a melhor parmegiana de Piracicaba, nosso prato mais pedido e orgulho da casa.</div>
        <button className="btn outline" onClick={()=>setPage("historia")}>Conhecer história <ChevronRight size={18}/></button>
      </div>
      <div className="photoBox">
        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"/>
      </div>
    </section>
    <MenuPreview setPage={setPage}/>
    <InfoCards/>
    <Reviews/>
  </>
}

function MenuPreview({setPage}){
  return <section className="menuBand">
    <div className="section">
      <div className="sectionTitle">
        <div><p className="eyebrow light">Cardápio</p><h2>Sabores para todos os momentos</h2></div>
        <button className="btn lightBtn" onClick={()=>setPage("cardapio")}>Ver cardápio completo</button>
      </div>
      <div className="cards">
        {pratos.filter(p=>["Parmegianas","Peixes","Massas","Carnes","Bebidas"].includes(p.cat)).slice(0,6).map((p,i)=><Dish key={i} p={p}/>)}
      </div>
    </div>
  </section>
}

function Dish({p}){
  return <div className={p.destaque ? "dish featuredDish" : "dish"}>
    <img src={p.img}/>
    <div className="dishBody">
      <small>{p.destaque ? "⭐ Especialidade da casa" : p.cat}</small>
      <h3>{p.nome}</h3>
      <p>{p.desc}</p>
      <b>{p.preco}</b>
      <a href={zap(`Olá! Tenho interesse no prato: ${p.nome}`)} target="_blank"><WhatsAppIcon size={15}/> Pedir no WhatsApp</a>
    </div>
  </div>
}

function InfoCards(){
  return <section className="section infoCards three">
    <div className="info"><WhatsAppIcon size={38}/><h3>Reservas e pedidos</h3><p>Faça sua reserva ou pedido pelo WhatsApp.</p><a href={zap()} target="_blank">(19) 97124-8417</a></div>
    <div className="info"><MapPin/><h3>Localização</h3><p>Rua Luiz de Queiroz, 113<br/>Centro, Piracicaba - SP</p><a href={mapaUrl} target="_blank">Ver no mapa</a></div>
    <div className="info"><Clock/><h3>Horários</h3><p>Seg a Sex 11h às 15h | 18h às 23h<br/>Domingos 11h às 16h</p><span>Aberto agora</span></div>
  </section>
}

function Reviews(){
  const rs = ["Todo prato que se pede neste restaurante é excelente, mas o Parmegiana é excepcionalmente delicioso.","Experiência sensacional. Comida com sabor a preço justo. Sugerimos o Filé a Cubana mas também tem o Parmegiana, muito bom.","Atendimento excelente, ambiente agradável e comida impecável. O spaghetti com camarão estava simplesmente delicioso.","Referência em Piracicaba! Parmegiana sensacional."];
  return <section className="section">
    <p className="eyebrow green">Avaliações de clientes</p>
    <div className="reviews">
      <div className="score"><b>4,6</b><Stars/><p>Baseado em mais de 1.000 avaliações</p></div>
      {rs.map((r,i)=><div className="review" key={i}><Stars/><p>{r}</p><small>Cliente Google</small></div>)}
    </div>
  </section>
}

function Stars(){ return <div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)}</div>}

function Cardapio(){
  const [cat,setCat]=useState("Parmegianas");
  const cats=["Parmegianas","Peixes","Carnes","Infantil","Massas","Risotos","Porções","Entradas","Bebidas","Guarnições","Sopas e Cremes"];
  const lista = pratos.filter(p=>p.cat===cat);
  return <main>
    <PageHero title="Cardápio completo" text="Escolha sua categoria, veja fotos dos pratos e peça direto pelo WhatsApp."/>
    <section className="section">
      <div className="specialBanner">
        <span>⭐</span>
        <div>
          <h2>A melhor parmegiana de Piracicaba</h2>
          <p>Categoria exclusiva para destacar o prato mais famoso da casa.</p>
        </div>
      </div>
      <div className="filters">{cats.map(c=><button className={cat===c?"active":""} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div>
      <div className="cards big">{lista.map((p,i)=><Dish p={p} key={i}/>)}</div>
    </section>
  </main>
}

function Historia(){
  return <main>
    <PageHero title="Nossa história" text="Uma trajetória de sabor, tradição e amor pela gastronomia piracicabana."/>
    <section className="section grid2">
      <div>
        <p className="eyebrow green">Desde 1988</p>
        <h2>A casa da melhor parmegiana de Piracicaba</h2>
        <p>O Portal do Engenho nasceu para criar memórias em volta da mesa. Com ambiente acolhedor, atendimento cuidadoso e pratos marcantes, o restaurante se tornou referência para moradores e turistas.</p>
        <p>Entre os grandes destaques da casa está a parmegiana: generosa, bem servida, com molho especial e aquele sabor que faz o cliente voltar.</p>
        <div className="timeline">
          <div><b>1988</b><span>Início da história com dedicação e cozinha afetiva.</span></div>
          <div><b>1998</b><span>Crescimento e reconhecimento na cidade.</span></div>
          <div><b>2008</b><span>Ampliação do cardápio e da experiência.</span></div>
          <div><b>Hoje</b><span>Referência em gastronomia, hospitalidade e na melhor parmegiana de Piracicaba.</span></div>
        </div>
      </div>
      <div className="photoBox"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"/></div>
    </section>
  </main>
}

function Galeria(){
  return <main>
    <PageHero title="Galeria" text="Ambiente, pratos e detalhes que fazem parte da experiência Portal do Engenho."/>
    <section className="section galleryPage">{galeria.map((g,i)=><img key={i} src={g}/>)}</section>
  </main>
}

function Contato(){
  return <main>
    <PageHero title="Contato e reservas" text="Fale com a equipe, reserve sua mesa ou veja como chegar."/>
    <InfoCards/>
    <section className="section contactGrid">
      <div className="contactPanel">
        <h2>Faça sua reserva</h2>
        <p>Atendimento rápido pelo WhatsApp para reservas, pedidos e dúvidas.</p>
        <a className="btn primary" href={zap()} target="_blank"><WhatsAppIcon/> Chamar no WhatsApp</a>
        <a className="mapLink" href={mapaUrl} target="_blank"><MapPin/> Abrir localização no Google Maps</a>
      </div>
      <iframe title="Mapa" src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}></iframe>
    </section>
  </main>
}

function PageHero({title,text}){
  return <section className="pageHero"><p className="eyebrow light">Portal do Engenho</p><h1>{title}</h1><p>{text}</p></section>
}

function Footer({setPage}){
  return <footer>
    <div className="footerGrid">
      <div><h3>PORTAL DO ENGENHO</h3><p>Tradição, sabor e experiências inesquecíveis em Piracicaba.</p></div>
      <div><h4>Navegação</h4>{["home","cardapio","historia","galeria","contato"].map(p=><button key={p} onClick={()=>setPage(p)}>{p==="home"?"Início":p[0].toUpperCase()+p.slice(1)}</button>)}</div>
      <div><h4>Contato</h4><p>(19) 97124-8417<br/>Rua Luiz de Queiroz, 113<br/>Centro, Piracicaba - SP</p></div>
      <div><h4>Siga-nos</h4><div className="social"><Instagram/><Facebook/><a href={zap()} target="_blank"><WhatsAppIcon size={28}/></a></div></div>
    </div>
    <small>© 2026 Portal do Engenho. Desenvolvido para apresentação comercial.</small>
  </footer>
}

function App(){
  const [page,setPage]=useState("home");
  const content = {
    home:<Home setPage={setPage}/>,
    cardapio:<Cardapio/>,
    historia:<Historia/>,
    galeria:<Galeria/>,
    contato:<Contato/>,
  }[page];
  return <><Header page={page} setPage={setPage}/>{content}<Footer setPage={setPage}/><a className="floatZap" href={zap()} target="_blank"><WhatsAppIcon size={42}/></a></>
}

createRoot(document.getElementById("root")).render(<App/>);
