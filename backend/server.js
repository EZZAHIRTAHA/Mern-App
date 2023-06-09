const express = require('express');
const app = express();
const port = 5000;
const colors = require('colors');
const connectDB = require('./config/db');
const userRouter = require('./routes/UserRouter');
const cors = require('cors')
connectDB();
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`.blue.underline.bold);
});
