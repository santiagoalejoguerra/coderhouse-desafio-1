const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const fetch = require('isomorphic-fetch')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url = 'https://klassi-proto.herokuapp.com/api/users'

app.get('/', (req, res) => {

    const values = req.query

    console.log(values)

    fetch(url)
        .then(resp => resp.json())
        .then(datas => {

            console.log(datas)

            const paramName = values['nombre']

            let data

            if (paramName) {

                datas.result = datas.result
                    .find(element => element.nombre === paramName)

            }

            res.json({ result: datas.result })

        })

})

app.listen(8080)