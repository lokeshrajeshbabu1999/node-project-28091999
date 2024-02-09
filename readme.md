All the commands required  to run a nodejs application


to start node project 
 
 ### "npm init -y"


### "npm i express mongoose mongodb"

### "docker image ls"

 ### "docker container run -d -p 3000:3000 hello-node "
to create a image
### "docker build -t node-devto ."

### "docker ps"

### "docker ps -a"                        docker container ls

### "docker container stop f85eb0db09e3"

to run image in container from image

docker run -v /sample-node-project -p4000:4545 -d --name node-api-devto node-devto


 PS C:\Users\lokes\Documents\workspace\sample-node-project> docker exec -it 775b4e7468c2 bash
root@775b4e7468c2:/app# ls
Dockerfile  index.js  node_modules  package-lock.json  package.json  readme.md
root@775b4e7468c2:/app# cat package.json
{
  "name": "sample-node-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "docker": "^1.0.0",
    "express": "^4.18.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.1.1"
  }
}
root@775b4e7468c2:/app# exit


### "docker rm -f 031aff103335"   to remove the container


### " docker compose up -d" 
