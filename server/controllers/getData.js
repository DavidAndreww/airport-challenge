const fs = require('fs')

function doesFileExist (path) {
  try {
    fs.accessSync(path, fs.constants.F_OK)
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

module.exports = function getData (req, res) {
  const path = './server/data/data.json'

  if (doesFileExist(path)) {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) throw err
      const arrOfData = JSON.parse(data)
      res.json({ data: arrOfData })
    })
  } else {
    res.send('JSON file does not exist or cannot be found.')
  }
}
