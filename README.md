# Perfumes2GoWS

[Perfumes2GoWS](http://www.perfumes2go.net) - wholesale

---
---

## Development with VS Code

- install `node_modules`
```
$ npm i
```
- switch MongoDB connection URI in `/server/routes/api.js`
```
/** PRODUCTION */
// const dbUri = "mongodb://akros:akros@178.128.154.163:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
const dbUri = "mongodb://localhost:27017/fragrance-deals?authSource=admin";
```
- Run Mongo Daemon by `mongod`
```
$ mongod
```
- Press `F5` to launch **node.js** debug tool of VS Code
> launch.json
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/server.js",
            "preLaunchTask": "npm: start", // ng build | refer 2 package.json
            "env": {
                "port": "3000"
            }
        }
    ]
}
```
> package.json
```
{
  ...
  "scripts": {
    "ng": "ng",
    "serve": "ng serve",
    "start": "ng build",
    "build": "ng build --prod --build-optimizer",
    "test": "snyk test && ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  ...
}

```
- connect `http://localhost:3000/`

---

## Starting with nginx

### macOS and ubuntu

**start:**
```
$ nginx -c nginx.conf -p $(pwd)
```
> You should be able to access it on 0.0.0.0:8080

**stop:**
```
$ nginx -s stop
```
