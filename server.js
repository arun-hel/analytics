const fs = require('fs')
const express = require('express');
require('dotenv').config()
const PORT = 8080;
const HOST = 'localhost';

const app = express();
app.get('/:meetingID', async (req, res) => {
  try {
    const files = await fs.readdirSync(`${process.env.LEARNING_DASH_BOARD_PATH}/${req.params.meetingID}`)
    await  res.send(files);
  } catch (e) {
    res.sendStatus(404);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
