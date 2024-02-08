import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider, i18next } from './config/i18next.ts'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
function disableReactDevTools() {
  throw new Error('Function not implemented.')
}

