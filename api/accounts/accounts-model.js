const db = require('../../data/db-config') // door to the database

const getAll = () => {
    //equivalent to select * from accounts 
    return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
}

const create = account => {
  // DO YOUR MAGIC

}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
