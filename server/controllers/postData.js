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

// module.exports = function postData (req, res) {
//   const json = req.body
//   const path = './server/data/data.json'

//   if (doesFileExist(path)) {
//     fs.readFile(path, 'utf8', function (err, data) {
//       if (err) throw err
//       const arrOfData = JSON.parse(data)
//       arrOfData.data.push(json)

//       fs.writeFile(path, JSON.stringify(arrOfData), 'utf8', function (err) {
//         if (err) throw err
//         res.json({ new_entry: json })
//       })
//     })
//   } else {
//     const jsonStarterData = { data: [] }
//     fs.writeFile(path, JSON.stringify(jsonStarterData), 'utf8', (err) => {
//       if (err) throw err
//       postData(req, res)
//     })
//   }
// }

module.exports = function postData (req, res) {
  const json = req.body
  const path = './server/data/data.json'

  let currentEntries = []

  if (doesFileExist(path)) {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) throw err
      currentEntries = JSON.parse(data).data
    })
  }
  const newEntry = req.body
  currentEntries.push(newEntry)

  fs.writeFile(path, { data: currentEntries }, 'utf8', function (err) {
    if (err) throw err
    res.json({ new_entry: newEntry })
  })
}
