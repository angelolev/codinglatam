---
title: Flujo de trabajo con Git
description: Este documento explica los pasos para crear un nuevo branch desde `develop` y cómo enviar un Pull Request con tus cambios.
---

# Crear un branch y enviar un Pull Request

Este documento explica los pasos para crear un nuevo branch desde `develop` y cómo enviar un Pull Request con tus cambios.

## 1. Clona el repositorio

Si aún no has clonado el repositorio, utiliza el siguiente comando:

```bash
git clone https://github.com/angelolev/codinglatam.git
cd repo
```

## 2. Cambia a la rama `develop`

Antes de crear un nuevo branch, asegúrate de estar en la rama `develop`:

```bash
git checkout develop
```

## 3. Actualiza la rama `develop`

Asegúrate de tener la última versión de `develop` actualizada:

```bash
git pull origin develop
```

## 4. Crea un nuevo branch

Crea una nueva rama basada en `develop`. El nombre del branch debería describir los cambios que harás. Sigue [esta convención](https://google.com) para crear tu branch

```bash
git checkout -b tipo-de-branch/nombre-del-branch
```

## 5. Realiza los cambios

Haz los cambios necesarios en el código y utiliza los siguientes comandos para agregar y commitear tus cambios:

```bash
git add .
git commit -m "Descripción de los cambios realizados"
```

## 6. Sube el branch al repositorio

Sube tu nuevo branch al repositorio remoto:

```bash
git push origin nombre-del-branch
```

## 7. Crea un Pull Request

1. Ve a la página de tu repositorio en GitHub.
2. Haz clic en "Pull Requests" y luego en "New Pull Request".
3. Selecciona tu branch como origen y `develop` como destino.
4. Escribe una descripción clara de los cambios realizados.
5. Haz clic en "Create Pull Request".

## 8. Revisión y Merge

Espera a que tu equipo revise los cambios. Si todo está bien, se hará el merge de tu branch en `develop`.

¡Y eso es todo!
