import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router'; // Adjust path if needed

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;