import './App.css';
import Button from './Components/Button';


function App() {
  return (
    <><div style={{width: "50%",margin:"auto",marginTop: "70px"}}>
      <Button  border = {'solid'} bg = {"blue"} color = {"white"}>Primary Button</Button>
      <Button border = {'solid'}>Default Button</Button>
      <Button border = {'dashed'}>Dashed Button</Button>
      <Button>Text Button</Button>
      <Button color = {"blue"}>Link Button</Button>
    </div>
    </>
  );
}

export default App;
