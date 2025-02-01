const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/adduser', (req, res) => {
    res.send('user added')
})

app.put('/updateuser', (req, res) => {
    res.send('Updated user')
})

app.delete('/deleteuser', (req, res) => {
    res.send('Deleted user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
