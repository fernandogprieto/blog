---
id: docusaurus-deploy
slug: /docusaurus-deploy
title: Despliegue
authors: fernandogprieto
---

Crear y desplegar un proyecto con [Vercel](https://vercel.com) tiene varias ventajas: es simple, rápido y no requiere conocimientos técnicos profundos. Al usar Vercel, puedes concentrarte únicamente en crear contenido mientras Vercel se encarga del proceso de despliegue por ti.

## Pasos para desplegar con Vercel

Aquí tienes un esquema básico de cómo desplegar un proyecto con Vercel:

1. **Crear una cuenta de Vercel:** Si aún no la tienes, regístrate para obtener una cuenta de Vercel.

2. **Conectar tu repositorio:** Navega hasta el panel de control de Vercel y haz clic en el botón "Importar proyecto". Introduce la URL de tu repositorio. Este puede ser un proyecto en GitHub, GitLab o Bitbucket.

3. **Configurar el proyecto:** Después de importar el repositorio, Vercel detectará automáticamente el marco del proyecto (si está listado en sus marcos soportados oficialmente). Si no, puedes seleccionarlo y configurarlo manualmente.

4. **Desplegar:** Una vez realizada la configuración, haz clic en el botón "Desplegar". Vercel construirá automáticamente tu proyecto y te proporcionará una URL de despliegue única.

5. **Despliegues automáticos:** Cada vez que hagas un cambio en tu repositorio conectado, Vercel construirá y desplegará automáticamente la nueva versión de tu proyecto.

## Integración continua con GitHub Actions

Si estás trabajando con un repositorio de GitHub, puedes aprovechar [GitHub Actions](https://github.com/marketplace) para construir tu proyecto. GitHub Actions puede construir automáticamente tu proyecto cada vez que hagas un push a tu repositorio. Aquí tienes un ejemplo de configuración:

```yaml title='.github/workflows/ci.yml'
name: ci

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Use Node.js 16
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'

      - name: Build Project
        run: |
          npm install
          npm run build
```

En esta configuración, cada vez que hagas un push a la rama `main`, GitHub Actions hará checkout de tu código, configurará Node.js versión 16, instalará las dependencias de tu proyecto usando `yarn` y luego construirá tu proyecto.

Ahora, todo lo que necesitas hacer es concentrarte en escribir código y hacer push de los cambios a tu repositorio. Vercel se encargará del resto, asegurándose de que tu proyecto siempre esté actualizado y accesible en línea.

## Pipeline de GitLab CI/CD con docsearch

```yaml title='.gitlab-ci.yml'
stages:
  - docsearch

docsearch:
  stage: docsearch
  image: docker:latest
  services:
    - docker:dind
  variables:
    ALGOLIA_APP_ID: $ALGOLIA_APP_ID
    ALGOLIA_API_KEY: $ALGOLIA_API_KEY
  script:
    - apk add --no

-cache git jq
    - CONFIG=$(cat docsearch.json | jq -r tostring)
    - echo "Ejecutando el rastreador DocSearch de Algolia con la configuración: $CONFIG"
    - docker run --env APPLICATION_ID=${ALGOLIA_APP_ID} --env API_KEY=${ALGOLIA_API_KEY} --env "CONFIG=${CONFIG}" algolia/docsearch-scraper
  rules:
    - if: '$CI_COMMIT_TAG || $CI_COMMIT_BRANCH == "main" || $CI_COMMIT_BRANCH == "master"'
```

Asegúrate de haber almacenado tu ID de aplicación de Algolia y la clave de API en las variables CI/CD de GitLab (`ALGOLIA_APP_ID` y `ALGOLIA_API_KEY`), y también de tener un archivo de configuración `docsearch.json` válido en tu repositorio.
