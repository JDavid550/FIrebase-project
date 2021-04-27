import './App.css';

import './Firebase.js'

import Links from './components/Links.js'


import 'bootswatch/dist/flatly/bootstrap.min.css'

function App() {
  return (
   <div className="container p-4">
     <div className="row">
      <Links/>
     </div>
   </div>
   
  );
}

export default App;
