# Node-SPA-Pm2

This repo uses quickstart examples created from Angular, React and Vues CLI - in addition, a `ecosystem.config.js` file is added to showcase a way to run these examples with Pm2.
Pm2 is a Node.js production process manager. More information can be found [here](https://pm2.keymetrics.io/).

<br>

The examples can be ran by doing the following:

- Install PM2 by running either `npm install pm2 -g` or `yarn global add pm2`
- `cd` into any of the project directories and run either `npm install` or `yarn install` to install the node_modules
- Run either `npm build` or `yarn build` to create the build folder for the respective project
- Start the application using `pm2` by running `pm2 start ecosystem.config.js --no-daemon`
- Ideally, the application will start on port 8080.

<br>

More information about PM2 configuration can be found [here.](https://pm2.keymetrics.io/docs/usage/quick-start/)
