import './App.css';
import styled from 'styled-components'
import Footer from './components/Footer'
import RenderScreen from './screens/RenderScreen';


const Background = styled.div`
  background-color: #fdc9cb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


function App() {
  return (
    <Background>
      <RenderScreen />
      <Footer />
    </Background>

  );
}

export default App;
