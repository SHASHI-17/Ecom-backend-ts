import express from "express";
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`express is Working on http://localhost:${PORT}`);
});
