import express from 'express';
import { connectDB } from './config';
import Routes from './routes/Routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', Routes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
