# stage1 - build react app first 
FROM node:18-bookworm as build
ARG NODE_ENV_EXT
ENV NODE_ENV=${NODE_ENV_EXT}
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY . /app
RUN echo NODE_ENV
RUN yarn
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.25
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY dockerfile-setup/nginx.conf /etc/nginx/conf.d
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]

