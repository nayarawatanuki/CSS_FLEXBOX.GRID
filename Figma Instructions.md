# Guia de estilos

Toda a estilização que será usada no projeto dentro do figma.

[Link do projeto no figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358)

## Fonte

```html
Open Sans:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">
```

## Cores

body: `#1D232A`

header: `#1D232A`

header mobile: `#15191C`

lateral menu: `#15191C`

card: `#2C343A`

font: `#FFFFFF`

font alternative: `#95999C`

links: `#0480DC`

button: `#0480DC`

shadow: `0px 4px 4px rgba(0, 0, 0, 0.16)`

## Ícones

Estão dentro do arquivo de fonte `icones.ttf`. Para usar, primeiro importe a fonte no projeto usando `@font-face` e depois utilize os códigos abaixo para exibir o ícone.

```css
@font-face {
    font-family: 'icons';
    src: url(../font/icons.ttf);
}
```

> Cuidado com a localização do arquivo `icones.ttf`

shirts = `\e900`

buy = `\e901`

home = `\e902`

members = `\e903`

Menu = `\e904`

coin = `\e905`

Notification = `\e906`

Peak = `\e908`

peaks = `\e909`

paintings = `\e90a`

Play = `\e90b`

Clock = `\e90c`

Down arrow = `\e90d`

Videos = `\e90e`

visualization = `\e90f`

## Espaçamentos

padding button: `8px`

Espaço entre elementos do botão: `8px`

Espaço entre elementos: `16px/8px`

Espaçamento interno do corpo: `16px`

Espaçamento entre o título do cartão de recentes e seus itens: `24px`

## Tamanhos

Tamanho do dispositivo mobile: `360px`

Tamanho do dispositivo desktop: `768px`

Largura máxima do conteúdo principal: `1120px`

Largura máxima de um cartão desktop: `256px`

Altura mínima de um cartão: `320px`
