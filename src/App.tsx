import './App.css'
import { Header } from './components/header';
import { Hero } from './pages/hero';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Projects } from './pages/projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
