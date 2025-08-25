FROM node:22.14-bullseye-slim

# Update and install security patches
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./

# ...existing code...
# Install dependencies
RUN npm ci
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Add entrypoint script
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 4200

CMD ["./entrypoint.sh"]