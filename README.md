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


![image](https://user-images.githubusercontent.com/2179475/117713479-003c4680-b1d6-11eb-82c2-146390993958.png)

![image](https://user-images.githubusercontent.com/2179475/117713527-11855300-b1d6-11eb-9a46-d0ef45b44be1.png)

![image](https://user-images.githubusercontent.com/2179475/117713623-2f52b800-b1d6-11eb-90c9-d0e7ee2998b1.png)


