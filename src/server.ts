import express from "express";
import openLimite from "./routes/openlimite";

const app = express();

const port = 9844;

app.use("/openlimite", openLimite);

app.listen(port, () => {
  console.log(`OpenLimite1.0::${port}`);
});
