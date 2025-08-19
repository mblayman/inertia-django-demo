import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
    let page = pages[`./pages/${name}.jsx`]
    page.default.layout = page.default.layout || Layout
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
