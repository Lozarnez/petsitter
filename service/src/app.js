import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import stateRoutes from './routes/state.routes.js';
import cityRoutes from './routes/city.routes.js';
import petSitterRoutes from './routes/petSitter.routes.js';
import reviewRoutes from './routes/reviews.routes.js';

const app = express();

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.nkihp.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/user', userRoutes);
app.use('/api/petSitters', petSitterRoutes);
app.use('/api/reviews', reviewRoutes);


export default app;