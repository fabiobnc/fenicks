# Guia rapido - imagens de Servicos Realizados

Esta pasta alimenta automaticamente a secao "Servicos Realizados" no site.

## Como atualizar

1. Coloque as imagens nesta pasta: `docs/images/servicos/`
2. Use nomes no padrao:
   - `servico-01.jpg`
   - `servico-02.jpg`
   - `servico-03.jpg`
3. Voce pode usar as extensoes: `.webp`, `.jpg`, `.jpeg`, `.png`
4. Para remover uma imagem do site, basta apagar o arquivo da pasta.

## Regras importantes

- O numero deve ter 2 digitos (`01`, `02`, `03`...)
- O site procura automaticamente de `servico-01` ate `servico-40`
- Pode haver "buracos" (exemplo: existe `01`, `02`, `04`) e o site continua funcionando
- Nao precisa editar o HTML para trocar imagens

## Recomendacao de qualidade

- Tamanho sugerido: 1600x1200
- Formato recomendado: `.webp` (mais leve)
- Evite imagens menores que 900px de largura
