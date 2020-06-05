const express = require('express')

const app = express()

const port = 3000

const users = [
  {
    name: 'david',
    hours: 10,
    website: 'cnn.com'
  },
  {
    name: 'jeroen',
    hours: 4,
    website: 'nos.nl'
  },
  {
    name: 'rein',
    hours: 6,
    website: 'codaisseur.com'
  }
]

app.get(
  '/users',
  (request, response) => {
    response.send(users)
  }
)

app.get(
  '/user/:username',
  (request, response) => {
    console.log(request.params.username)

    const found = users.find(
      (user) => user.name === request.params.username
    )

    response.send(found)
  }
)

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)