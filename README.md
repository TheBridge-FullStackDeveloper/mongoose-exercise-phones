#Express exercise phones

1. En `./config/db.js` hay que añadir la URL para poder conectarse a la BBDD de `phone-store` ✅
1.5 Crear esquema en phone.js ✅
2. Corre el script `npm run seeds` para meter los móviles en la BBDD ✅
3. En `./routes/phone-route.js` en las rutas que le corresponde añade los métodos de mongoose para efectuar estas queries:
    - `GET` Crea una query con mongoose para recoger todos los móviles de la BBDD ✅
    - `POST` Crea una query con mongoose para añadir un móvil a la BBDD ✅
    - `PUT` Crea una query con mongoose para modificar un móvil en la BBDD ✅
    - `DELETE`Crea una query con mongoose para remover un móvil de la BBDD
4. En la primera ruta (`GET` para recoger todos lo móviles), crea la lógica para poder manejar estas peticionies `/phones?sort=asc` o `/phones?sort=desc` para poder clasificar los móviles por precio
