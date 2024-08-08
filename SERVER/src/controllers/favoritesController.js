import * as sql from '../models/favorites.dao.js'

export const findLikeProducts = (req, res) => sql.findLikeProducts(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const addToFavorites = (req, res) => sql.addToFavorites(req.params.id, req.body.product_id)
  .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const removeFavorites = (req, res) => sql.removeFavorites(req.params.id, req.body.product_id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
