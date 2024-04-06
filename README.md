<h1 align="center"> pass.in | NLW Unite NodeJS </h1>

<p align="center">
API REST desenvolvida através do NLW Unite, <strong>trilha de NodeJS</strong> da Rocketseat<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="imagem do site pronto" src="./assets/swagger-ui-passin.png">
</p>

## ⚙ Utilização

**1. Clone o repositório:**

```bash
git clone https://github.com/RafaelR4mos/nlw-unite-pass-in.git
```

**2. Instale as dependências:**

```
npm install
```

**3. Execute as migrations:**

```
npm run db:migrate
```

**4. Execute o servidor de desenvolvimento:**

```bash
npm run dev
```

**OPCIONAL: Você pode verificar as inserções no bd local com o comando:**

```bash
npm run db:studio
```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as tecnologias:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

- Zod

## 💻 Projeto

O projeto é uma API REST. Como requisitos funcionais, não funcionais e regras de negócios, da aplicação, temos:

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poder visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] o participante deve poder reealizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## 🔘 Licença

Esse projeto está sob a licença MIT.

---

Feito por: Rafael Ramos 💙
