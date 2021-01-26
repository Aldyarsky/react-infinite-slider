import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import data from "./data.json";


function App() {
  return (
    <div>
      {
        data.sections.map((item, index) => {
          return <Section title={item.title} restaurants={item.restaurants}></Section>
        })
      }
    </div>
  );
}

export default App;
