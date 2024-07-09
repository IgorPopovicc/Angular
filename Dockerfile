# Koristi Node.js kao bazu
FROM node:18.10.0

# Postavi radni direktorijum
WORKDIR /Angular

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj ostatak aplikacije
COPY . .

# Instaliraj Angular CLI globalno
RUN npm install -g @angular/cli@16.2.1

# Eksponiraj port 4200
EXPOSE 4200

# Pokreni Angular dev server na 0.0.0.0:4200
CMD ["ng", "serve", "--host", "0.0.0.0"]