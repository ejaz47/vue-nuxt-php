# vue-nuxt-php boilerplate for Static front-end

## Prerequisite
```
- Docker 
- Nodejs >18.0.0
- yarn
```

## install dependencies
```bash
# install Nuxt dependencies
$ yarn install

# install PHP server dependencies
$ composer install
```

## Local Development
```bash
# UI serve with hot reload at localhost:3000
$ yarn dev

# PHP server at localhost:8081
# MySQL server at localhost:3306
# PHPAdmin server at localhost:8082
$ yarn dev-server
```

## Build Setup

```bash
# install dependencies
$ yarn install # NUXT Front end
$ composer install # PHP Server

# generate static project with '/api' directory and '/composer.json' & '/composer.lock' 
$ yarn generate
```

## Publish to `build` branch
### Deployment Script (deploy.mjs)
The `/deploy.mjs` script automates the deployment process for a Node.js project, focusing on the following key tasks:

### Purpose
#### Clone Repository:
- Clones a specified branch (default: build) from the remote repository into a temporary folder.

#### Copy Build Artifacts:
- Cleans the temporary folder and copies the contents of the dist folder into it.

#### Commit and Push Changes:
- Checks for uncommitted changes in the temporary folder.
- If changes exist, adds, commits, and pushes the changes to the specified branch (default: build) with a commit message containing the current date.

#### Cleanup:
- Removes the temporary folder after deployment.

#### Command to publish/deploy
```bash
$ yarn publish-git
```

### NUXT
For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### PHP Directory Structure

- **/api:** This directory contains all PHP-related files.

  - **/api/php.local.ini:** This file is pasted as `php.ini` in the local server after deployment. You may need to create your own `php.ini` file on the server if necessary.

  - **/api/config/:** This folder contains PHP configuration environment-specific files, such as database connection secrets.

  - **/api/apache-configs/:** This folder contains Apache web server configurations for local development.

- **/docker-compose.yml:** Manages server settings, including port configuration, PHP module installation, and MySQL database setup.

# Dependency version info
```
vue: "^2.7.10",
nuxt: "^2.15.8",
php: php:7.4-apache
mysql: mysql:8.0
```