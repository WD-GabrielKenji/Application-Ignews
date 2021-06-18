<p align="center">
   <img src="./public/images/Banner.svg" alt="Dt money" width="280"/>
</p>

<p align="center">
 <a href="#projeto">Projeto</a> •
 <a href="#tecnologias">Tecnologias Utilizadas</a> •
 <a href="#execucao">Como Executar</a> •
 <a href="#documentacao">Documentação</a> •
 <a href="#licenca">Licença</a> •
 <a href="#autor">Autor</a> •
 <a href="#contato">Contato</a> 
</p>

--------------------------- 

# :fire: <Strong> Obrigado por visualizar este repositório </Strong> <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="28px" alt="hi">

<p align="justify"> Primeiramente, olá me chamo Gabriel Kenji Poli Ozaki, sou um estudante de Ciência da Computação e estou querendo atuar na área de Desenvolvimento Web como Desenvolvedor Front-end. </p>

## :computer: <strong id="projeto">Sobre o Projeto </strong>

<img src="./public/images/HomePage.jpg" width="49%" height="49%"/> 
<img src="./public/images/Pagamento.jpg" width="49%" height="49%"/> 
<img src="./public/images/Preview.jpg" width="49%" height="49%"/> 
<img src="./public/images/Post.jpg" width="49%" height="49%" />

<p align="justify"><strong>Ig.News</strong> é um app voltado ao <strong>consumo de Blog</strong> contendo Posts com conteúdos para assinantes e prévias para não assinantes, e utilizando Next.js com conceitos de SSG e SSR, gerando mais performance e indexação.<p>

### :pushpin: Funcionabilidades

- [x] Sistema de Login e autenticação atribuídos através da conta do usuário no Github
- [x] Permite o usuário efetuar compra do plano de assinatura (anual ou mensal através do Stripe)
- [x] Aplicação faz um autorreconhecimento no status de assinatura dos usuários
- [x] Somente usuários contendo uma assinatura ativa poderão visualizar o conteúdo completo do Post
- [x] Usuários com uma assinatura não ativa conseguirão visualizar uma prévia do conteúdo no Post

### :triangular_ruler: Layout

<p>Você pode visualizar o layout do projeto através <a href="https://www.figma.com/file/jo6h7zRqOZpnuVii0jqx8T/ig.news">desse link</a>. É necessário ter conta no <a href="https://www.figma.com/">Figma</a> para acessá-lo.</p>

<p align="justify">Essa aplicação Ig.News foi desenvolvida, através do Bootcamp Ignite organizada pela empresa Rocketseat e mentoreado pelo Diego Fernandes na trilha de ReactJS.</p>

## :rocket: <Strong id="tecnologias"> Tecnologias Utilizadas </Strong>

<p align="justify"> Este projeto foi desenvolvido utilizando as seguintes tecnologias: </p>

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](https://reactjs.org/) [![Next JS](https://img.shields.io/badge/Nextjs-blueviolet.svg?style=for-the-badge&amp;logo=Next.js&amp;labelColor=000000&amp;logoWidth=20")](https://nextjs.org/) [![Stripe Badge](https://img.shields.io/badge/-Stripe-6666ff?style=for-the-badge&labelColor=black&logo=stripe&logoColor=6666ff)](https://stripe.com/br) [![FaunaDB Badge](https://img.shields.io/badge/-Faunadb-5900b3?style=for-the-badge&labelColor=black&logo=faunadb&logoColor=5900b3)](https://fauna.com/) [![Prismic CMS Badge](https://img.shields.io/badge/-Prismic-ffff00?style=for-the-badge&labelColor=black&logo=prismic&logoColor=ffff00)](https://prismic.io/) [![Typescript Badge](https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)](https://www.typescriptlang.org/) [![SCSS Badge](https://img.shields.io/badge/-SASS-ff3399?style=for-the-badge&labelColor=black&logo=sass&logoColor=ff3399)](https://sass-lang.com/)

<ul>
  <li><a href="https://github.com/axios/axios" rel="nofollow">Axios</a></li>
  <li><a href="https://next-auth.js.org/" rel="nofollow">Next-auth</a></li>
  <li><a href="https://nextjs.org/docs/api-reference/next/router" rel="nofollow">Next/router</a></li>
</ul>

## :runner: <strong id="execucao"> Como executar o projeto </strong>

[![Yarn Badge](https://img.shields.io/badge/yarn-1.22.10-brightgreen)](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```bash
# Fazer o clone do Repositorio.
>> git clone https://github.com/WD-GabrielKenji/Application-Ignews.git
>> cd Application-Ignews >> code .
```
```bash
# Necessario baixar as dependencias necessárias e iniciar o servidor de desenvolvimento:

## Instalar as dependencias: 
>> yarn

## Iniciar o servidor de desenvolvimento:
>> yarn dev
```
```bash
# Criar um arquivo .env.local para armazenar as variaveis de ambiente e insira códigos necessários em cada uma delas:

##Stripe:
>> STRIPE_API_KEY=
>> NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
>> STRIPE_WEBHOOK_SECRET=
>> STRIPE_SUCCESS_URL=
>> STRIPE_CANCEL_URL=

##Github:
>> GITHUB_CLIENT_ID=
>> GITHUB_CLIENT_SECRET=

##FaunaDB:
>> FAUNADB_KEY=

##Prismic CMS:
>> PRISMIC_ENDPOINT=
>> PRISMIC_ACCESS_TOKEN=

# Obs: Necessário reiniciar o servidor de desenvolvimento quanto terminar de inserir as variáveis de ambiente!
```
```bash
# Instalar a CLI do Stripe para verificar os eventos do webhook:

## CLI Stripe: 
>> https://stripe.com/docs/stripe-cli

## Insira em seu Terminal:
>> stripe listen --forward-to localhost:3000/api/webhooks 
```

<pre>
Agora basta acessar <a href="http://localhost:3000" rel="nofollow"><code>localhost:3000</code></a> no seu Browser e usufruir da aplicação!
</pre>

## :book: <strong id="documentacao"> Detalhes aprofundados sobre o projeto </strong>

<details>
<summary>
  Documentação com os detalhes do projeto...
</summary>

<p align="justify"> *Em construção...* </p>

</details>

## :closed_book: <strong id="licenca"> Licença </strong>

<img alt="GitHub" src="https://img.shields.io/github/license/facebook/react"/>

Esse projeto esta sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## :boy: <strong id="autor"> Autor </strong>

<a href="https://github.com/WD-GabrielKenji">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77596710?s=400&u=70de2ffcac45b9e0db00c828fe785d4a76ac3f65&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Kenji Poli Ozaki</b></sub></a> <a href="https://github.com/WD-GabrielKenji" title="Perfil Github"> :star2: 
</a>


Feito de ❤️ por Gabriel Kenji Poli Ozaki - Desenvolvedor Front-end 👋🏽

### :mailbox_with_mail: <strong id="contato"> Redes Sociais para Contato: </strong>

<p> Entre em contato, atraves destas redes sociais: </p>

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel_Kenji_Poli_Ozaki-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wdkenji/)  [![Mail Badge](https://img.shields.io/badge/-@biel.kenjii-C63381?style=flat&labelColor=C63381&logo=instagram&logoColor=white)](https://www.instagram.com/biel.kenjii/)  [![Mail Badge](https://img.shields.io/badge/-g.kenjijss-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:g.kenjijss@gmail.com)

[![GitHub followers](https://img.shields.io/github/followers/WD-GabrielKenji.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/WD-GabrielKenji)
