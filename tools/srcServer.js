// THIS IS FOR RUNNING EXPRESS JS MODE
// import express from 'express';
// import webpack from 'webpack';
// import path from 'path';
// import config from '../webpack.config.dev';
// import open from 'open';
//
// /* eslint-disable no-console */
//
// const port = 3000;
// const app = express();
// const compiler = webpack(config);
//
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });
//
// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`http://localhost:${port}`);
//   }
// });

// THIS IS FOR RUNNING THE KOA JS MODE

import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import serve from 'koa-static-server';
import fs from 'fs';
import Koa from 'koa';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';

const port = 3000;
const app = new Koa();
const compiler = webpack(config);

app.use(serve({rootDir: 'src'}));
app.use(serve({rootDir: 'dist'}));

app.use( webpackDevMiddleware(compiler, {
  noInfo : true,
  publicPath: config.output.publicPath
}) );

app.use( webpackHotMiddleware(compiler) );

app.use(ctx => {
  const targetFile = path.join( __dirname, '../src', 'index.html');
  ctx.body = fs.readFileSync(targetFile, 'utf8');
});

app.listen(port, function(err) {
  if (err) {
    return err;
  } else {
    open(`http://localhost:${port}`);
  }
});
