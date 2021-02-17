const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config()

connectDB()

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log('Hello')
    next()
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/orders', orderRoutes)

app.use('/config/paypal', (req, res) => 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);