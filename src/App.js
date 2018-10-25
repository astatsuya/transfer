import React from 'react';
import Form from './components/Form';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Form />
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="main-page">
    <h1>Transfer</h1>
    <Form />
  </div>
);

export default App;
