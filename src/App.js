
import UnderConstrution from './Components/UnderConstruction';
import './App.css';
import Intro from './Components/Intro';
import Me from './Components/Me'
import Terminal from './Components/Home/Terminal'
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container>
        <Intro/>
        <Me/>
        
        <Terminal/>
    </Container>
  );
}

export default App;
