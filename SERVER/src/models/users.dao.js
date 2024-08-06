import db from '../database/db.js'

export const register = ({ id, first_name, last_name, address, phone_number, email }, password) => db('INSERT INTO users (id, first_name, last_name, address, phone_number, password, email) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6);', [id, first_name, last_name, address, phone_number, password, email])

export const login = ({ email }) => db('SELECT email, password FROM users WHERE email = $1;', [email])

export const findProfile = (email) => db('SELECT email, first_name, last_name, phone_number, address FROM users WHERE email = $1;', [email])

export const deleteProfile = (id) => db('DELETE FROM users WHERE id = $1 RETURNING *;', [id])

export const updateProfile = (id, { first_name, last_name, address, phone_number, email, password }) => db('UPDATE users SET first_name = $2, last_name = $3, address = $4, phone_number = $5, email = $6, password = $7 WHERE id = $1 RETURNING *;', [id, first_name, last_name, address, phone_number, email, password])

export const updatePhotoProfile = (id, photo_url) => db('UPDATE users SET photo_url = $2 WHERE id = $1;', [id, photo_url])

export const deletePhotoProfile = (id) => db('UPDATE users SET photo_url = NULL WHERE id = $1;', [id])
