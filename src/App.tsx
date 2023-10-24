import gsap from 'gsap';
import Home from '@/pages/home/Home'
import useScreenWidth from '@/_hooks/useScreenWidth';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'


gsap.registerPlugin(ScrollTrigger);

function App() {
  useScreenWidth();

  return (
    <Home />
  )
}

export default App
