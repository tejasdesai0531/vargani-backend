const PORT = process.env.PORT || 3000
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://vargani1234:Vargani@1234@vargani-staging.mzbui.mongodb.net/vargani?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// if(process.argv.length > 2) {
//     PORT = parseInt(process.argv[2])
// }

if (process.env.NODE_ENV !== "production") {
    const morgan = require('morgan')
    app.use(morgan('dev'))
}   

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// For POST  requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
    console.log("App listening on " + PORT)
})