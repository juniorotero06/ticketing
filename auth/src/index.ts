import express from "express";

const app = express();
app.use(express.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Testing success");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
