import format from 'pg-format'
import db from '../database/db.js'

export const findProducts = ({ limits = 15, order_by: orderBy = '', page = 0, category, title }) => {
  let query = 'SELECT * FROM products'
  const filters = []
  const values = []

  if (category) {
    values.push(category)
    filters.push(`category ILIKE $${values.length}`)
  }
  if (title) {
    values.push(title)
    filters.push(`title ILIKE $${values.length}`)
  }
  if (filters.length > 0) {
    query += ` WHERE ${filters.join(' AND ')}`
  }
    const [column, sort] = orderBy.split('_')
    const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
    const formatQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s`, column, sort, limits, offset)
    return db(formatQuery)
}

export const findProductById = (id) => db('SELECT * FROM products WHERE id = $1;', [id])

export const createProduct = ({ userId, title, price, description, stock, imageUrl, score, category }) => db('INSERT INTO products (id, user_id, title, price, description, stock, image_url, score, category) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING *;', [ userId, title, price, description, stock, imageUrl, score, category])

export const updateProduct = (id, { userId, title, price, description, stock, imageUrl, category }) => db('UPDATE products SET title = $3, price = $4, description = $5, stock = $6, image_url = $7, category = $8 WHERE id = $1 AND user_id = $2;', [id, userId, title, price, description, stock, imageUrl, category])

export const deleteProduct = (id) => db('DELETE FROM products WHERE id = $1;', [id])

export const findScoreProduct = (id) => db('SELECT score FROM products WHERE id = $1;', [id])

export const scoreProduct = (id, score) => db('UPDATE products SET score = $2 WHERE id = $1;', [id, score])
