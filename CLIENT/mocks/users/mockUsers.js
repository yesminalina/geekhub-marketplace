import { delay, http, HttpResponse } from 'msw'

const register = http.post('/register', async ({ request }) => {
  await delay(300)

  const { firstName = '', lastName = '', address = '', phoneNumber = '', password = '', email = '' } = await request.json()
  if (firstName === '' || lastName === '' || address === '' || phoneNumber === '' || password === '' || email === '') {
    return HttpResponse.json(
      { status: false, error: 'Todos los campos son requeridos' },
      { status: 400 }
    )
  }

  return HttpResponse.json(
    { status: true, message: 'Usuario creado con exito' },
    { status: 200 }
  )
})

const login = http.post('/login', async ({ request }) => {
  await delay(300)

  const { email = '', password = '' } = await request.json()

  if (email === '' || password === '') {
    return HttpResponse.json(
      { status: false, error: 'Todos los campos son requeridos' },
      { status: 400 }
    )
  }

  if (email !== 'test@desafiolatam.cl' || password !== '1234') {
    return HttpResponse.json(
      { status: false, error: 'Usuario y/o contraseñas incorrectos.' },
      { status: 401 }
    )
  }

  return HttpResponse.json(
    { status: true, token: 'asdasdasd.asdasdasd.asdasdasads' },
    { status: 200 }
  )
})

const userTest = [{
  id: 1,
  photoUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg',
  firstName: 'Francoise',
  lastName: 'Skerme',
  phoneNumber: '4103791877',
  address: '417 Michigan Center',
  email: 'test@desafiolatam.cl'
}]

const getProfile = http.get('/profile', async ({ request }) => {
  await delay(300)

  const authorization = request.headers.get('Authorization')

  if (authorization === undefined) {
    return HttpResponse.json({ status: false, message: 'Token no proporcionado' }, { status: 400 })
  }

  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    return HttpResponse.json({ status: false, message: 'Token mal formado' }, { status: 401 })
  }

  if (token !== 'asdasdasd.asdasdasd.asdasdasads') {
    return HttpResponse.json({ status: false, message: 'Token no valido' }, { status: 401 })
  }

  return HttpResponse.json([userTest], { status: 200 })
})

const putProfile = http.put('/profile/:id', async ({ request, params }) => {
  await delay(300)

  const { id } = params
  const updatedProfile = await request.json()
  console.log('perfil actualizado', id, updatedProfile)
  return HttpResponse.json({ status: true, data: updatedProfile, message: 'Usuario modificado con exito' }, { status: 201 })
})

export default [register, login, getProfile, putProfile]
