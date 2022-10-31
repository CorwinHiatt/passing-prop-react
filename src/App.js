import Welcome from "./components/Welcome";

const names = ["brad", 'gabby', 'art']

function App() {
  return (
    <>
    <h1>Passing prop</h1>
    <Welcome name={names[0]} greeting='welcome'/>
    </>
  );
}

export default App;
