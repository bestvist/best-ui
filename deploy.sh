#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bestvist/best-ui.git master:gh-pages

cd -
