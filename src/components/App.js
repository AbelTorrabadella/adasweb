import '../css/App.css';
import { useRoutes } from 'react-router-dom';
import routes from "./Routes"
import { useEffect, useState } from 'react';

function App() {
  const [isPortada, setIsPortada] = useState(true);
  const routing = useRoutes(routes(isPortada));

  useEffect(() => {
    if (window.location.pathname == '/') {
      setIsPortada(true);
    } else {
      setIsPortada(false);
    }
  });

  return (
      <div className='App'>
        {routing}
    </div>
  );
}

export default App;
