import React, { PropsWithChildren } from "react";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

const Wrapper=(props: PropsWithChildren<any>)=>{
    return (
<div>
      <Nav />

      <div className="container-fluid">
        <div className="row">
         
         <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>

          {props.children}
          </main>
          </div>
          </div>
          </div>
    )
}

export default Wrapper