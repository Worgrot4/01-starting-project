import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
  function handleSelect(selectedButton) {
    console.log("Hello World")
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <sections id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick = {()=>{handleSelect('components')}}> Components </TabButton>
            <TabButton onClick = {()=>{handleSelect('jsx')}}> JSX </TabButton>
            <TabButton onClick = {()=>{handleSelect('props')}}> Props </TabButton>
            <TabButton onClick = {()=>{handleSelect('state')}}> State </TabButton>
          </menu>
        </sections>
      </main>
    </div>

  );
}
export default App;