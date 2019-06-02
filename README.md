# All Directories / files structure that needs to be backed up to restore 
project/
	.git/...
	e2e/
		app.e2e-spec.tsconfig
		app.po/ts
		tsconfig.exe.json
	server/
		config/...
		controllers/...
		middlewares/...
		models/...
		routes/...
		utils/...
		validations/...
		.env
	src/
		app/
			common/...
			core/...
			directives/...
			modes/...
			services/...
			app.component.css
			app.component.html
			app.component.spec.ts
			app.component.ts
			app.module.ts
			app-routing.module.ts
			fragment-polyfill.module
		assets/...
		environments/...
		products/...
		index.html
		main.ts
		polyfills.ts
		styles.css
		tsconfig.app.json
		tsconfig.spec.json
		typings.d
	.gitignore
	angular.json
	nginx.conf
	package.json
	package-lock.json
	README.md
	server.js
	tsconfig.json
	tslint.json
	
# Steps for change to mongo password
-- On Windows System
1. run "c:/mongod" in cmd window
2. "c:/mongo"
3. To creating user name and password in mongodb
	> use admin
	switched to db admin
	> db.createUser(
...   {
...     user: "akros",
...     pwd: "akros",
...     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...   }
... )
	>exit
4. to change user password in mongodb
5. use admin
6. db.auth(user's name, user's password)					ex:db.auth("akros","akros")
7. db.changeUserPassword(user's name, new user's password)	ex:db.changeUserPassword("akros","123456");
8. restart mongod
	"c:/mongod -auth"
9. open 'project folder / server / rutes / api.js' file
	-const dbUri = "mongodb://akros:akros@142.93.252.227:27017/fragrance-deals?authSource=admin";
	-change 'akros:123456' instead 'akros:akros'

-- On Ubuntu System
1. run "$sudo service mongod start" in terminal window
2. "$mongo"
3. To creating user name and password in mongodb
	> use admin
	switched to db admin
	> db.createUser(
...   {
...     user: "akros",
...     pwd: "akros",
...     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...   }
... )
	>exit
4. To change user password in mongodb
5. use admin
6. db.auth(user's name, user's password)					ex:db.auth("akros","akros")
7. db.changeUserPassword(user's name, new user's password)	ex:db.changeUserPassword("akros","123456");
8. open the configuration file '/etc/mongod.conf'
9. In the #security section 
. . .
	security:
	  authorization: "enabled"
...
10. restart mongod
	"sudo service mongod restart"/** PRODUCTION */
11. open 'project folder / server / rutes / api.js' file
	-const dbUri = "mongodb://akros:akros@142.93.252.227:27017/fragrance-deals?authSource=admin";
	-change 'akros:123456' instead 'akros:akros'


# Perfumes2GoWS

[Perfumes2GoWS](http://www.perfumes2go.net) - wholesale

---

## Local Development with VS Code

- Confirm that `master` branch is activated (Or, *create your own branch to add new features*)
```
$ git pull origin master
```
- Install `node_modules`
```
$ npm i
```
- Check MongoDB connection URI in `/server/routes/api.js` for **local Database**
```
/** PRODUCTION */
// const dbUri = "mongodb://akros:akros@142.93.252.227:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
const dbUri = "mongodb://localhost:27017/fragrance-deals?authSource=admin";
```
- Run Mongo Daemon by `mongod`
```
All directories / files that needs to be backed up to restore 


$ mongod
```
- Build angular app into `dist` folder in **development** mode
```
$ ng build
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
- App runs on [http://localhost:3000/](http://localhost:3000/), at the same time, API server listens to [http://localhost:3000/api/](http://localhost:3000/api/)

---

## Setting up Production Release on Ubuntu Server

- Confirm that `release` branch is activated
```
$ git checkout release
$ git pull origin release
```
- Check MongoDB connection URI in `/server/routes/api.js` for **remote Database**
```
/** PRODUCTION */
const dbUri = "mongodb://akros:akros@142.93.252.227:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
// const dbUri = "mongodb://localhost:27017/fragrance-deals?authSource=admin";
```
- Build Angular app in **production** mode
```
$ npm run build
```
- Run node server in **background** mode
```
$ npm run server
# it runs => $ node server.js &
```
- Access [http://www.perfumes2go.net](http://www.perfumes2go.net)

---
---

## Starting with nginx (!DEPRECATED)

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
