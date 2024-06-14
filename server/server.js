const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/connection');

// Require route files
const authRouter = require('./routes/authRouter');
// const adminRouter = require('./routes/adminRouter');
// const userRouter = require('./routes/userRouter');
// const postRouter = require('./routes/postRouter');
// const chatRouter = require('./routes/chatRouter');
// const courseRouter = require('./routes/courseRouter');
// const questionRoutes = require('./routes/questions');
// const quizRoutes = require('./routes/quiz');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB().then(() => {
    // Routes
    app.get('/test', (req, res) => {
        res.send('Welcome to InterviewNinjaPlus API');
    });

    // Routes using route names
    app.use('/', authRouter);
    // app.use('/api/questions', questionRoutes);
    // app.use('/api/quiz', quizRoutes);
    // app.use('/api/admin', adminRouter);
    // app.use('/api/user', userRouter);
    // app.use('/api/post', postRouter);
    // app.use('/api/chat', chatRouter);
    // app.use('/api/course', courseRouter);

    // Start the server after connecting to the database
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});
