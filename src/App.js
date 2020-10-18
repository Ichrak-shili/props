import React from 'react';
import './App.css';
import Profil from './Profile/Profil';
import Photo from './components/Photo';
import Im from './imageInSrc.png';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const handle=(e,fullName)=>{ e.preventDefault();alert (fullName);}
  return (
   
  <Profil  fullName="Ichrak Shili" bio="An enthousiastic girl"profession="Student" handleName={handle}>
    <Photo srcUrl={Im} />
  </Profil>
  );
   
};

export default App;
