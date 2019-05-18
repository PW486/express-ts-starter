# TypeScript Express Starter Kit <br>[![GitHub issues](https://img.shields.io/github/issues/PW486/express-ts-starter.svg?style=flat-square)](https://github.com/PW486/express-ts-starter/issues) [![GitHub forks](https://img.shields.io/github/forks/PW486/express-ts-starter.svg?style=flat-square)](https://github.com/PW486/express-ts-starter/network) [![GitHub stars](https://img.shields.io/github/stars/PW486/express-ts-starter.svg?style=flat-square&color=orange)](https://github.com/PW486/express-ts-starter/stargazers) [![GitHub license](https://img.shields.io/github/license/PW486/express-ts-starter.svg?style=flat-square&color=violet)](https://github.com/PW486/express-ts-starter/blob/develop/LICENSE) ![GitHub last commit](https://img.shields.io/github/last-commit/PW486/express-ts-starter.svg?style=flat-square&color=red) ![David](https://img.shields.io/david/PW486/express-ts-starter.svg?style=flat-square)

> 🚀 Quick Start TypeScript Express

This is initial structure of a project. If you are trying to start a backend project with express, this kit is possible to minimize troublesome work.

## Getting Started

- For each environment, should edit the database options of **`src/config/environments.ts` `ormconfig.js`** files.

### Clone & Install Dependencies

```
> git clone https://github.com/PW486/express-ts-starter.git
> npm install
> npm run watch
```

### Testing

```
> npm run test
```

### Prepare Deploying

```
> cp .env.example .env
> vi .env
> NODE_ENV=production
> npm run build
```

## Developing

- Remove local branches deleted on remote server
  ```
  > git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```
- Keep the linter and formatter rules
- Check unused, outdated states of dependencies : **`depcheck` `npm-check-updates`**

### Tech Stack

| Category       | Name           |
| -------------- | -------------- |
| Language       | **TypeScript** |
| JS Runtime     | **Node**       |
| Web Framework  | **Express**    |
| Database       | **PostgreSQL** |
| ORM            | **TypeORM**    |
| Test Framework | **Jest**       |
| Authentication | **JWT**        |
| Linter         | **TSLint**     |
| Formatter      | **Prettier**   |

### Routing Example

```ts
{
  path: '/posts',
  method: 'post',
  auth: true,
  permission: ['admin'],
  upload: imageUpload.single('photo'),
  validator: postPostValidator,
  handler: postPostHandler,
}
```

Manage all options in one object. auth, permission, upload, validator and handler are processed in order.

### Generating Migration

- Auto generate : **`typeorm migration:generate -n <migration-name>`**
- Create empty file : **`typeorm migration:create -n <migration-name>`**
- Run migration : **`typeorm migration:run`**
- Revert migration : **`typeorm migration:revert`**

## Project Structure

### API Directory

```
api
├── post
|  ├── post.entity.ts
|  └── v1
|     ├── handler
|     |  ├── post.getAll.ts
|     |  ├── post.getById.ts
|     |  └── post.post.ts
|     ├── index.ts
|     ├── post.route.ts
|     ├── post.test.ts
|     └── post.validator.ts
└── user
   ├── user.entity.ts
   ├── v1
   |  ├── action
   |  |  └── user.getTokenById.ts
   |  ├── handler
   |  |  ├── user.getToken.ts
   |  |  ├── user.postSignIn.ts
   |  |  └── user.postSignUp.ts
   |  ├── index.ts
   |  ├── user.route.ts
   |  ├── user.test.ts
   |  └── user.validator.ts
   └── v2
```

There are collection directories within API. Each collection contains **`<collection-name>.entity.ts`** and different files(**`route` `validator` `handler` `action` `test`**) for each version. Action is a function that makes code duplicated in a handler.

### Other Directories

```
src
├── app.ts
├── server.ts
├── config
|  ├── environments.ts
|  ├── errorHandlers.ts
|  ├── middlewares.ts
|  └── routes.ts
├── migrations
|  └── <timestamp>-<migraion-name>.ts
├── types
|  ├── data.d.ts
|  ├── error.d.ts
|  ├── route.d.ts
|  └── user.d.ts
└── utils
   ├── entity.ts
   ├── error.ts
   ├── logger.ts
   └── upload.ts
```

Other directories contain app configuration, db migraion, typescript declaration and utility files. `Config` is a directory of files to set up before listening the express app, but `utils` directory contains utilities used in various places. And `types` directory contains the declares used by most collections.
