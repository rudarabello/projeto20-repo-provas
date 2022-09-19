<h1 align="center">
  RepoProvas
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-316192?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

A Typescript project designed to share tests!

</br>

## Features

-   User sign-up and sign-in
-   Create tests.
-   View tests ordered by discipline id.
-   View tests ordered by teacher id.

</br>

## API Reference

### POST /sign-up

```
https://back-projeto-repo-provas.herokuapp.com/sign-up
```

#### Request:

| Body                | Type     | Description                         |
| :------------------ | :------- | :-----------------------------------|
| `email`             | `string` | **Required**. user email            |
| `password`          | `string` | **Required**. user password         |
| `confirmPassword`   | `string` | **Required**. user confirmPassword  |

#### Response:

```
user registred sucessfully
```
#

### POST /sign-in

```
https://back-projeto-repo-provas.herokuapp.com/sign-in
```

#### Request:

| Body            | Type     | Description                     |
| :-------------- | :------- | :------------------------------ |
| `email`         | `string` | **Required**. user email        |
| `password`      | `string` | **Required**. user password     |

#### Response:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9._QMdLkklBUkL30VHzs_GbV3xLgNiKLoA6FRic5Ahu4Q"
}
```
#

### POST /tests

```
https://back-projeto-repo-provas.herokuapp.com/tests
```

#### Request:

| Headers          | Type    | Description         |
| :--------------- | :-------| :------------------ |
| `Autorization`   | `string`|  Bearer token       | 

####

| Body                     | Type      | Description                             |
| :----------------------- | :-------- | :-------------------------------------- |
| `name`                   | `string`  | **Required**. test name                 |
| `pdfUrl`                 | `string`  | **Required**. pdf's url                 |
| `categoryId`             | `integer` | **Required**. test category id          |
| `teacherId`              | `integer` | **Required**. teacher discipline id     |
| `disciplineId`           | `integer` | **Required**. discipline id     |

####

</br>

#### Response:

```
Test created sucessfully!
```

`pdfUrl must be a valid pdf url`

#

### GET /tests/disciplines

```
https://back-projeto-repo-provas.herokuapp.com/tests/disciplines
```

#### Request:

| Headers          | Type    | Description         |
| :--------------- | :-------| :------------------ |
| `Autorization`   | `string`|  Bearer token       | 


#### Response:

```json
[
  {
    "id": 1,
    "teacherId": 1,
    "disciplineId": 1,
    "disciplines": {
      "name": "HTML e CSS"
    },
    "Tests": [
      {
        "id": 129,
        "name": "beak",
        "pdfUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg.pdf"
      }
    ],
    "teachers": {
      "id": 1,
      "name": "Diego Pinho"
    }
  },
  ...
]
```
#

### GET tests/teachers

```
https://back-projeto-repo-provas.herokuapp.com/tests/teachers
```

#### Request:

| Headers          | Type    | Description         |
| :--------------- | :-------| :------------------ |
| `Autorization`   | `string`|  Bearer token       | 


#### Response:

```json
 [
  {
    "id": 1,
    "name": "Diego Pinho",
    "TeachersDisciplines": [
      {
        "id": 1,
        "teacherId": 1,
        "disciplineId": 1,
        "disciplines": {
          "name": "HTML e CSS"
        },
        "Tests": [
          {
            "id": 129,
            "name": "beak",
            "pdfUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg.pdf"
          }
        ]
      },
   ...   
 ]
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`JWT_SECRET= string ` 

`SENDGRID_EMAIL= e-mail validate on sendGrid app `

`SENDGRID_API_KEY= api-key from sendGrid`

</br>

## The application is currently deployed on Heroku, but if you want to run it locally...

Clone the project

```bash
  git clone https://github.com/rudarabello/projeto20-repo-provas
```

Go to the project directory

```bash
  cd projeto20-repo-provas
```

Install dependencies

```bash
  npm install
```

Check your .env and prisma will build the postgress database.

```bash
  run npx prisma migrate dev 
```

Start the server

```bash
  npm run dev
```

Run tests

```bash
  npm test
```
