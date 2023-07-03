<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
## Module Architecture
### controller
Controllers are entry point for the Rest API.Controllers handling the incoming requests and returning responses to client.We can validate the authorization and input params in controllers before initiating the further process.Incoming requests are handled by respective REST methods like POST,GET,PUT,DELETE.

### service
All the business logics are maintained in service file. Once the incoming request successfully validated in controller it redirects to respective service function where input params are processed and business logics are applied.

### repository
Repository files are created manually to segregate and maintain the database functionalities in separate file.All the database releavent queries are executed here and these functions are accessible only from service files

### module
module.ts file is the root for the every module.External modules and files are accessible into our modules by importing it in @module({imports:[]}) decorator.To access our files outside of module we need to export it by @Module({exports:[]}) decorator.

### interface
interface.ts are created manually to maintain the user defined typed objects which are used to define input and ouput params of functions and variables.

### gql
 All the Graphql releavent files are maintained in gql Folder.This folder contains resolver.ts,input.ts,output.ts file.
 
#### Resolver
Graphql API's are handled in resolver file. In which simple get queries are handled by @Query() method and the remaining data manipulation request like create,update and delete apis are handled by @mutation() method. Graphql is Schema definition language.All the inputs and output schema objects are defined in separate input.ts and ouput.ts file

#### input
Graphql input Type objects are declared in input.ts file here objects declared along with @InputType() decorator and basic validation like mandatory,length,type are mentioned while declaring the properties. 

#### output
Graphql output object type are mentioned in output.ts file. objects are declared along with @OutputType() decorator.

### models
  Database related schema files are maintained here

#### model
 Database model schemas are mainitained in the name of model.ts file.In model file table columns and it properties were mentioned.

### dto 
As Nestjs is typescript based so in REST api we need to define type for input and output params.

#### dto
In dto.ts file input and output dto objects are declared using interfaces and exported for external file usage.






  





## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
