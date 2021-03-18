require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    res.send(add)
  })