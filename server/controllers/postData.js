const fs = require('fs')

module.exports = function postData (req, res) {
  const json = req.body
  const jsonFile = '../isys-airport-app/server/data/data.json'

  fs.readFile(jsonFile, 'utf8', function (err, data) {
    if (err) throw err
    const arrOfData = JSON.parse(data)
    arrOfData.data.push(json)

    fs.writeFile(jsonFile, JSON.stringify(arrOfData), 'utf8', function (err) {
      if (err) throw err
      console.log('Done!')
      res.json({ json: json })
    })
  })
}
