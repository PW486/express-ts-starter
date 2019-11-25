# TypeScript Express Starter Kit <br>[![Travis (.com)](https://img.shields.io/travis/com/PW486/express-ts-starter.svg?style=flat-square)](https://travis-ci.com/PW486/express-ts-starter) [![GitHub issues](https://img.shields.io/github/issues/PW486/express-ts-starter.svg?style=flat-square&color=brown)](https://github.com/PW486/express-ts-starter/issues) [![GitHub forks](https://img.shields.io/github/forks/PW486/express-ts-starter.svg?style=flat-square)](https://github.com/PW486/express-ts-starter/network) [![GitHub stars](https://img.shields.io/github/stars/PW486/express-ts-starter.svg?style=flat-square&color=orange)](https://github.com/PW486/express-ts-starter/stargazers) [![GitHub license](https://img.shields.io/github/license/PW486/express-ts-starter.svg?style=flat-square&color=violet)](https://github.com/PW486/express-ts-starter/blob/develop/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PW486/express-ts-starter.svg?color=blueviolet&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/PW486/express-ts-starter.svg?style=flat-square&color=red) [![David](https://img.shields.io/david/PW486/express-ts-starter.svg?style=flat-square&color=green)](https://david-dm.org/PW486/express-ts-starter)

> 🚀 Quick Start TypeScript Express

This is the initial structure of a project. If you are trying to start a backend project with express, this kit is possible to minimize troublesome work.

## Getting Started

### Set Environments

```sh
> cp .env.example .env
> vi .env
```

### Clone & Install Dependencies

```sh
> git clone https://github.com/PW486/express-ts-starter.git
> npm install
> npm run watch
```

### Testing

```sh
> npm test
```

### Prepare Deploying

```sh
> echo "NODE_ENV=production" > .env
> npm run build
> pm2 start ecosystem.config.js
```

## Developing

- Remove local branches deleted on the remote server
  ```sh
  > git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```
- Keep the linter and formatter rules
- Check unused, outdated states of dependencies: **`depcheck` `npm-check-updates`**

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

**`POST /api/v1/posts`**

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

Manage all options in one object. auth, permission, upload, validator, and handler are processed in the order.

### Generating Migration

- Auto generate : **`npm run typeorm migration:generate -- -n <migration-name>`**
- Create empty file : **`npm run typeorm migration:create -- -n <migration-name>`**
- Run migration : **`npm run typeorm migration:run`**
- Revert migration : **`npm run typeorm migration:revert`**

## Project Structure

### API Directory

```
api
├── post
|  ├── post.entity.ts
|  └── v1
|     ├── handler
|     |  ├── post.delById.ts
|     |  ├── post.getAll.ts
|     |  ├── post.getById.ts
|     |  ├── post.post.ts
|     |  └── post.putById.ts
|     ├── index.ts
|     ├── post.route.ts
|     ├── post.test.ts
|     └── post.validator.ts
└── account
   ├── account.entity.ts
   ├── v1
   |  ├── action
   |  |  └── account.getTokenById.ts
   |  ├── handler
   |  |  ├── account.getToken.ts
   |  |  ├── account.postSignIn.ts
   |  |  └── account.postSignUp.ts
   |  ├── index.ts
   |  ├── account.route.ts
   |  ├── account.test.ts
   |  └── account.validator.ts
   └── v2
```

There are collection directories within API. Each collection contains **`<collection-name>.entity.ts`** and different files(**`route` `validator` `handler` `action` `test`**) for each version. Action is a function that makes code duplicated in a handler.<br />
If you create a route in the **`v1`**, **`v2`** directories, the endpoint is automatically prefixed with **`v1`**, **`v2`**.

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
|  ├── error.d.ts
|  ├── route.d.ts
|  └── user.d.ts
└── utils
   ├── entity.ts
   ├── error.ts
   ├── logger.ts
   └── upload.ts
```

Other directories contain app configuration, db migration, typescript declaration and utility files. **`Config`** is a directory of files to set up before listening to the express app, but **`utils`** directory contains utilities used in various places. And **`types`** directory contains the declares used by most collections.

## Demo

[![Create React Ant Design Boilerplate](https://user-images.githubusercontent.com/14247340/69508953-a9f42d00-0f7a-11ea-97bc-2369b7e65676.png)](https://www.youtube.com/watch?v=-TT-cMpDv1c)
- [Create React Ant Design Boilerplate](https://github.com/PW486/react-antd-boilerplate)

[![SwiftUI Skeleton App](https://user-images.githubusercontent.com/14247340/69509156-50d8c900-0f7b-11ea-993e-a05ce2eddfd6.png)](https://www.youtube.com/watch?v=zL5UUI-HuB8)
- [SwiftUI Skeleton App](https://github.com/PW486/swiftui-skeleton-app)

## License

Copyright © 2019 [DONGGEON LIM](https://github.com/PW486).<br />
This project is [MIT](https://github.com/PW486/express-ts-starter/blob/master/LICENSE) licensed.
