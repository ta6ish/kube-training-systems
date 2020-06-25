const Koa = require('koa');
const Router = require('@koa/router');
const db = require("./db");
const { User } = require("./models/user");
const app = new Koa();
const router = new Router();
const port = parseInt(process.env.PORT) || 3000;

router.get('/', async (ctx) => {
  ctx.body = await User.listUsers();
});

router.get('/create', async (ctx) => {
  ctx.body = await User.createDummy();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

(async() => {
  await db.getConnection();
  const server = app.listen(port, () => {
      console.log(`listening on ${server.address().port}`);
  });
})();
