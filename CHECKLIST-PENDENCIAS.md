# Checklist de pendências — Site Fenicks

> Ordem de execução recomendada. Documento interno (raiz do repo, não publicado no site).
> Criado em 23/07/2026, na branch `seo-fase-1`. Detalhes de cada item: `STATUS-PROJETO.md` e `SEO-GBP.md`.

## Fase A — Publicar o que está pronto

- [ ] **1. Publicar a branch `seo-fase-1` na `main`**
  - Via Pull Request: https://github.com/fabiobnc/fenicks/pull/new/seo-fase-1
  - Ou pedir ao Claude: `git checkout main && git merge seo-fase-1 && git push`
  - ⚠️ O site em fenicks.com.br SÓ atualiza depois deste passo.
- [ ] **2. Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
  - Cadastrar o domínio `fenicks.com.br` (verificação via DNS no Registro.br)
  - Enviar o sitemap: `https://www.fenicks.com.br/sitemap.xml`
  - É o que faz o Google indexar as 6 páginas de serviço novas.

## Fase B — Presença no Google (maior impacto em clientes)

- [ ] **3. Google Business Profile (GBP)** — [google.com/business](https://www.google.com/business/)
  - Seguir o passo a passo COMPLETO em `SEO-GBP.md` (categorias, serviços, descrição, fotos)
  - Depois de ativo: pedir avaliações a 2–3 clientes por semana (modelo de mensagem no guia)
  - Não confundir: GBP = perfil no Google Maps. GA4 = Analytics (item 4).

## Fase C — Medição

- [ ] **4. GA4 (Google Analytics)** — [analytics.google.com](https://analytics.google.com)
  - Criar a propriedade (grátis) e copiar o Measurement ID (formato `G-XXXXXXXX`)
  - **Passar o ID ao Claude** → ele troca o placeholder nos 7 arquivos (index + 6 páginas de serviço)
  - Sem isso não medimos visitas, cliques nem leads.

## Fase D — Melhorias de proteção e alcance

- [ ] **5. FormSubmit anti-spam**
  - Enviar um teste pelo formulário do site publicado
  - No e-mail de ativação/confirmação do FormSubmit, copiar o endpoint com hash (`formsubmit.co/a1b2c3...`)
  - **Passar o hash ao Claude** → ele esconde o e-mail do código-fonte
- [ ] **6. Facebook** — se houver página da empresa, passar o link ao Claude (rodapé + schema)
- [ ] **7. Instagram** — executar o plano de `ESTRATEGIA-INSTAGRAM.md` (2–3 posts/semana)

## Backlog técnico (Claude faz, sem urgência)

- [ ] Recomprimir `docs/videos/bg-office.mp4` (~6 MB → ~1,5 MB)
- [ ] Converter fotos JPG para WebP
- [ ] Seção de cases com números reais (depende de material do Fabio)
- [ ] Depoimentos de clientes (1–2 citações autorizadas)
- [ ] Banner de consentimento LGPD para o GA4 (conformidade estrita, opcional)

---

## ⚠️ Regra do "site novo" (a partir de 23/07/2026)

O próximo trabalho será um **site totalmente novo**, desenvolvido numa branch própria
criada a partir da `seo-fase-1`. Regras:

1. A branch do site novo (ex.: `site-v2`) **nunca** recebe merge na `main` até decisão
   explícita do Fabio — pode inclusive nunca ser implantado.
2. O site atual continua vivo na `main`: correções e ajustes do site atual são feitos
   na `main` (ou em branches a partir dela), **nunca** na branch do site novo.
3. Não misturar: nada do site novo vai para a `main`, e ajustes do site atual não
   precisam ser replicados no site novo até decisão de implantação.
4. Para criar a branch do site novo: `git checkout -b site-v2 seo-fase-1`
