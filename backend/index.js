// import express from "express";
// const app = express();

// import dotenv from "dotenv";
// dotenv.config();

// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// import db from "./config/db_connect.js";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import cors from "cors";
// import helmet from "helmet";

// import handleError from "./utils/error_handler.js";
// import setupRoutes from "./routes/all_routes.js";

// const PORT = process.env.PORT || 6868;
// const HOST = process.env.APP_HOST || "localhost";
// const URL =
//   `http://${HOST}:${process.env.PORT}` ||
//   `http://localhost:${process.env.PORT}`;

// app.use(cors());
// app.use(morgan("dev"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // This disables the Content-Security-Policy
// // and X-Download-Options headers.
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//     xDownloadOptions: false,
//   })
// );

// // To serve static files inside backend public folder
// app.use(express.static(join(__dirname, "public")));

// setupRoutes(app);

// // Middleware to capture errors in your application
// app.use((err, req, res, next) => {
//   handleError(err, res);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at ${URL}`);
//   //console.log(`To check Admin panel, open http://${HOST}:3000`);
// });

// db.sequelize.sync();
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import db from "./config/db_connect.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import handleError from "./utils/error_handler.js";
import setupRoutes from "./routes/all_routes.js";

const PORT = process.env.PORT || 6868;
const HOST = process.env.APP_HOST || "localhost";
const URL = `http://${HOST}:${PORT}`;

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Security Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  })
);

// To serve static files inside backend public folder
app.use(express.static(join(__dirname, "public")));

// Debugging: Test if server responds
app.get("/", (req, res) => {
  res.send("Server is working 👻👻");
});

// Setup API Routes
setupRoutes(app);

// Middleware to capture errors in your application
app.use((err, req, res, next) => {
  handleError(err, res);
});

// Ensure database is connected before starting server
db.sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected successfully!");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

// Sync database models
db.sequelize.sync().then(() => {
  console.log("✅ Database synchronized!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at ${URL}`);
});
