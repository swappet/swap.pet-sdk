#/bin/sh
git add .
read commitnote
git commit -am "$commitnote"
git push origin master
