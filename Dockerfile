FROM node:16.14.0
WORKDIR /usr/src/app
RUN yarn
CMD npm run dev
