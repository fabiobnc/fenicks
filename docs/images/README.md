# Organizacao de imagens

As imagens do site foram separadas por contexto para facilitar manutencao.

## Estrutura

- `images/marca/`
  - Logos, variacoes de marca e favicon
- `images/clientes/`
  - Logos de clientes (padrao: `cliente-01.ext`, `cliente-02.ext`)
- `images/especialidades/`
  - Imagens dos blocos de especialidades (servicos principais)
- `images/servicos/`
  - Galeria da secao "Servicos Realizados" (carregamento automatico)

## Regras de atualizacao

1. Galeria de Servicos Realizados:
   - Pasta: `images/servicos/`
   - Nome: `servico-01.jpg`, `servico-02.jpg`...
   - O site identifica automaticamente.
2. Logos de clientes:
   - Pasta: `images/clientes/`
  - Nome: `cliente-01.svg`, `cliente-02.svg`...
3. Marca:
   - Pasta: `images/marca/`
   - Nao alterar nomes atuais sem atualizar o HTML.

## Dica

Antes de subir novas imagens, prefira formato `.webp` para melhor performance.
