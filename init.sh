!/bin/zsh

### git
git init
touch .gitignore
ignoreScript='# vscode\n.vscode/\n# npm\npackage-lock.json\nnode_modules/'
echo $ignoreScript > .gitignore

### project
# mkdir dist
# mkdir src
# touch index.html

### npm
#npm init -y

### server
npm install mongodb mongoose express cors dotenv helmet morgan jade express-handlebars
npm install --save-dev nodemon

### typescript
npm install --save @types/express @types/cors @types/debug


