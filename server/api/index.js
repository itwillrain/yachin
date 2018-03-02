const router = require ('express').Router()
const Model = require('quick-mysql/lib/Model.js')
router.get('/distance-list', async (req, res) => {
  res.json({
    status: 'success',
    data: await Model.fetch('select * from distance_list')
  })
})
module.exports = router
