import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { Fragment, useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Example.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>

  );
}
export default App;