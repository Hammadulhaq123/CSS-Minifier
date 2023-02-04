import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar titlebar="TextUtilities" />
    <div className='container'>
      <TextForm title1="Enter your Text here..." title2="Converted Text here"/>
    </div>
    </>
  );
}

export default App;
