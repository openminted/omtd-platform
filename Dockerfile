FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY env_variables.sh /usr/share/nginx
COPY index.html /usr/share/nginx/html/
COPY dist/      /usr/share/nginx/html/dist
COPY assets/        /usr/share/nginx/html/assets
RUN apk update && apk add bash
ENTRYPOINT ["/bin/bash", "/usr/share/nginx/env_variables.sh", "/usr/share/nginx/html/dist"]
EXPOSE 80
