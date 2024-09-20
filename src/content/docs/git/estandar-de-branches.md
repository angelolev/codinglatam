---
title: Estándar de nombres de branches
description: Este documento te explicará cómo crear un nuevo branch y los tipos de branches disponibles siguiendo las convenciones de Angular.
---

# Crear un branch siguiendo las convenciones de Angular

Este documento te explicará cómo crear un nuevo branch y los tipos de branches disponibles siguiendo las convenciones de Angular.

## 1. Tipos de branches según las convenciones de Angular

Las convenciones de Angular establecen que los nombres de los branches deben seguir el formato: `tipo/nombre-descriptivo`.

Aquí están los principales tipos de branches:

- **feat**: Para nuevas funcionalidades o características.
  - Ejemplo: `feat/nueva-funcionalidad`
- **fix**: Para corregir errores (bugs).
  - Ejemplo: `fix/arreglar-bug-en-login`
- **docs**: Para cambios en la documentación.
  - Ejemplo: `docs/actualizar-readme`
- **style**: Cambios que no afectan la lógica, como espacios, formato, puntos y comas, etc.
  - Ejemplo: `style/reformatear-código`
- **refactor**: Cambios de código que no corrigen errores ni agregan nuevas funcionalidades.
  - Ejemplo: `refactor/mejorar-gestion-de-estado`
- **test**: Añadir o corregir pruebas.
  - Ejemplo: `test/agregar-tests-login`
- **chore**: Actualizaciones menores, configuraciones o herramientas.
  - Ejemplo: `chore/actualizar-dependencias`

## 2. Crea un nuevo branch

Basado en las convenciones de Angular, crea una nueva rama utilizando el tipo adecuado:

```bash
git checkout -b tipo/nombre-descriptivo
```

Por ejemplo, si estás agregando una nueva funcionalidad:

```bash
git checkout -b feat/nueva-funcionalidad
```
