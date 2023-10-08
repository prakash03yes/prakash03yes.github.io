import useScreenWidth from '@/_hooks/useScreenWidth';
import Home from '@/pages/home/Home'
import './App.css'

function App() {
  useScreenWidth();

  return (
    <Home />
  )
}

export default App
