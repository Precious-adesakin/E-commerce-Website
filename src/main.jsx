// Entry shim: index.html expects /src/main.jsx. This file forwards to the real entry
// at src/pages/Main.jsx without changing application logic.
console.log('[debug] src/main.jsx loaded');
import './pages/Main.jsx';

// No exports — Main.jsx performs the ReactDOM.createRoot render when loaded.
