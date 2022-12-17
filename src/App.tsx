import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Product from './admin/Products';

function App() {
  return (
    <div className="App">
      <body cz-shortcut-listen="true">

      <Nav />

        <div className="container-fluid">
          <div className="row">
           
           <Menu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>


             <Product />
            </main>
          </div>
        </div>





      </body>
    </div>
  );
}

export default App;
