import './App.css';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <div className='space'>
      <Sidebar />
      <PageContent />
      </div>
    </div>
    </>
  );
}
export default App;
