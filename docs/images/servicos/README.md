# Guia rapido - imagens de Servicos Realizados

Esta pasta contem as fotos da secao "Servicos Realizados" do site.

## Como atualizar

1. Coloque a imagem nesta pasta: `docs/images/servicos/`
2. Use nomes no padrao: `servico-01.jpg`, `servico-02.jpg`...
3. Edite o `docs/index.html`, secao `#galeria`: copie um bloco
   `<div class="galeria-item">...</div>` existente e ajuste:
   - o `src` para o novo arquivo
   - o `alt` com uma descricao real da foto (importante para SEO e acessibilidade)
   - os atributos `width`/`height` com as dimensoes reais da imagem
4. Para remover uma imagem, apague o arquivo E o bloco correspondente no HTML.

> As imagens agora sao declaradas direto no HTML (sem carregamento automatico).
> Isso elimina centenas de requisicoes desnecessarias e permite descricoes reais.

## Recomendacao de qualidade

- Tamanho sugerido: 1600x1200
- Formato recomendado: `.webp` (mais leve)
- Evite imagens menores que 900px de largura
