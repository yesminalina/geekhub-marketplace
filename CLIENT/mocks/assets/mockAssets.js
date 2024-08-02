import { http, passthrough } from 'msw'

const src = http.get('/src/*', () => passthrough())
const assets = http.get('/assets/img/*', () => passthrough())
const img = http.get('http://dummyimage.com/*', () => passthrough())
const webImg = http.get('https://images.ctfassets.net/*', () => passthrough())
const font = http.get('https://fonts*', () => passthrough())
const url = http.get('https://*', () => passthrough())

export default [src, assets, img, webImg, font, url]
