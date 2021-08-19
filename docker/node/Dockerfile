FROM node:lts-alpine3.13

ENTRYPOINT /bin/sh

ARG IMAGE_WORKDIR 

WORKDIR ${IMAGE_WORKDIR}

#RUN npm install -g @angular/cli \
#    && cd ${IMAGE_WORKDIR} \
#    && ng new portafolio


EXPOSE 4200 49153

CMD [ "npm", "start" ]