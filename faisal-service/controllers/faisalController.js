const { Faisal } = require('../models')

// CREATE
exports.create = async (req, res) => {
  try {
    const data = await Faisal.create(req.body)
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// READ ALL
exports.getAll = async (req, res) => {
  try {
    const data = await Faisal.findAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// READ BY ID
exports.getById = async (req, res) => {
  try {
    const data = await Faisal.findByPk(req.params.id)

    if (!data) {
      return res.status(404).json({ message: 'Data tidak ditemukan' })
    }

    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// UPDATE
exports.update = async (req, res) => {
  try {
    const data = await Faisal.findByPk(req.params.id)

    if (!data) {
      return res.status(404).json({ message: 'Data tidak ditemukan' })
    }

    await data.update(req.body)

    res.json({
      message: 'Data berhasil diupdate',
      data
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE
exports.remove = async (req, res) => {
  try {
    const data = await Faisal.findByPk(req.params.id)

    if (!data) {
      return res.status(404).json({ message: 'Data tidak ditemukan' })
    }

    await data.destroy()

    res.json({ message: 'Data berhasil dihapus' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}