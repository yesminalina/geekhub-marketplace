import products from '../../src/assets/json/MOCK_DATA_PRODUCTS.json'
import { delay, http, HttpResponse } from 'msw'
console.log(products)

const getProducts = http.get('./products', async ({ request }) => {
  await delay(300)
  return HttpResponse.json({ status: true, data: products }, { status: 200 })
})

export default [getProducts]
