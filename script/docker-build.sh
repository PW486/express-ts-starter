rm -rf ./dist
npm run build

docker build -t express-ts .
