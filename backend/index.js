const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')


const authRoutes = require('./modules/auth/routes/authRoute')
const landLordRoutes = require('./modules/landlord/routes/landLordRoute')
const tenanatRoutes = require('./modules/tenant/routes/tenantRoute')
const adminRoutes = require('./modules/admin/routes/adminRoutes')
const sharedRoutes = require('./modules/shared/routes/sharedRoute')


// mongoose.connect("mongodb://localhost:27017/Renting-system")
//     .then(() => console.log('connected Db'))
//     .catch(console.error)
    mongoose.connect("mongodb://localhost:27017/Renting-system",{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
    })
    
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hi')
})



app.use('/api/auth', authRoutes)
app.use('/api/landlord', landLordRoutes)
app.use('/api/tenant', tenanatRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/shared',sharedRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})