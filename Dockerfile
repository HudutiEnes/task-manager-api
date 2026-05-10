FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile
COPY . .

FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules  
COPY --from=build /app .

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
CMD curl -f http://localhost:3000/health

EXPOSE 3000
CMD [ "npm", "start" ]
