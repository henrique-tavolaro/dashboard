import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from "./style"
import AppRoutes from './routes'
import DataProvider from './context/data'
import AuthProvider from './context/auth'


function App() {


  return (
    <AuthProvider>
      <DataProvider>
        <GlobalStyle />

        <Router>

          <div className="App">

            <AppRoutes
            />

          </div>
        </Router>

      </DataProvider>
    </AuthProvider>
  )
}

export default App
