import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {Container} from 'react-bootstrap';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <main>
      <Container> 
        <Routes>
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path="/product/:id" element={<ProductScreen/>} />
        </Routes>
        </Container>
      </main>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
