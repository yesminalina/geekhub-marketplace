import products from '../../src/assets/json/MOCK_DATA_PRODUCTS.json'
import { delay, http, HttpResponse } from 'msw'

const getProducts = http.get('/products', async ({ request }) => {
  await delay(300)
  return HttpResponse.json({ status: true, data: products }, { status: 200 })
})

const postProduct = http.post('/products', async ({ request }) => {
  await delay(300)

  const { id = '', userId = '', title = '', price = '', description = '', stock = '', imageUrl = '', category = '', liked = '', score = '' } = await request.json()

  if (id === '' || userId === '' || title === '' || price === '' || description === '' || stock === '' || imageUrl === '' || category === '' || liked === '' || score === '') {
    return HttpResponse.json(
      { status: false, error: 'Todos los campos son requeridos' },
      { status: 400 }
    )
  }

  return HttpResponse.json(
    { status: true, data: { id, userId, title, price: Number(price), description, stock, imageUrl, category, liked, score }, message: '¡Producto creado exitosamente!' },
    { status: 200 }
  )
})

const putProduct = http.put('/products/:id', async ({ request, params }) => {
  await delay(300)

  const { id } = params
  const updatedProduct = await request.json()
  console.log('Producto actualizado', id, updatedProduct)

  return HttpResponse.json({ status: true, data: updatedProduct, message: 'Producto modificado con exito' }, { status: 201 })
})

export default [getProducts, postProduct, putProduct]
