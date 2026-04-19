const { User } = require('../models')

// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const data = await User.create(req.body)
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET ALL USER
exports.getUsers = async (req, res) => {
  try {
    const data = await User.findAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id)

    if (!data) {
      return res.status(404).json({ message: 'User tidak ditemukan' })
    }

    await data.destroy()

    res.json({ message: 'User berhasil dihapus' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}