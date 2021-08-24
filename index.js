const Koa = require("koa");
const Router = require("@koa/router");
const db = require("./db");
const { User } = require("./models/user");
const app = new Koa();
const router = new Router();
const port = parseInt(process.env.PORT) || 3000;
const os = require("os");

router.get("/users", async (ctx) => {
  ctx.body = await User.listUsers();
});

router.get("/create", async (ctx) => {
  ctx.body = await User.createDummy();
});

router.get("/", async (ctx) => {
  ctx.body = os.hostname().concat("-v2");
});

app.use(router.routes()).use(router.allowedMethods());

(async () => {
  db.getConnection().catch((e) => console.erro);
  const server = app.listen(port, () => {
    console.log(`listening on ${server.address().port}`);
  });
})();
