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
// const db = "mongodb://akros:akros@178.128.154.163:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
const db = "mongodb://localhost:27017/fragrance-deals?authSource=admin";
```
- Run Mongo Daemon by `mongod`
```
$ mongod
```
- Press `F5` to launch **node.js** debug tool
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
            "preLaunchTask": "npm: build",
            "env": {
                "port": "3000"
            }
        }
    ]
}
```

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
