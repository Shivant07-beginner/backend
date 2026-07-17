# 🚀 Getting Started

This guide will help you create the project completely from scratch.

---

# 📋 Prerequisites

Make sure the following software is installed on your machine.

- Node.js (v20 or later)
- npm
- Git
- Visual Studio Code (Recommended)

Check versions

```bash
node -v
npm -v
git --version
```

---

# 📁 Step 1: Create Project

```bash
mkdir Express-TypeScript-Backend
```

Move inside the folder

```bash
cd Express-TypeScript-Backend
```

---

# 📦 Step 2: Initialize Node Project

```bash
npm init -y
```

This creates

```
package.json
```

---

# 📥 Step 3: Install Runtime Dependencies

```bash
npm install \
express \
dotenv \
uuid \
winston \
winston-daily-rotate-file \
zod
```

### Package Description

| Package | Purpose |
|----------|----------|
| express | Backend Framework |
| dotenv | Environment Variables |
| uuid | Generate Correlation IDs |
| winston | Logging |
| winston-daily-rotate-file | Rotate Logs Daily |
| zod | Request Validation |

---

# 📥 Step 4: Install Development Dependencies

```bash
npm install -D \
typescript \
tsx \
ts-node \
nodemon \
@types/node \
@types/express \
@types/uuid
```

### Development Packages

| Package | Purpose |
|----------|----------|
| typescript | Compile TypeScript |
| tsx | Run TS files directly |
| ts-node | Execute TS Files |
| nodemon | Auto Restart Server |
| @types/node | Node Types |
| @types/express | Express Types |
| @types/uuid | UUID Types |

---

# 🗄️ Step 5: Install Database Packages

## MongoDB (Mongoose)

```bash
npm install mongoose
```

```bash
npm install -D @types/mongoose
```

OR

## MySQL (Sequelize)

```bash
npm install sequelize mysql2
```

```bash
npm install -D sequelize-cli
```

Initialize Sequelize

```bash
npx sequelize-cli init
```

This creates

```
config/
models/
migrations/
seeders/
```

---

# 🧪 Step 6: Install Testing Packages (Optional)

```bash
npm install -D \
jest \
ts-jest \
supertest \
@types/jest \
@types/supertest
```

---

# 🔍 Step 7: Install Linting Packages (Optional)

```bash
npm install -D \
eslint \
prettier \
eslint-config-prettier \
eslint-plugin-prettier \
@typescript-eslint/parser \
@typescript-eslint/eslint-plugin
```

---

# ⚙️ Step 8: Initialize TypeScript

```bash
npx tsc --init
```

---

# 📂 Step 9: Create Folder Structure

```
src
│
├── config
├── controllers
├── services
├── repositories
├── routes
├── models
├── middlewares
├── validators
├── helper
├── logger
├── utils
├── app.ts
└── server.ts
```

---

# 🌍 Step 10: Create Environment File

Create

```
.env
```

Inside

```env
PORT=3000

NODE_ENV=development

DATABASE_URL=

JWT_SECRET=
```

---

# 📜 Step 11: Configure package.json

```json
{
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

---

# ▶️ Step 12: Run Development Server

```bash
npm run dev
```

Output

```
Server is running on 3000
```

Visit

```
http://localhost:3000
```

---

# 🏗️ Step 13: Build Project

```bash
npm run build
```

---

# 🚀 Step 14: Run Production

```bash
npm start
```