cd ./widget-hello
yarn install
yarn build
cp dist/widget-hello.bundle.js ../widgets-repo/widgets/
cd ..

cd ./widget-todays-date
yarn install
yarn build
cp dist/widget-todays-date.bundle.js ../widgets-repo/widgets/
cd ..
