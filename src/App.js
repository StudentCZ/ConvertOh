import { useState } from 'react';

function App() {
  const [state, setState] = useState(null);
  return (
    <div className='App'>
      <button onClick={() => {}}>Change Number</button>
    </div>
  );
}

export default App;
