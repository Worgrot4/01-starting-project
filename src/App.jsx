import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
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
            <TabButton> item 1</TabButton>
            <TabButton> item 2</TabButton>
            <TabButton> item 3</TabButton>
            <TabButton> item 4</TabButton>
          </menu>
        </sections>
      </main>
    </div>

  );
}
export default App;