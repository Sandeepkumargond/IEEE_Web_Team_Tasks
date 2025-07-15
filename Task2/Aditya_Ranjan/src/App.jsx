import { useState } from 'react';
import Home from './pages/Home';
import './styles/tailwind.css';

function App() {
  const [category, setCategory] = useState('general');
  const [theme, setTheme] = useState('light');

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <Home category={category} setCategory={setCategory} theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;