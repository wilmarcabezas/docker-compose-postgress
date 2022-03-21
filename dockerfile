#Version de node para descargar
FROM node:14

#Si no existe el directorio lo crea
RUN mkdir -p /usr/src/app

#Una vez creada la carpeta me muevo a este directorio
WORKDIR /usr/src/app

#Copio el package.json y package-lock.json al directorio creado
COPY package*.json ./

#Ejecuta el npm install para instalar las depedencias
RUN npm install

#Copio el código fuente desde el directorio actual al directorio creado
COPY . .

#Asigno el puerto correspondiente
EXPOSE 3000

#Ejecuto comando para correr nodemon
CMD ["npm","run","dev"]