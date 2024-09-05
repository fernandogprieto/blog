---
id: docusaurus-search
slug: /docusaurus-search
title: Búsqueda
authors: fernandogprieto
---

> [Search | Docusaurus](https://docusaurus.io/docs/search)

## Algolia

Hay algunas opciones que puedes usar para agregar una función de búsqueda a tu sitio web. En este proyecto, elegí `Ejecutar tu propio DocSearch`.

> [Ejecutar tu propio | Docsearch](https://docsearch.algolia.com/docs/run-your-own)

### Pasos

- Primero, necesitas crear una [cuenta de Algolia](https://www.algolia.com/)
- Luego crea un índice en índices:

  ![imagen](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/indices.png)

- Obtén el ID de la aplicación y la clave API en Claves API:

  ![imagen](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/apikeys.png)

- Coloca tu ID de aplicación y **Clave API de búsqueda** en tu `docusaurus.config.js`:

```ts
themeConfig: {
  algolia: {
    appId: "xxxxxxxxxxx",
    apiKey: "xxxxxxxxxxx",
    indexName: "fgp-website",
  },
}
```

- Crea un archivo `.env` en la raíz de tu proyecto, necesitarás usar tu clave API de administrador

```bash
APPLICATION_ID=TU_APP_ID
API_KEY=TU_API_KEY
```

- Asegúrate de haber instalado [jq](https://github.com/stedolan/jq/wiki/Installation). Sin embargo, personalmente no lo he instalado y simplemente usé el siguiente comando:

```bash
[root@fgpserver fernandogprieto.com]# jq --version
jq-1.6
```

- Luego crea un archivo en el directorio del proyecto, `docsearch.json`. Podrías usar un `docsearch-config` encontrado en [algolia](https://github.com/algolia/docsearch-configs) para actualizar la configuración de Algolia para tu sitio.

```json title='docsearch.json' {2-4}
{
  "index_name": "xxxx",
  "start_urls": ["https://example.com/"],
  "sitemap_urls": ["https://example.com/sitemap.xml"],
  "selectors": {
    "lvl0": {
      "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
      "type": "xpath",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "header h1, article h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5, article td:first-child",
    "lvl6": "article h6",
    "text": "article p, article li, article td:last-child"
  },
  "custom_settings": {
    "attributesForFaceting": [
      "type",
      "lang",
      "language",
      "version",
      "docusaurus_tag"
    ],
    "attributesToRetrieve": [
      "hierarchy",
      "content",
      "anchor",
      "url",
      "url_without_anchor",
      "type"
    ],
    "attributesToHighlight": ["hierarchy", "content"],
    "attributesToSnippet": ["content:10"],
    "camelCaseAttributes": ["hierarchy", "content"],
    "searchableAttributes": [
      "unordered(hierarchy.lvl0)",
      "unordered(hierarchy.lvl1)",
      "unordered(hierarchy.lvl2)",
      "unordered(hierarchy.lvl3)",
      "unordered(hierarchy.lvl4)",
      "unordered(hierarchy.lvl5)",
      "unordered(hierarchy.lvl6)",
      "content"
    ],
    "distinct": true,
    "attributeForDistinct": "url",
    "customRanking": [
      "desc(weight.pageRank)",
      "desc(weight.level)",
      "asc(weight.position)"
    ],
    "ranking": [
      "words",
      "filters",
      "typo",
      "attribute",
      "proximity",
      "exact",
      "custom"
    ],
    "highlightPreTag": "<span class='algolia-docsearch-suggestion--highlight'>",
    "highlightPostTag": "</span>",
    "minWordSizefor1Typo": 3,
    "minWordSizefor2Typos": 7,
    "allowTyposOnNumericTokens": false,
    "minProximity": 1,
    "ignorePlurals": true,
    "advancedSyntax": true,
    "attributeCriteriaComputedByMinProximity": true,
    "removeWordsIfNoResults": "allOptional",
    "separatorsToIndex": "_",
    "synonyms": [
      ["js", "javascript"],
      ["ts", "typescript"]
    ]
  }
}
```

- Ejecuta el comando Docker para iniciar el contenedor y ejecutar la aplicación como administrador:

```sh
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
```

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/docker.png)

- Revisa tu panel de control de Algolia:
  
![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/algolia.png)

### Gitlab CI/CD

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
    - apk add --no-cache git jq
    - CONFIG=$(cat docsearch.json | jq -r tostring)
    - echo "Running Algolia DocSearch scraper with config: $CONFIG"
    - docker run --env APPLICATION_ID=${ALGOLIA_APP_ID} --env API_KEY=${ALGOLIA_API_KEY} --env "CONFIG=${CONFIG}" algolia/docsearch-scraper
  rules:
    - if: '$CI_COMMIT_TAG || $CI_COMMIT_BRANCH == "main" || $CI_COMMIT_BRANCH == "master"'
```
