//import logo from './logo.svg';
import './App.css';
import Pager from './components/organisms/Pager';
//import TextInput from './components/atoms/TextInput';
//import FileUpload from './components/atoms/FileUpload';
import AppHeading from './components/molecules/appHeading';


function App() {
  return (
  
    <div className="App">
      <AppHeading Title="George & Iris's Crop Swap"/>
      <br />
      <Pager />
    
    </div>
  );
}

export default App;

