const express = require("express");
const cors = require("cors");
const db = require("./apps/models");

const app = express();

// body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// register cors middleware
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// koneksi database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(`Koneksi Database Gagal ${err.message}`);
    process.exit();
  });

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

require("./apps/routes/mahasiswa.routes")(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
