// // const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');

// const state = {
//     db: null
// };

// const connectDB = async function (done) {
//     console.log("connectDB called");
//     const url = 'mongodb+srv://brototypeTest:vcbodheesh@clusterfortest.yvsxay2.mongodb.net/?retryWrites=true&w=majority';
//     // const url = 'mongodb+srv://brototypeTest:vcbodheesh@clusterfortest.yvsxay2.mongodb.net/?retryWrites=true&w=majority&appName=clusterForTest';
//     const dbname = 'InterviewNinjaPlus';

//     try {
//         // const client = await MongoClient.connect(url);
//         // state.db = client.db(dbname);
//         // console.log("hit connection");
//         // console.log('MongoDB connected successfully');
//         // done();/
//          await mongoose.connect('mongodb://localhost/my_database')
//             .then(() => console.log('MongoDB connected'))
//             .catch((err) => console.log(err));
//     } catch (err) {
//         console.error('Failed to connect to MongoDB:', err);
//         done(err);
//     }
// };

// module.exports = connectDB;

// module.exports.get = function () {
//     return state.db;
// };

const mongoose = require('mongoose');

const connectDB = async () => {
    const url = 'mongodb+srv://brototypeTest:vcbodheesh@clusterfortest.yvsxay2.mongodb.net/InterviewNinjaPlus?retryWrites=true&w=majority';

    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
};

module.exports = connectDB;
