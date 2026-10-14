/* =====================================================================
   CONFIGURAÇÃO: edite SÓ este bloco para personalizar o site.
   ===================================================================== */
const CONFIG = {
  nome: "Bella Beauty",
  whatsapp: "5511946367402",
  instagram: "stud_iobellabeauty",
  endereco: "Taboão da Serra, São Paulo - SP",
  mapaEmbed: "https://www.google.com/maps?q=Taboão+da+Serra,+SP&output=embed", // troque o endereço depois de ?q=
  mensagemPadrao: "Olá! Vim pelo site e quero agendar um horário.",

  tituloInicio: "Realce seu olhar com",
  tituloDestaque: "elegância",
  tituloFim: ".",
  subtitulo: "Extensão de cílios, unhas postiças, sobrancelhas e tranças em um ambiente acolhedor, sempre com hora marcada.",
  avisoPrecos: "Os valores de sobrancelhas, unhas e tranças são exemplos e podem ser ajustados. Atendimento somente com hora marcada.",

  imagens: { hero: "assets/images/modelo-1.jpg", sobre: "assets/images/modelo-2.jpg" },

  servicos: [
    { nome: "Extensão de cílios", desc: "Do fio a fio ao volume russo, com mapeamento para o seu olhar.", preco: "A partir de R$ 50", img: "assets/images/cilios-volume.jpg" },
    { nome: "Unhas postiças", desc: "Unhas alongadas com acabamento delicado e durável.", preco: "A partir de R$ 120", img: "assets/images/unhas.jpg" },
    { nome: "Sobrancelhas", desc: "Design que valoriza o formato do seu rosto.", preco: "A partir de R$ 35", img: "assets/images/sobrancelha-1.jpg" },
    { nome: "Tranças", desc: "Penteados em tranças com capricho e conforto.", preco: "A partir de R$ 100", img: "" }
  ],

  precos: [
    { titulo: "Tufo de seda", itens: [["Volume clássico", "R$ 20"], ["Efeito gatinho", "R$ 25"], ["Efeito volumão", "R$ 30"]] },
    { titulo: "Aplicação de cílios", itens: [["Fio a fio (clássico)", "R$ 50"], ["Híbrido", "R$ 60"], ["Volume brasileiro", "R$ 70"], ["Volume egípcio", "R$ 80"], ["Volume russo", "R$ 90"]] },
    { titulo: "Manutenção de cílios", itens: [["Fio a fio (clássico)", "R$ 35"], ["Híbrido", "R$ 40"], ["Volume brasileiro", "R$ 50"], ["Volume egípcio", "R$ 60"], ["Volume russo", "R$ 70"]] },
    { titulo: "Sobrancelhas", itens: [["Design simples", "R$ 35"], ["Design com henna", "R$ 50"], ["Brow lamination", "R$ 120"]] },
    { titulo: "Unhas postiças", itens: [["Aplicação", "R$ 120"], ["Manutenção", "R$ 80"], ["Remoção", "R$ 40"]] },
    { titulo: "Tranças", itens: [["Tranças simples", "R$ 100"], ["Box braids", "R$ 250"], ["Tranças nagô", "R$ 120"]] }
  ],

  galeria: [
    { img: "assets/images/cilios-volume.jpg", alt: "Cílios volume" },
    { img: "assets/images/sobrancelha-cilios.jpg", alt: "Sobrancelha e cílios" },
    { img: "assets/images/unhas.jpg", alt: "Unhas postiças" },
    { img: "assets/images/cilios-classico.jpg", alt: "Cílios clássico" },
    { img: "assets/images/sobrancelha-1.jpg", alt: "Sobrancelha" },
    { img: "assets/images/modelo-2.jpg", alt: "Cliente com cílios" }
  ],

  sobreTitulo: "Cuidado em cada detalhe.",
  sobreTextos: [
    "Minha história com o universo da beleza nasceu da paixão por realçar a beleza natural e elevar a autoestima de cada mulher. Ao longo dessa jornada, descobri na extensão de cílios uma forma de unir delicadeza, criatividade e cuidado em cada detalhe.",
    "Acredito que cada olhar é único e merece um atendimento especial. Por isso, busco constantemente aperfeiçoar minhas técnicas, oferecer um ambiente acolhedor e proporcionar uma experiência que vá além da beleza, fazendo com que cada cliente se sinta ainda mais confiante e especial.",
    "Meu compromisso é entregar resultados que valorizem a individualidade de cada mulher, respeitando seus desejos e destacando o que ela tem de mais bonito. Cada atendimento é uma oportunidade de transformar pequenos detalhes em grandes momentos de autoestima e satisfação.",
    "Mais do que trabalhar com cílios, meu propósito é fazer parte da história de cada cliente, ajudando-a a se sentir linda, confiante e feliz consigo mesma."
  ],
  diferenciais: ["Ambiente acolhedor", "Atendimento personalizado", "Atendimento com hora marcada", "Técnicas em constante aperfeiçoamento"],

  depoimentos: [
    { nome: "Ana Clara", texto: "Simplesmente amei o resultado! Meus cílios ficaram lindos, delicados e exatamente como eu queria. Com certeza voltarei mais vezes!" },
    { nome: "Beatriz Souza", texto: "Foi uma experiência maravilhosa! O atendimento é superatencioso, o ambiente é aconchegante e o resultado ficou impecável." },
    { nome: "Camila Oliveira", texto: "Estou apaixonada pelos meus cílios! Ficaram super naturais e valorizaram muito meu olhar. Recomendo de olhos fechados!" },
    { nome: "Mariana Costa", texto: "Desde o primeiro contato, fui muito bem atendida. A profissional teve todo o cuidado para entender o que eu queria. Ficou perfeito!" },
    { nome: "Isabela Martins", texto: "Além do resultado lindo, adorei o cuidado e a delicadeza durante todo o procedimento. Me senti muito confortável e saí ainda mais confiante." },
    { nome: "Júlia Ferreira", texto: "Era exatamente o que eu procurava! Meus cílios ficaram volumosos na medida certa, sem perder a naturalidade. Já quero agendar novamente!" },
    { nome: "Larissa Almeida", texto: "Adorei cada detalhe! O resultado ficou incrível e facilitou muito minha rotina. Acordar com o olhar bonito faz toda a diferença!" },
    { nome: "Gabriela Santos", texto: "Uma profissional muito dedicada e caprichosa! Dá para perceber o carinho em cada detalhe. Amei o resultado e, com certeza, voltarei!" }
  ],

  faq: [
    { p: "Quais serviços vocês oferecem?", r: "Extensão de cílios, tufo de seda, unhas postiças, sobrancelhas e tranças. Todos os atendimentos são no estúdio e com hora marcada." },
    { p: "Quais tipos de tranças vocês fazem?", r: "Fazemos tranças simples, box braids e nagô, entre outros estilos. Chame no WhatsApp para combinar o modelo que você deseja." },
    { p: "Quais serviços de unhas estão disponíveis?", r: "Aplicação de unhas postiças, manutenção e remoção. Chame no WhatsApp para ver os formatos e acabamentos." },
    { p: "Quanto tempo dura a extensão de cílios?", r: "Em média de 15 a 20 dias. A manutenção prolonga o resultado, e a duração varia com o ciclo natural dos cílios e com os cuidados em casa." },
    { p: "Quanto tempo demora cada procedimento?", r: "A extensão de cílios leva em média de 1h30 a 2h30, dependendo da técnica. Os demais serviços variam conforme o modelo escolhido." },
    { p: "Quais são os valores?", r: "Os valores estão na tabela desta página. Eles podem variar conforme a técnica e o modelo escolhidos." },
    { p: "Como posso agendar um horário?", r: "Pelo botão do WhatsApp aqui no site. Confirmamos o dia e o horário com você." },
    { p: "Quais formas de pagamento são aceitas?", r: "Pix, cartões e dinheiro. Confirme as opções no momento do agendamento." }
  ],

  horarios: [["Atendimento", "Somente com hora marcada"], ["Local", "Em estúdio"]]
};
/* ===================== FIM DA CONFIGURAÇÃO ===================== */

