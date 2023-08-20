import express from "express"

const app = express()
app.listen(8803, () => {
    console.log('Connected to the backend');
  });