const express = require('express')
const cors = require('cors')
const postData = require('./server/controllers/postData')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.post('/', postData)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
