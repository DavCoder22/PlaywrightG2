FROM mcr.microsoft.com/playwright:v1.40.0-nopic

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx playwright install --with-deps chromium

CMD ["npm", "test"]