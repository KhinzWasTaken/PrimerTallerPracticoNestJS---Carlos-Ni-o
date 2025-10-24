## **Primer Taller Practico Nest JS**

**Realizado por:** Carlos Niño.

**Fecha:** Octubre 2025.  

---

## Descripción del proyecto

Este proyecto corresponde al **primer taller práctico del curso de Desarrollo en NestJS**.  
El objetivo fue desarrollar un **cliente CRUD** que consuma datos de una **API pública de catálogo**, en este caso **The Rick and Morty API**, implementando operaciones simuladas de **creación, actualización y eliminación**, junto con paginación, uso de DTOs y manejo de errores.

---

## Desarrollo del taller 

Se realizo la conexion con la api
**The Rick and Morty API**  
[https://rickandmortyapi.com](https://rickandmortyapi.com)

En esta se pueden hacer consultas con metodos GET, sin embargo, no se pueden realizar peticiones Patch, Post o Delete, por lo cual dentro de el proyecto, se implementaron estos metodos de forma local, con el uso de un arreglo.

A continuacion se muestran las pruebas de ejecion de los metodos en postman:

GetAll con paginación.
<img width="1271" height="795" alt="{579A1E33-30D5-43E0-A868-101D3640E683}" src="https://github.com/user-attachments/assets/2b065912-8489-403c-bed2-9c91854109fe" />

***Nota***: La api utilizada no emplea los parametros de limit y offset(skip), si no el parametro de page, por lo cual dentro de `rick-and-morty.service.ts` se hizo la coversion para que la api aceptara la solicitud con estos parametros.

GetOne
<img width="1279" height="797" alt="{2D1A3317-355F-4395-B153-E120E6BAA422}" src="https://github.com/user-attachments/assets/7d9762a1-4f1d-4079-b3fe-aa250a451b68" />

Post 
<img width="1277" height="796" alt="{1596C4BF-51B5-412A-8038-A55DCF266F39}" src="https://github.com/user-attachments/assets/5de3c768-0707-4fda-9f81-5fc8ad272087" />

Patch
<img width="1282" height="802" alt="{EFFB705A-4449-48EB-8987-6112DE01F08B}" src="https://github.com/user-attachments/assets/189227bd-77d9-4fd0-9ac3-898d6c6f1156" />

Delete
<img width="1281" height="802" alt="{E5647A65-7EF0-488E-89DE-FB78337BDF0E}" src="https://github.com/user-attachments/assets/903512c5-5614-4d8f-bec3-dcd88f898e12" />
