import db from '../database/db.js'

export const findLikeProducts = (id) => db('SELECT p.title, p.price, p.description, p.image_url FROM favorites AS f INNER JOIN products AS p ON f.product_id = p.product_id WHERE f.user_id = $1;', [id])

export const addToFavorites = (userId, productId) => db('INSERT INTO favorites (id, user_id, product_id) VALUES(DEFAULT, user_id = $1, product_id = $2) ;', [userId, productId])

export const removeFavorites = (userId, productId) => db('DELETE FROM favorites WHERE user_id = $1 AND product_id = $2;', [userId, productId])
