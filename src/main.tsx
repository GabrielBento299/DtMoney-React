import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer } from 'miragejs';

import App from './App'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'Food',
          cretedAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