(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const C = CONFIG;
  const waLink = (msg) => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.mensagemPadrao);
  const pic = (src, alt) => src ? `<div class="slot"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>` : `<div class="slot"><span class="ph">${esc(alt)}</span></div>`;

  document.title = C.nome + " | Cílios, unhas, sobrancelhas e tranças";
  document.querySelectorAll("[data-cfg]").forEach((el) => { if (C[el.dataset.cfg] !== undefined) el.textContent = C[el.dataset.cfg]; });
  document.querySelectorAll("[data-wa]").forEach((a) => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener noreferrer"; });
  document.querySelectorAll("[data-slot]").forEach((el) => { const s = C.imagens[el.dataset.slot]; el.innerHTML = s ? `<img src="${esc(s)}" alt="${esc(C.nome)}">` : `<span class="ph">${esc(C.nome)}</span>`; });
  $("#ano").textContent = new Date().getFullYear();

  $("#lista-servicos").innerHTML = C.servicos.map((s) => `<article class="card">${pic(s.img, s.nome)}<div class="card-body"><h3>${esc(s.nome)}</h3><p>${esc(s.desc)}</p><span class="price">${esc(s.preco)}</span><a class="btn btn-sm" target="_blank" rel="noopener noreferrer" href="${waLink("Olá! Quero agendar: " + s.nome)}">Agendar</a></div></article>`).join("");
  $("#lista-precos").innerHTML = C.precos.map((g) => `<div class="pt"><h3>${esc(g.titulo)}</h3><ul>${g.itens.map((i) => `<li><span>${esc(i[0])}</span><i></i><b>${esc(i[1])}</b></li>`).join("")}</ul></div>`).join("");
  $("#lista-galeria").innerHTML = C.galeria.map((g) => pic(g.img, g.alt)).join("");
  $("#sobre-textos").innerHTML = C.sobreTextos.map((t) => `<p>${esc(t)}</p>`).join("");
  $("#lista-diferenciais").innerHTML = C.diferenciais.map((d) => `<li>${esc(d)}</li>`).join("");
  $("#lista-depoimentos").innerHTML = C.depoimentos.map((d) => `<blockquote class="quote"><span class="stars" aria-label="5 estrelas">★★★★★</span><p>“${esc(d.texto)}”</p><small>${esc(d.nome)}</small></blockquote>`).join("");
  $("#lista-faq").innerHTML = C.faq.map((f) => `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join("");
  $("#lista-horarios").innerHTML = C.horarios.map((h) => `<dt>${esc(h[0])}</dt><dd>${esc(h[1])}</dd>`).join("");
  $("#select-servico").innerHTML = C.servicos.map((s) => `<option>${esc(s.nome)}</option>`).join("") + "<option>Ainda não sei, preciso de orientação</option>";
  const insta = $("#link-insta"); insta.href = "https://www.instagram.com/" + C.instagram + "/"; insta.textContent = "Siga @" + C.instagram + " no Instagram";
  $("#mapa").innerHTML = C.mapaEmbed ? `<iframe src="${esc(C.mapaEmbed)}" loading="lazy" title="Mapa" referrerpolicy="no-referrer-when-downgrade"></iframe>` : `<div class="slot"><span class="ph">Mapa aparece aqui</span></div>`;

  const burger = $(".burger"), nav = $("#nav");
  const setMenu = (o) => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  $("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const msg = ["Olá! Me chamo " + d.get("nome") + ".", "Quero agendar: " + d.get("servico") + ".", d.get("quando") ? "Melhor horário: " + d.get("quando") + "." : "", d.get("msg") || ""].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    $("#hint").textContent = "Abrindo o WhatsApp com a sua mensagem.";
  });
})();
