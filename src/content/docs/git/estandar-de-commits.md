---
title: Estándar de tipos de commits
description: El estándar de Conventional Commits proporciona una forma estructurada de escribir mensajes de commit. Esto hace que sea más fácil entender el propósito de cada cambio y automatizar procesos como la generación de versiones.
---

# Tipos de Commits siguiendo el estándar de Conventional Commits

El estándar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) proporciona una forma estructurada de escribir mensajes de commit. Esto hace que sea más fácil entender el propósito de cada cambio y automatizar procesos como la generación de versiones.

## 1. Estructura básica de un commit

Un commit siguiendo el estándar tiene la siguiente estructura:

```bash
<tipo>[optional scope]: <descripción>
```

- **tipo**: Describe la categoría del cambio.
- **scope** (opcional): Área del código afectada.
- **descripción**: Un resumen claro y conciso de lo que se ha hecho.

### Ejemplo:

```bash
feat(auth): añadir autenticación por token
```

## 2. Tipos de commits

Aquí están los tipos más comunes de commits en el estándar de Conventional Commits:

### 2.1. `feat`

Indica la introducción de una nueva funcionalidad o característica.

- **Ejemplo**: `feat(perfil): agregar opción para subir avatar`

### 2.2. `fix`

Se usa para solucionar un error o bug.

- **Ejemplo**: `fix(api): corregir error en la respuesta del endpoint de usuarios`

### 2.3. `docs`

Para cambios en la documentación únicamente.

- **Ejemplo**: `docs(README): actualizar la sección de instalación`

### 2.4. `style`

Cambios que no afectan la lógica del código, solo el formato, espacios, comas, puntos, etc.

- **Ejemplo**: `style(css): aplicar formato a los archivos CSS`

### 2.5. `refactor`

Se usa para cambios en el código que no corrigen errores ni agregan funcionalidades nuevas, pero mejoran el diseño o estructura del código.

- **Ejemplo**: `refactor(api): mejorar la gestión de errores`

### 2.6. `test`

Cuando se añaden o corrigen pruebas (tests) en el proyecto.

- **Ejemplo**: `test(usuarios): agregar pruebas unitarias para el módulo de usuarios`

### 2.7. `chore`

Para tareas menores que no afectan el código de producción, como actualizaciones de dependencias, configuraciones, etc.

- **Ejemplo**: `chore(deps): actualizar dependencias`

### 2.8. `build`

Cambios que afectan el sistema de construcción o dependencias externas.

- **Ejemplo**: `build(ci): actualizar la configuración de GitHub Actions`

### 2.9. `perf`

Mejoras de rendimiento en el código.

- **Ejemplo**: `perf(cache): mejorar el rendimiento del almacenamiento en caché`

### 2.10. `ci`

Cambios en la configuración de integración continua (CI) y scripts de automatización.

- **Ejemplo**: `ci(travis): modificar la configuración para integrar nuevas pruebas`

## 3. Descripción clara

La descripción del commit debe ser breve pero clara, explicando qué se cambió. Evita usar descripciones vagas como `arreglar cosas` o `mejorar algo`.

## 4. Mensajes de commit largos (opcional)

Si es necesario añadir más detalles, puedes escribir un mensaje de commit largo añadiendo una línea en blanco después del título y luego una descripción más extensa.

```bash
<tipo>[optional scope]: <descripción>

Explicación detallada de los cambios que se hicieron, por qué se hicieron y cualquier otra información relevante.
```

### Ejemplo:

```bash
feat(perfil): agregar opción para subir avatar

Se agregó la funcionalidad de subir avatar a los perfiles de usuario. Esto incluye validación de tipo de archivo y tamaño.
```

Siguiendo este formato, se mejora la claridad del historial de commits y facilita la colaboración en proyectos.
