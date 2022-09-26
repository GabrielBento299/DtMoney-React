import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';

import App from './App'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: '7600',
          createdAt: new Date('2022-09-22 15:23:00'),      
        },
        {
          id: 2,
          title: 'Dinheiro',
          type: 'deposit',
          category: 'Money',
          amount: '251500',
          createdAt: new Date('2022-09-26 16:15:55'),    
        }, 
        {
          id: 3,
          title: 'Alugel',
          type: 'withdraw',
          category: 'Casa',
          amount: '1500',
          createdAt: new Date('2022-09-10 11:15:55'),      
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
