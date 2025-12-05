# Test Node.js Basic API

Basic Express app with separated router, middleware, and controller layers. Suitable for local dev and Plesk deployment.

## Structure

- `src/server.js`: Node HTTP server entry
- `src/app.js`: Express app configuration
- `src/routes/api.router.js`: API routes (`/api/health`, `/api/echo`)
- `src/controllers/*.js`: Controllers for route handlers
- `src/middleware/*.js`: 404 and error handler middleware
- `.env.example`: Example environment variables

## Quick Start (Local)

```bash
# From workspace root
cd d:/github/test-nodejs

# Install dependencies
npm install

# Run in dev mode
npm run dev

# Or run normally
npm start
```

- GET `http://localhost:3000/api/health`
- POST `http://localhost:3000/api/echo` with JSON body

Example:

```bash
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"hello":"world"}'
```

## Plesk Deployment

1. In Plesk, create a Node.js app for your domain.
2. Upload project files (or connect Git repo) to the app directory.
3. Set:
   - **Document root**: app directory (where `package.json` resides)
   - **Application startup file**: `src/server.js`
   - **Node.js version**: 18+ (match `engines`)
   - **Environment variables**: set `PORT` and `NODE_ENV` if needed
4. Click **NPM install** in Plesk to install dependencies.
5. Click **Enable Node.js** then **Restart App**.

Plesk will bind the app to its internal port and proxy requests. Ensure your routes are under `/api` or adjust as needed.

## Notes

- Uses ESM (`type: module`), Node >= 18.
- Add more routes by creating files in `controllers` and wiring them in `routes`.
- For security headers, consider adding `helmet`.
