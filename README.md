# SolarNex — Solar Energy Solutions UK

Landing page profissional para empresa de energia solar no Reino Unido. O projeto oferece informações sobre serviços, captação de leads, avaliações de clientes e FAQ, com SEO completo aplicado.

---

## Sobre o Projeto

| Item | Detalhe |
|------|---------|
| **Inicio do projeto** | Maio 2026 |
| **Dominio** | https://solarnex.com |
| **Mercado** | Reino Unido |
| **Objetivo** | Captacao de leads para instalacao de paineis solares |

---

## Tecnologias

| Tecnologia | Versao | Uso |
|-----------|--------|-----|
| [Next.js](https://nextjs.org) | 13.5 | Framework principal (SSG / Static Export) |
| [React](https://react.dev) | 18.2 | UI |
| [TypeScript](https://www.typescriptlang.org) | 5.2 | Tipagem estatica |
| [Tailwind CSS](https://tailwindcss.com) | 3.3 | Estilizacao |
| [shadcn/ui](https://ui.shadcn.com) | — | Componentes de UI acessiveis |
| [Lucide React](https://lucide.dev) | 0.446 | Icones |
| [React Hook Form](https://react-hook-form.com) | 7.53 | Formulario de captacao de leads |
| [Zod](https://zod.dev) | 3.23 | Validacao de formulario |
| [Supabase JS](https://supabase.com) | 2.58 | Banco de dados (leads) |

---

## SEO Aplicado

### Metadata
- `title` com template dinamico por pagina (`%s | SolarNex`)
- `meta description` otimizada com palavras-chave de alto volume
- Array de `keywords` focadas no mercado solar UK
- Tag `canonical` em todas as paginas para evitar conteudo duplicado
- Atributos `robots` granulares (index/follow + Googlebot especifico)
- `lang="en-GB"` e meta tags geograficas (`geo.region`, `geo.country`)
- `theme-color` para navegadores mobile

### Open Graph & Social
- `og:title`, `og:description`, `og:image`, `og:locale` (en_GB)
- `og:type: website` + `og:site_name`
- Twitter Card `summary_large_image`
- Imagem OG 1200x630px

### Structured Data (JSON-LD)
| Schema | Beneficio |
|--------|-----------|
| `LocalBusiness` | Aparece no Google Maps / Knowledge Panel |
| `WebSite` + `SearchAction` | Habilita caixa de busca no resultado Google |
| `FAQPage` | Rich result de FAQ no Google (resposta expandida) |
| `ItemList` + `Service` | Destaque de servicos nos resultados |
| `AggregateRating` + `Review` | Estrelas de avaliacao nos resultados |
| Microdata inline (`itemScope`/`itemProp`) | Reforco semantico nos cards de review |

### Acessibilidade & Core Web Vitals
- `aria-label` em todas as secoes
- FAQ com `aria-expanded`, `aria-controls` e estrutura `<dl>/<dt>/<dd>`
- Reviews com `<blockquote>` e marcacao de lista semantica
- Icones marcados com `aria-hidden="true"`
- Google Font carregada com `display: swap` (evita FOIT)
- `dns-prefetch` para Pexels (imagens externas)

### Rastreamento & Indexacao
- `public/sitemap.xml` com todas as rotas e prioridades
- `public/robots.txt` com `Sitemap:` declarado
- Suporte a verificacao Google (`verification.google`)

---

## Estrutura de Paginas

```
/                    → Landing page principal
/privacy-policy      → Politica de privacidade
/terms-of-service    → Termos de servico
```

---

## Como Rodar Localmente

### Pre-requisitos

- Node.js 18+
- npm ou yarn

### Instalacao

```bash
# 1. Clone o repositorio
git clone https://github.com/seu-usuario/solarnex.git
cd solarnex

# 2. Instale as dependencias
npm install

# 3. Configure as variaveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do Supabase
```

### Variaveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### Comandos

```bash
# Desenvolvimento
npm run dev

# Build de producao
npm run build

# Servir build estatico
npm run start

# Verificar tipos TypeScript
npm run typecheck
```

O servidor de desenvolvimento estara disponivel em `http://localhost:3000`.

---

## Deploy

O projeto usa `output: 'export'` no `next.config.js`, gerando arquivos HTML estaticos na pasta `out/`. Compativel com:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Qualquer CDN / hosting estatico

---

## Licenca

Todos os direitos reservados © 2026 SolarNex.
