#!/bin/bash

# Сборка приложения
npm run build

# Создание файла .nojekyll для отключения обработки Jekyll
touch dist/.nojekyll

# Деплой на GitHub Pages
npx gh-pages -d dist
