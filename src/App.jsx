import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';

function App() {
  let [selectedTopic, setSelectedTopic] = useState('Please click a button')
  function handleSelect(selectedButton) {
    console.log('Selected Button', selectedButton)
    setSelectedTopic(selectedButton)
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick = {()=>{handleSelect('components')}}> Components </TabButton>
            <TabButton onClick = {()=>{handleSelect('jsx')}}> JSX </TabButton>
            <TabButton onClick = {()=>{handleSelect('props')}}> Props </TabButton>
            <TabButton onClick = {()=>{handleSelect('state')}}> State </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>

  );
}
export default App;