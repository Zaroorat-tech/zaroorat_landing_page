import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
