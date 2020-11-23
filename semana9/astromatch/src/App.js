import styled from 'styled-components'
import Footer from './components/Footer'
import RenderScreen from './screens/RenderScreen';
import 'fontsource-roboto'
import {softPink} from './constants/colors'

const Background = styled.div`
  background-color: ${softPink};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto";
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
