const fs = require('fs')
const express = require('express');
require('dotenv').config()
const PORT = 8080;

const app = express();
app.get('/:meetingID', async (req, res) => {
  try {
    const files = await fs.readdirSync(`/usr/src/app/learning-dashboard/${req.params.meetingID}`)
    await  res.send(files);
  } catch (e) {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
   });
