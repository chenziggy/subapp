import routes from './routes'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

function registerApp() {
  return {
    routes
  }
}

export default registerApp