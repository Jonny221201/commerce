const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const productRoutes = require('./routes/productRoutes');

dotenv.config()

connectDB()

const app = express();

app.use((req, res, next) => {
    console.log('Hello')
    next()
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);