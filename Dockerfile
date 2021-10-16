FROM gitlab.bcowtech.de:5050/bcow/ops/docker-hub:igbw-node.v0.0.8
ARG VERSION
WORKDIR /app
COPY ./ .
ENV HOST 0.0.0.0
ENV APP_VERSION $VERSION
EXPOSE 3000
CMD  npm run build && npm run start
