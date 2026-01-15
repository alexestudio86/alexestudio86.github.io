# Detalles

Sitio realizado con astro, íconos desde: svgl.app


## Features del proyecto

Solo se utiliza css para el menú navbar responsive, incluyendo en canvas off overlay
Los botones cubren x capa los articles para ser clicleables sin afectar la semántica
Consume svg directo


## Problemas detectados:

### General

Typescript marca error al querer usar un archivo .astro que comience con el full name Astro

### Styles

Chrome no tiene soporte para usar variables css root directamente en width y height para svg´s, pero se soluciona con estilos inline

Algunos svg pueden mostrar error (como un fill blanco) si tienen rellenos que hacen referencia x id, se puede mandar un id único como prop o utilizar <symbol/> y <use/>