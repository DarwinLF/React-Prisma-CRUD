import logo from '../images/logo.svg';

function Home() {
    return (
        <header className="App-header">
         <img src={logo} alt='logo' className='App-logo'></img>
         <p>React CRUD</p>
        </header>
    );
  };
  
  export default Home;