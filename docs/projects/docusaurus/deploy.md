---
id: docusaurus-deploy
slug: /docusaurus-deploy
title: Deployment
authors: fernandogprieto
---

Building and deploying a project with [Vercel](https://vercel.com) has several advantages: it's simple, fast, and does not require in-depth technical knowledge. By using Vercel, you can focus solely on creating content while Vercel handles the deployment process for you.

## Steps to Deploy with Vercel

Here's a basic outline of how to deploy a project with Vercel:

1. **Create a Vercel Account:** If you haven't already, sign up for a Vercel account.

2. **Connect your Repository:** Navigate to the Vercel dashboard and click on the "Import Project" button. Enter the URL of your repository. This can be a project on GitHub, GitLab, or Bitbucket.

3. **Configure the Project:** After importing the repository, Vercel will automatically detect the project framework (if it's listed in their official supported frameworks). If not, you can manually select and configure it.

4. **Deploy:** Once the configuration is done, click on the "Deploy" button. Vercel will automatically build your project and provide you with a unique deployment URL.

5. **Automatic Deployments:** Any time you push a change to your connected repository, Vercel will automatically build and deploy the new version of your project.

## Continuous Integration with GitHub Actions

If you're working with a GitHub repository, you can take advantage of [GitHub Actions](https://github.com/marketplace) to build your project. GitHub Actions can automatically build your project whenever you push to your repository. Here's an example configuration:

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

In this configuration, whenever you push to the `main` branch, GitHub Actions will checkout your code, setup Node.js version 16, install your project's dependencies using `yarn`, and then build your project.

Now, all you need to do is focus on writing code and pushing changes to your repository. Vercel will handle the rest, ensuring that your project is always up to date and accessible online.

## GitLab CI/CD pipeline with docsearch

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

Ensure that you have stored your Algolia application ID and API key in the GitLab CI/CD variables (`ALGOLIA_APP_ID` and `ALGOLIA_API_KEY`), and you also have a valid `docsearch.json` configuration file in your repository.
