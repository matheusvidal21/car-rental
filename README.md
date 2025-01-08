# Sistema Web para Locadora de Veículos

Este projeto consiste em um sistema web para uma locadora de veículos, desenvolvido com HTML, CSS e JavaScript. O sistema permite a listagem, cadastro e exclusão de veículos, utilizando `localStorage` para armazenamento local dos dados e `fetch API` para requisições à uma API fictícia.

## Funcionalidades

O sistema é composto por quatro páginas principais:

1. **Página Inicial**: Apresenta informações sobre a empresa e um menu de navegação para as demais páginas.
2. **Listagem de Veículos**: Exibe os veículos disponíveis para locação, com informações como marca, modelo, ano, cor, tipo, quilometragem, número de portas e uma imagem.
3. **Cadastro de Veículos**: Permite o cadastro de novos veículos, com validação dos campos e armazenamento no `localStorage`.
4. **Exclusão de Veículos**: Permite a exclusão de veículos cadastrados, com atualização dinâmica da lista e do `localStorage`.

## Tecnologias Utilizadas

- **HTML**: Estruturação das páginas.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica de programação, manipulação do DOM, uso de `fetch API` e `localStorage`.
- **JsonPlaceHolder**: Plataforma utilizada para criar uma API fictícia com dados próprios.

## API Fictícia

A API fictícia foi criada utilizando a plataforma **JsonPlaceHolder**, com dados próprios armazenados no arquivo `db.json`. A API pode ser acessada através do link:

[https://my-json-server.typicode.com/matheusvidal21/car-rental/vehicles](https://my-json-server.typicode.com/matheusvidal21/car-rental/vehicles)

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone git@github.com:matheusvidal21/car-rental.git
```

2. Abra o arquivo index.html no seu navegador para acessar a página inicial.

3. Navegue entre as páginas utilizando o menu de navegação.

## Autor
- Matheus Vidal (matheusvidal140@gmail.com)
