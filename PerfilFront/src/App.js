import profilePic from './assets/img/Foto.jpg';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App">
      <Header name={'Juan Esteban Morales Ríos'}
      ocupation={'Estudiante de Ingeniería informática'}
      srcPic={profilePic}
      />
      <div className="container-fluid ml-0 mr-0">
        <div className="row">
          <div className='col col-lg-5 col-md-5 col-sm-12 left'>
            <LeftSide />
          </div>
          <div className='col col-lg-7 col-md-7 col-sm-12 right'>
            <RightSide /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
