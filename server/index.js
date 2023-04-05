import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('mongoose connected!')
})

app.listen(process.env.PORT || 8000, () => {
  console.log('Server started successfully');
});
