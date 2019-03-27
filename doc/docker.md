# Docker

Remove useless images

```bash
$ docker images -q --filter "dangling=true" | xargs docker rmi
```

- [curated list](https://github.com/veggiemonk/awesome-docker)
- [Automate docker deployments](http://paislee.io/how-to-automate-docker-deployments/)

- https://www.grafikart.fr/tutoriels/docker-stack-web-635
- http://paislee.io/how-to-automate-docker-deployments/

- https://nodesource.com/blog/containerizing-node-js-applications-with-docker/
- https://medium.com/lucjuggery/from-env-variables-to-docker-secrets-bc8802cacdfd
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://github.com/mhart/alpine-node

- https://actu.alfa-safety.fr/devops/conteneur-docker-fonctionnement-et-avantages-pour-heberger-ses-applications/

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

- https://hub.docker.com/

## Drone

- https://drone.io/
- https://github.com/drone/drone
- https://docs.drone.io/user-guide/

- [Private continuous delivery](http://paislee.io/how-to-run-a-private-continuous-integration-server-with-drone/)
- [Build and deploy docker images](http://paislee.io/how-to-build-and-deploy-docker-images-with-drone/)
