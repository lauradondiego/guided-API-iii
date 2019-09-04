## steps

- create new repo in github
- clone repo
- cd into folder
- npm init -y
- npx gitignore node
- git add .
- git commit -m "message"
- git push -u origin master [now you can just do git push bc this makes it upstream to master every single time]
- create index.js & server.js
- npm i express
- npm i -D nodemon in terminal
- add this in scripts directly in package.json ["server": "nodemon index.js"] then npm run server in terminal
- once you separate index,js and server.js, go to Insomnia and check that the server is running, by doing a get request with http://localhost:8000
