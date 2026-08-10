// MENU
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}


// ANO DO RODAPÉ
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ORÇAMENTO + WHATSAPP
const quoteForm = document.getElementById("quoteForm");
const quoteResult = document.getElementById("quoteResult");
const whatsappDirect = document.getElementById("whatsappDirect");

const WHATSAPP_NUMBER = "5511970171040";


// CRIAR MENSAGEM
function buildWhatsAppMessage() {

  const name = document.getElementById("quoteName").value.trim();
  const email = document.getElementById("quoteEmail").value.trim();
  const company = document.getElementById("quoteCompany").value.trim();
  const service = document.getElementById("quoteService").value;
  const project = document.getElementById("quoteMessage").value.trim();

  return [
    "Olá, CodeRise! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Empresa: ${company || "Não informado"}`,
    `Serviço: ${service}`,
    "",
    `Projeto: ${project}`
  ].join("\n");
}


// ABRIR WHATSAPP
function openWhatsApp() {

  const name = document.getElementById("quoteName").value.trim();
  const email = document.getElementById("quoteEmail").value.trim();
  const service = document.getElementById("quoteService").value;
  const project = document.getElementById("quoteMessage").value.trim();

  if (!name || !email || !service || !project) {

    if (quoteResult) {
      quoteResult.textContent =
        "Preencha seu nome, e-mail, serviço e projeto antes de continuar.";
    }

    return;
  }

  const whatsappMessage = buildWhatsAppMessage();

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  if (quoteResult) {
    quoteResult.textContent =
      `Obrigado, ${name}! Abrindo o WhatsApp...`;
  }

  window.open(whatsappURL, "_blank");
}


// BOTÃO SOLICITAR ORÇAMENTO
if (quoteForm) {

  quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    openWhatsApp();

  });

}


// BOTÃO FALAR DIRETAMENTE PELO WHATSAPP
if (whatsappDirect) {

  whatsappDirect.addEventListener("click", function(event) {

    event.preventDefault();

    openWhatsApp();

  });

}

// ===============================
// ACESSIBILIDADE
// ===============================
 
const accessibilityBtn =
  document.getElementById("accessibilityBtn");

const accessibilityPanel =
  document.getElementById("accessibilityPanel");

const increaseText =
  document.getElementById("increaseText");

const decreaseText =
  document.getElementById("decreaseText");

const highContrast =
  document.getElementById("highContrast");

const highlightLinks =
  document.getElementById("highlightLinks");

const reduceMotion =
  document.getElementById("reduceMotion");

const resetAccessibility =
  document.getElementById("resetAccessibility");


if (accessibilityBtn && accessibilityPanel) {

  accessibilityBtn.addEventListener("click", () => {

    const isOpen =
      accessibilityPanel.classList.toggle("active");

    accessibilityBtn.setAttribute(
      "aria-expanded",
      isOpen
    );

    accessibilityPanel.setAttribute(
      "aria-hidden",
      !isOpen
    );

  });

}

// ===============================
// ACESSIBILIDADE — BOTÕES ATIVOS
// ===============================

// AUMENTAR TEXTO
if (increaseText) {

  increaseText.addEventListener("click", () => {

    document.body.classList.remove("access-text-small");
    document.body.classList.add("access-text-large");

    increaseText.classList.add("active");
    decreaseText.classList.remove("active");

  });

}


// DIMINUIR TEXTO
if (decreaseText) {

  decreaseText.addEventListener("click", () => {

    document.body.classList.remove("access-text-large");
    document.body.classList.add("access-text-small");

    decreaseText.classList.add("active");
    increaseText.classList.remove("active");

  });

}


// ALTO CONTRASTE
if (highContrast) {

  highContrast.addEventListener("click", () => {

    document.body.classList.toggle("access-high-contrast");

    highContrast.classList.toggle(
      "active",
      document.body.classList.contains("access-high-contrast")
    );

  });

}


// DESTACAR LINKS
if (highlightLinks) {

  highlightLinks.addEventListener("click", () => {

    document.body.classList.toggle("access-highlight-links");

    highlightLinks.classList.toggle(
      "active",
      document.body.classList.contains("access-highlight-links")
    );

  });

}


// REDUZIR ANIMAÇÕES
if (reduceMotion) {

  reduceMotion.addEventListener("click", () => {

    document.body.classList.toggle("access-reduced-motion");

    reduceMotion.classList.toggle(
      "active",
      document.body.classList.contains("access-reduced-motion")
    );

  });

}


// RESTAURAR PADRÃO
if (resetAccessibility) {

  resetAccessibility.addEventListener("click", () => {

    document.body.classList.remove(
      "access-text-large",
      "access-text-small",
      "access-high-contrast",
      "access-highlight-links",
      "access-reduced-motion"
    );

    increaseText.classList.remove("active");
    decreaseText.classList.remove("active");
    highContrast.classList.remove("active");
    highlightLinks.classList.remove("active");
    reduceMotion.classList.remove("active");

  });

}