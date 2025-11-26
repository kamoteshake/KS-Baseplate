<p align="center">
  <img src="./images/ks_baseplate_banner.svg" alt="KS Baseplate Logo" />
</p>


# 🧱 KS Baseplate

A modern starter template that gives you a solid **baseplate** to build your next fullstack project.  
Everything is already wired together, tested, linted, and production-ready — you just start snapping on your features.

`React 19 + Vite + TypeScript + MUI`  
`Node + Express 5 + Apollo Server + MongoDB`  
All running inside **Yarn v4 Workspaces**, fully typed, fully tested.

# 🚀 Features

### **Frontend**
- ⚡️ Vite (ultra-fast dev server)
- ⚛️ React 19 + TypeScript
- 🎨 MUI (theme system + Roboto fonts)
- 🔗 React Router
- 🔮 Apollo Client
- 🧪 Vitest + Testing Library
- 🔧 Clean import aliases (`components/*`, `pages/*`, `theme/*`, `src/*`)
- 🧩 Working Todo example using real GraphQL

### **Backend**
- 🟢 Node.js + Express 5
- 🧬 Apollo Server (GraphQL)
- 🗃️ MongoDB integration
- 🧩 Modular GraphQL design (feature-based modules)
- 🧪 Vitest resolver tests (mocked db/context)
- 🛠 Built with tsup for reliable production builds

### **Tooling**
- 🧶 Yarn v4 workspaces
- 📏 ESLint 9 (flat config)
- ✨ Prettier formatting
- 🌈 Colored logs for dev mode
- 🏗 Production mode with Express serving the built client


# 🏁 Quick Start

## 1. **Create a new project from KS Baseplate (no git history)**

Use **degit** to copy the template without cloning or keeping Git history:

```bash
npx degit https://github.com/kamoteshake/KS-Baseplate#main my-new-app
```
This will:
- Copy the KS Baseplate template
- Remove all Git History
- Create a new folder called `my-new-app`

Then move into it:
```bash
cd my-new-app
```

## 2. **Install all dependencies**
```bash
yarn
```

## 3. **Run the fullstack dev environment**
```bash
yarn dev
```
This starts:
- 🟩 Client → http://localhost:5173
- 🟦 Server → http://localhost:4000

Both with live reload.

## 4. **(Optional) Initialize your own Git repo**
```bash
git init
git add .
git commit -m "Initial commit"
```

## 5. **Other useful commands**
```bash
yarn test      # Run tests (client + server)
yarn lint      # Lint everything
yarn format    # Format with Prettier
yarn build     # Build client + server for production
yarn start     # Start production server
```


# 🌳 Project Structure
```lua
.
├── client/                 # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   └── TodoSection/
│   │   ├── pages/
│   │   │   └── Home/
│   │   ├── theme/
│   │   ├── apolloClient.ts
│   │   ├── router.tsx
│   │   └── main.tsx
│   └── vite.config.ts
│
├── server/                 # Node + Express + GraphQL
│   ├── src/
│   │   ├── config.ts
│   │   ├── db.ts
│   │   ├── graphql/
│   │   │   ├── context.ts
│   │   │   ├── schema.ts
│   │   │   ├── resolvers.ts
│   │   │   └── modules/
│   │   │       ├── hello/
│   │   │       ├── health/
│   │   │       └── todos/
│   │   └── index.ts
│   └── tsup.config.ts
│
├── eslint.config.cjs
├── .prettierrc
├── package.json
└── yarn.lock
```
A clear foundation built for easy expansion.


# 🔐 Environment Variables
This template uses **workspace-specific** `.env` **files**.

### Server(`server/.env`)
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/ks_baseplate
```

### Client(`client/.env`)
```env
VITE_GRAPHQL_URL=http://localhost:4000/graphql
```

Example templates:
```env
server/.env.example
client/.env.example
```


# 🎨 Import Aliases (Client Only)
Import components cleanly:
```ts
import { TodoSection } from 'components/TodoSection';
import { Home } from 'pages/Home';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { helper } from 'src/utils/helpers';
```

Aliases supported:
- `components/*`
- `pages/*`
- `theme/*`
- `src/*`

(Server intentionally keeps relative imports.)


# 🧬 GraphQL Modularization
GraphQL code lives in:
```bash
server/src/graphql/
```

Each feature module contains:
```php-template
modules/<feature>/
  typeDefs.ts
  resolvers.ts
```

Included modules:
- `hello`
- `health`
- `todos` (MongoDB-backed example)

Modules are combined through:
- `schema.ts`
- `resolvers.ts`

Add new features simply by adding a module folder.


# 🧪 Testing
### Client Testing
Powered by Vitest + Testing Library:
```bash
yarn workspace client test
```

### Server Testing
Mocked resolver tests via Vitest:
```bash
yarn workspace server test
```

Run everything:
```bash
yarn test
```


# 🏗 Production Build
```bash
yarn build
yarn start
```

- Client → built with Vite
- Server → built with tsup
- Express serves:
  - `/graphql`
  - the built React app at `/`

Deployment-ready out of the box.


# 💬 Contributing
Contributions, ideas, improvements, or feature requests are welcome!
Feel free to open an issue or submit a PR.
