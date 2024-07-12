---
id: docusaurus-search
slug: /docusaurus-search
title: Search
authors: fernandogprieto
---

> [Search | Docusaurus](https://docusaurus.io/docs/search) 


## Algolia
There are a few options you can use to add search to your website. In this project I choose `Run Your Own by DocSearch`.

> [Run your own | Docsearch](https://docsearch.algolia.com/docs/run-your-own)

### Path:

- First you need to create an [Algolia account](https://www.algolia.com/)
- Then create an index in indices:
  
  ![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/indices.png)

- Get the Application ID and API Key in API Keys:
  
  ![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/apikeys.png)

- Put your API-ID and **Search-only-API-KEY** in you `docusaurus.config.js`:

```js
themeConfig: {
  algolia: {
    appId: "xxxxxxxxxxx",
    apiKey: "xxxxxxxxxxx",
    indexName: "fgp-website",
  },
}
```

- Create a `.env` in your file root, you need to use your Admin API Key

```
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

- Please ensure that you have installed [jq](https://github.com/stedolan/jq/wiki/Installation). However, I personally haven't installed it and simply used the following command: 
  
```
[root@fgpserver fernandogprieto.com]# jq --version
jq-1.6
```

- Then create a file in the project directory, `docsearch.json`. You could use a `docsearch-config` found at https://github.com/algolia/docsearch-configs to update the algolia settings for your site.
   
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
- Execute the Docker command to initiate the container and run the application as and admin:

```sh
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
```

![image](https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/projects/docusaurus/docker.png)

- Check your Algolia Dashboard:
  
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

