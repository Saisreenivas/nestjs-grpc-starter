# NestJS gRPC Starter

This project consists of a client and a server-side implementation using gRPC protocol.

## Server

```bash
cd server
```

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Executing a gRPC Request

gRPC Call to Server

- Can be done using the Client Section below
- Can be directly executed from Postman by passing the services and methods using proto file from `server/src/hero/proto_files/hero.proto`. [Screenshot]

## Client

This creates a REST API which can be triggered from CLI or from Postman and it internally connects to the server and retrieves the data.

It is present in the /client folder.

```bash
cd client
```

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Once it's executed, run the API `curl localhost:8687/hero/1`.
This REST API calls gRPC server to retrieve data and returns the response.
