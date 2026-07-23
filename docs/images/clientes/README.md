# Guia rapido - logos de clientes

Esta pasta contem os logos exibidos na secao "Clientes e projetos" do site.

## Como atualizar

1. Coloque o logo nesta pasta: `docs/images/clientes/`
2. Use nomes no padrao: `cliente-01.svg`, `cliente-02.svg`...
3. Edite o `docs/index.html`, secao `#clientes`: copie um bloco
   `<div class="col-6 col-md-2">...</div>` existente e ajuste:
   - o `src` para o novo arquivo
   - o `alt` com o NOME da marca (ex.: `alt="Bradesco"`)
4. Para remover um logo, apague o arquivo E o bloco correspondente no HTML.

> Os logos agora sao declarados direto no HTML (sem carregamento automatico).

## Logos atuais

- `cliente-01.svg` - Bradesco
- `cliente-02.svg` - Itau
- `cliente-03.svg` - LATAM
- `cliente-04.svg` - Embraer
- `cliente-05.svg` - Coca-Cola
- `cliente-06.png` - Marilan

## Recomendacao

- Prefira `.svg` para logos (mais nitido e leve)
