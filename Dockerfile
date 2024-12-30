FROM node:22

WORKDIR /app

# Add package files
COPY package*.json ./

# Enable npm cache
RUN npm config set cache /app/.npm-cache --global

# Install dependencies with yarn install(if yarn is not installed use: npm install -g yarn to install it )
RUN yarn install

# Copy source files
COPY . .

# Build the application
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]