import Background from './components/Background';
import Nav from './components/Nav';
import ProfilePic from './components/ProfilePic';
import './_index.scss';

function App() {
  return (
    <div className="App">
         <Background/> 
        <Nav/>
        <ProfilePic/>
    </div>
  );
}

export default App;
