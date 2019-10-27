module.exports = {
  makeResponse: (res, data, status) => {
    status = status || 200
    res.status(200)
    res.json({
      status,
      data
    })
  }
}
