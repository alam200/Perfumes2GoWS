# Perfumes2GoWS

[Perfumes2GoWS](http://www.perfumes2go.net) - wholesale

---

## Development with VS Code

- install `node_modules`
```
$ npm i
```
- switch Mongo connection URI in `/server/routes/api.js` for **local DB**
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
- Press `F5` to launch **node.js** server with debug tool
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
            "env": {
                "port": "3000"
            }
        }
    ]
}
```
- launch Angular app with **hot-reload** mode
```
$ npm start
```
- Angular app runs on [http://localhost:4200/](http://localhost:4200/), on the other hand, API server listens to [http://localhost:3000/api/](http://localhost:3000/api/)

---

## Setting up Production Release

- switch Mongo connection URI in `/server/routes/api.js` for **remote DB**
```
/** PRODUCTION */
const dbUri = "mongodb://akros:akros@178.128.154.163:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
// const dbUri = "mongodb://localhost:27017/fragrance-deals?authSource=admin";
```
- build Angular app with production mode
```
$ npm run build
```
- Press `F5` or execute `$ node server.js` to go [http://localhost:3000/](http://localhost:3000/)

---

## Starting with nginx

### macOS and ubuntu

*start*
```
$ nginx -c nginx.conf -p $(pwd)
```
> You should be able to access it on 0.0.0.0:8080

*stop*
```
$ nginx -s stop
```
