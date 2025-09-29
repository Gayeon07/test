
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;