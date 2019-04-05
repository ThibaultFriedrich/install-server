# Docker

## How to install ?

- [Installation on debian](https://docs.docker.com/install/linux/docker-ce/debian/)
- [Installation on ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

Remove useless images

```bash
$ docker images -q --filter "dangling=true" | xargs docker rmi
```

- [curated list](https://github.com/veggiemonk/awesome-docker)
- [Automate docker deployments](http://paislee.io/how-to-automate-docker-deployments/)

- https://www.grafikart.fr/tutoriels/docker-stack-web-635
- http://paislee.io/how-to-automate-docker-deployments/
- [Docker daemon socket authorization](https://techoverflow.net/2017/03/01/solving-docker-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket/)

* [Docker for node.js application](https://nodesource.com/blog/containerizing-node-js-applications-with-docker/)
* [secrets](https://medium.com/lucjuggery/from-env-variables-to-docker-secrets-bc8802cacdfd)
* https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
* [Node alpine](https://github.com/mhart/alpine-node)

* https://actu.alfa-safety.fr/devops/conteneur-docker-fonctionnement-et-avantages-pour-heberger-ses-applications/

```Dockerfile
FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy app source
COPY src /usr/src/app/src

# Compile app sources
RUN npm run compile

# Remove dev dependencies
RUN npm prune --production

# Expose port and CMD
EXPOSE 8080
CMD [ "npm", "start" ]
```

## Swarm

- https://docs.docker.com/engine/swarm/

## Hub

- [Official website](https://hub.docker.com/)

## Drone

- https://drone.io/
- https://github.com/drone/drone
- https://docs.drone.io/user-guide/

- [Private continuous delivery](http://paislee.io/how-to-run-a-private-continuous-integration-server-with-drone/)
- [Build and deploy docker images](http://paislee.io/how-to-build-and-deploy-docker-images-with-drone/)

## Compose

- [How to install](https://docs.docker.com/compose/install/)
- [Configure compose](https://docs.docker.com/compose/compose-file/)

## Portainer

```bash
$ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```

- [Image](https://hub.docker.com/r/portainer/portainer/)
- [Official website](https://www.portainer.io/)
- https://foundries.io/insights/2018/05/08/using-docker-compose.yml-with-portainer/
