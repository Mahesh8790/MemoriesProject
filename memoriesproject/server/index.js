// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import postRoutes from './routes/posts.js';
// const app = express();
// app.use('/',postRoutes);
// app.use(bodyParser.json({ limit: "30mb",extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// app.use(cors());
// app.use('/posts',postRoutes);
// const CONNECTION_URL='mongodb+srv://vmc:8790@cluster0.qiakjgr.mongodb.net/?retryWrites=true&w=majority';     
// const PORT=process.env.PORT || 5000;
// mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology:true})
//     .then(()=>app.listen(PORT,()=>console.log(`server running on port : ${PORT}`)))
//     .catch((error) => console.log(error.message));
// // mongoose.set('useFindAndModify',false);



import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://vmc:8790@practice.jto9p.mongodb.net/test';
// const CONNECTION_URL='mongodb+srv://Mahesh:879088@cluster0.qiakjgr.mongodb.net/Mahesh?retryWrites=true&w=majority'  
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);