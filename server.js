const fs = require('fs')
const express = require('express');
require('dotenv').config()
const PORT = 8080;
const BASE_URL = process.env.BASE_URL

const app = express();
app.get('/api/v1/analytics/', async (req, res) => {
  let data = {}
  console.log(req)
  try {
    const token = await fs.readdirSync(`/root/ana/learning-dashboard/${req.params.meetingID}`)
    data["url"] = `${BASE_URL}/learning-dashboard/?meeting=${req.params.meetingID}&report=${token}`
    await  res.json(data);
  } catch (e) {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
   });
