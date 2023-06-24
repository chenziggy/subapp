import routes from './routes'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

function registerApp() {
  return {
    routes
  }
}
const DEV = import.meta.env.DEV

export {
  registerApp,
  DEV
}