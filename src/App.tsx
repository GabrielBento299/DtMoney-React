import Dashoboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashoboard />
    </>
  )
}

export default App