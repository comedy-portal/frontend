![Deploy Status](https://github.com/comedyportal/frontend/actions/workflows/deploy.yml/badge.svg)

# Comedy portal frontend

## Prerequisites

- [Node.js](https://nodejs.org/en/) >= v22.15.0

## Getting started

Create a `.env` file similar to `.env.example`:

```bash
cp .env .env.local
```

### Run app in development mode

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

### Run app in production mode

Install dependencies:

```bash
npm ci
```

Build the app:

```bash
npm run build
```

Start the app:

```bash
npm start
```

### Deploy app

Run the following command to deploy the app:

```bash
npm run deploy
```

### Open the app in your browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
