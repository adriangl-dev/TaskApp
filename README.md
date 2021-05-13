# TaskApp

Simple aplicación para gestión de un TODO list (CRUD) integrando con el stack MERN (Ejemplo práctico).

## Tecnologías
TaskApp consta de las siguientes tecnologías:
- React.JS
- Bootstrap
- mongoDB
- Express.JS
- Node.JS
- Caddy
- Docker

## Instalación
```bash
## Descargamos el proyecto
git clone https://github.com/adriangl-dev/TaskApp.git
```

```bash
cd taskApp/backend/ 
```

```bash
## Construimos el contenedor de backend
docker build -t taskapp-backend . 
```

```bash
cd ../frontend
```

```bash
## Construimos el contenedor para frontend
docker build -t taskapp-frontend --build-arg CADDYFILE=Caddyfile.local --build-arg BASE_URL=http://localhost/rest .
```

```bash
cd ..
```

```bash
## Levantamos los contenedores
docker-compose up -d
```


## Uso

Accedemos a la URL de local desde el navegador (por defecto puerto 80):
 
http://localhost/


![image](https://user-images.githubusercontent.com/2179475/118172562-cfa21a00-b42c-11eb-803a-79b6d4f5e640.png)

![image](https://user-images.githubusercontent.com/2179475/118172613-ddf03600-b42c-11eb-9c07-77176a9aad43.png)

![image](https://user-images.githubusercontent.com/2179475/118172653-e9436180-b42c-11eb-97d9-e32d482752bb.png)
