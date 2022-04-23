import Header from './pages/header/Header';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
