
# Express-TS Boilerplate

**Express-TS** is a lightweight and ready-to-use **Express.js + TypeScript** boilerplate. It helps you kickstart backend development without the hassle of manual setup.

---

## Features

- **Express.js** with TypeScript pre-configured.
- **Eslint** for clean and consistent code.
- **Nodemon** for hot-reloading during development.
- Pre-configured **tsconfig.json** for TypeScript compilation.
- Ready-to-use project structure for quick development.

---

## Installation

To use this boilerplate, clone the repository:

```bash
git clone https://github.com/mouloud240/express-ts.git
cd express-ts
```

Install dependencies:

```bash
npm install
```

---

## Usage
Change the name of the folder to whatever you like and change it in package.json aswell

### Development

Run the development server with **Nodemon**:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

### Production

Build and start the app:

```bash
npm run build
npm start
```

---

## Project Structure

```plaintext
express-ts/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ routes/         # Example 
â”‚   â”œâ”€â”€ utils/          # Utility functions
â”‚   â”œâ”€â”€ app.ts          # Express app configuration
â”‚   â””â”€â”€ server.ts       # Server entry point
â”œâ”€â”€ .env.example        # Environment variable template
â”œâ”€â”€ tsconfig.json       # TypeScript configuration
â”œâ”€â”€ package.json        # Dependencies and scripts
â””â”€â”€ README.md           # Project documentation
```

---

## Scripts

- **`npm run start:dev`**: Run the development server (hot reload with Nodemon).



---

## License

This project is licensed under the MIT License.