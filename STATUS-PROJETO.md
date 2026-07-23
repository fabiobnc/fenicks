# Status do Projeto — Site Fenicks

> Documento interno de acompanhamento. Fica na raiz do repositório (fora de `docs/`),
> portanto **não é publicado no site** — mas é visível no GitHub.
> Última atualização: 08/07/2026

## O que é este projeto

Site institucional da **Fenicks** (gestão de obras corporativas, montagem/realocação de
mobiliário corporativo e manutenção predial). Sede em Osasco/SP; atende Grande São Paulo,
estado de SP e, conforme o projeto, outros estados.

- **Publicação:** GitHub Pages servindo a pasta `docs/` no domínio `www.fenicks.com.br` (via `docs/CNAME`)
- **Stack:** HTML estático + Bootstrap 5 (CDN). Sem build — editar e commitar já publica.
- **Páginas:** `index.html`, `privacidade.html`, `obrigado.html` (noindex), `404.html`,
  e 6 páginas de serviço em `docs/servicos/<slug>/index.html` (montagem-de-moveis-corporativos,
  remanejamento-de-layout, manutencao-predial, drywall-e-divisorias,
  instalacao-eletrica-e-cabeamento, gestao-de-obras)
- **Formulário:** envia via formsubmit.co para `contato@fenicks.com.br`
- **Galeria e logos de clientes:** declarados direto no HTML da home (desde 23/07/2026 —
  o carregamento automático por numeração foi removido). Para adicionar foto/logo, suba o
  arquivo E edite a seção correspondente do `index.html` (ver READMEs em `docs/images/`).

## Diagnóstico feito em 07/07/2026

A empresa está em reestruturação; objetivo é alavancar: mais clientes (incluindo pequenos,
que são o foco no momento) e mais seguidores no Instagram ([@fenicks__](https://www.instagram.com/fenicks__/)).

Principais achados:
- A Fenicks está praticamente invisível no Google (site mal indexado, sem Google Business Profile).
- O Google Analytics está com ID falso → **nenhum dado de visita/clique está sendo coletado**.
- Site tecnicamente bom (responsivo, acessível, eventos de clique já programados).
- Falta prova social: cases, depoimentos, legendas na galeria, FAQ (ficou para depois).
- Concorrentes/referências mapeados: Interiores Corporativos, SP Predial, Renovo (diretos);
  Marelli, Bortolini, Work Solution, Concept (fabricantes, referência de posicionamento).

## Já feito (commit de 08/07/2026)

- [x] `<h1>` do hero agora é "Gestão de obras, mobiliário corporativo e manutenção predial" (SEO), sem limitar público
- [x] Link do Instagram (`@fenicks__`) e WhatsApp no rodapé, com rastreamento de clique
- [x] Dados estruturados (JSON-LD) atualizados: `LocalBusiness` com sede em Osasco, área de atuação e Instagram
- [x] Mapa da seção de contato apontando para Osasco + card "Onde atuamos"
- [x] Carregamento da galeria/logos paralelizado (antes era sequencial e lento)
- [x] `noindex` na página de obrigado
- [x] Criado `ESTRATEGIA-INSTAGRAM.md` (estratégia completa de conteúdo, planejador, métricas e anúncios)
- [x] Confirmado que `docs/sitemap.xml` já existe e está correto

## Pendente — depende do Fabio (contas/cadastros)

| # | Tarefa | Onde | Observação |
|---|---|---|---|
| 1 | Criar propriedade **GA4** e pegar o ID `G-...` | [analytics.google.com](https://analytics.google.com) | Grátis. Depois avisar o Claude para trocar `G-XXXXXXXXXX` nos 7 arquivos (index + 6 páginas de serviço). Correção nº 1: sem isso não medimos nada |
| 2 | Cadastrar site no **Google Search Console** e enviar o sitemap | [search.google.com/search-console](https://search.google.com/search-console) | Verificar o domínio e submeter `https://www.fenicks.com.br/sitemap.xml` (já inclui as páginas de serviço) |
| 3 | Criar **Google Business Profile** | [google.com/business](https://www.google.com/business/) | **Seguir o passo a passo pronto em `SEO-GBP.md`** (categorias, serviços, descrição, avaliações, posts) |
| 4 | Criar e-mail no domínio (**Zoho Mail**, plano grátis) | [zoho.com/mail](https://www.zoho.com/mail/) | Requer acesso ao DNS do domínio (Registro.br?). Criar `contato@fenicks.com.br` |
| 5 | Passar o link da **página do Facebook** | — | Para adicionar no rodapé e no JSON-LD |
| 6 | Executar o plano do Instagram | `ESTRATEGIA-INSTAGRAM.md` | Conta comercial, Business Manager, planejador, 2–3 posts/semana |

## Pendente — tarefas de código (para o Claude na próxima sessão)

- [ ] Trocar o ID do GA4 quando o Fabio criar a conta (item 1 acima)
- [x] Trocar `vendas.fenicks@hotmail.com` pelo e-mail no domínio (formulário + card de contato) quando o Zoho estiver ativo
- [ ] Adicionar link do Facebook no rodapé e no JSON-LD quando tiver a URL
- [ ] **Seção de cases** com antes/depois e números (ex.: "reforma de agência em X dias") — conteúdo a coletar com o Fabio
- [ ] **Depoimentos** de clientes (coletar 1–2 citações autorizadas)
- [x] **Legendas e alt-text descritivos na galeria** (feito em 23/07/2026 — galeria estática com alts reais)
- [x] **Seção FAQ** (feito em 23/07/2026 — 3 perguntas por página de serviço; "Emitem ART?" ficou de fora por falta de confirmação do Fabio)
- [ ] Avaliar converter imagens JPG para WebP (peso da página)
- [x] Páginas separadas por serviço para SEO (feito em 23/07/2026 — 6 páginas em `docs/servicos/`, no menu, com JSON-LD Service e sitemap atualizado)
- [ ] Trocar e-mail exposto do FormSubmit pelo endpoint com hash (anti-spam) — Fabio precisa pegar o hash no e-mail de ativação do FormSubmit
- [ ] Recomprimir `videos/bg-office.mp4` (~6 MB → ~1,5 MB; hoje o carregamento é adiado via JS, mas o arquivo segue pesado)

## Atenções

- ⚠️ Confirmar se há autorização contratual para exibir os logos de clientes (Bradesco, Itaú, Coca-Cola...) na seção "Clientes".
- ⚠️ Em fotos de obras em bancos, não mostrar marca/agência identificável sem autorização.
- O LinkedIn `linkedin.com/company/fenicks` está referenciado no JSON-LD — confirmar se a página existe/está ativa.

## Como retomar em outro PC

```bash
git clone <url-deste-repositório>
```

Abrir este arquivo (`STATUS-PROJETO.md`) e o `ESTRATEGIA-INSTAGRAM.md`. Para testar o site
localmente, basta abrir `docs/index.html` no navegador (ou `python -m http.server` dentro de
`docs/` para a galeria carregar corretamente). Qualquer push na branch `main` publica o site.
