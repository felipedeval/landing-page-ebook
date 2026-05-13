# Landing Page — Do Vibe Code ao Produto que Funciona

Landing page de captura para o ebook gratuito de Felipe Deval. Construída com React + Vite + Tailwind CSS.

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3** com design tokens customizados
- **react-helmet-async** para SEO
- Fontes: Syne (display) + DM Sans (body) via Google Fonts

## Estrutura

```
src/
├── components/
│   ├── Nav.jsx           # Navbar sticky com blur
│   ├── Hero.jsx          # Headline + formulário de captura
│   ├── FormCard.jsx      # Card de formulário reutilizável
│   ├── ProofStrip.jsx    # Faixa de credenciais numéricas
│   ├── Modules.jsx       # Grid dos 8 módulos do ebook
│   ├── ForWho.jsx        # Seção "pra quem é" (dark)
│   ├── About.jsx         # Bio do autor
│   ├── CtaFinal.jsx      # CTA final com formulário
│   └── Footer.jsx
├── hooks/
│   ├── useForm.js        # Validação, loading state e submit
│   └── useScrollReveal.js # Animação via IntersectionObserver
├── App.jsx
├── main.jsx
└── index.css             # Tailwind + animações globais
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Integrando o formulário

Os formulários hoje simulam o envio com um `setTimeout`. Para conectar a um ESP real, edite `src/hooks/useForm.js` e substitua o comentário pelo endpoint:

```js
// src/hooks/useForm.js
await fetch('/api/subscribe', {
  method: 'POST',
  body: JSON.stringify(values),
  headers: { 'Content-Type': 'application/json' },
})
```

Sugestões de ESP: [MailerLite](https://www.mailerlite.com), [ConvertKit](https://convertkit.com), [Brevo](https://www.brevo.com).

## SEO

Todas as meta tags ficam no `index.html` (estático, para crawlers):

- Title, description, canonical
- Open Graph (WhatsApp / LinkedIn preview)
- Twitter Card
- Schema.org `Book` com `offers.price: 0`

## Deploy sugerido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Configure o projeto como **Vite** — o Vercel detecta automaticamente.

---

© 2025 [Felipe Deval](https://felipedeval.com.br)
