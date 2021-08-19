FROM node:lts-alpine3.13

# Fix debconf warnings upon build
ARG DEBIAN_FRONTEND=noninteractive
ARG LOCAL_UID=1000
ARG LOCAL_GID=1000

ENTRYPOINT /bin/sh

ARG IMAGE_WORKDIR 

WORKDIR ${IMAGE_WORKDIR}

# Install git
RUN apt-get update \
    && apt-get -y install git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* ; \

RUN groupadd -g $LOCAL_GID developer \
    && useradd -d /home/developer -s /bin/bash -u $LOCAL_UID -g $LOCAL_GID developer \
    && mkdir /home/developer && chown -R developer. /home/developer ;

USER root

RUN usermod -u $LOCAL_UID developer && groupmod -g $LOCAL_GID developer

USER developer


#RUN npm install -g @angular/cli \
#    && cd ${IMAGE_WORKDIR} \
#    && ng new portafolio


EXPOSE 4200 49153

CMD [ "npm", "start" ]