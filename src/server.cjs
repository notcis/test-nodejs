require("dotenv/config");

(async () => {
  const { default: app } = await import("./app.js");
  const { createServer } = await import("http");

  const PORT = process.env.PORT || process.env.APP_PORT || 3000;
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`[server] Listening on port ${PORT}`);
  });
})().catch((err) => {
  console.error("[server] Startup error:", err);
  process.exit(1);
});
