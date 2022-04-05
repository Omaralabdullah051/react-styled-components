//In this overall application we don't use any single css file.
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Container } from './components/styles/Container.styles';
import GlobalStyle from './components/styles/Global.styles';

function App() {
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </Container>
  );
}

export default App;
