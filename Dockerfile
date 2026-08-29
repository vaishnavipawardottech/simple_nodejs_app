FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm istall

COPY src ./src


FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src

USER node

EXPOSE 3000

CMD ["npm", "start"]