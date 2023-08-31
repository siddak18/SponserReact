import './App.css';
import Contactus from './components/Contactus';
import Form1 from './components/Form1';
import Home from './components/Home';
import Learnmore from './components/Learnmore';
import Past from './components/Past';
import Prop from './components/Prop';
import Sliderr from './components/Slider';
import Whyus from './components/Whyus';

function App() {
  return (
    <div>
      <Home></Home>
      <Whyus></Whyus>
      <Sliderr></Sliderr>
      <Past></Past>
      <Learnmore></Learnmore>
      <Prop></Prop>
      <Form1></Form1>
      <Contactus></Contactus>
    </div>
  );
}

export default App;
