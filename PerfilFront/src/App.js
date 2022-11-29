import profilePic from './assets/img/Foto.jpg';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App">
      <Header name={'Juan Esteban Morales Ríos'}
      ocupation={'Estudiande de Ingeniería informática'}
      srcPic={profilePic}
      />
      <div class="container ml-0 pl-auto mr-0">
        <div class="row">
          <div className='col-5 left'>
            <LeftSide />
          </div>
          <div className='col-7 right'>
            <RightSide /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
