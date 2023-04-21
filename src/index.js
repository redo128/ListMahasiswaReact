import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BlogPost from "./container/BlogPost/BlogPost";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
function formatname(user) {
  return user.firstname + " " + user.lastname;
}
const user = {
  firstname: "john",
  lastname: "reese",
  avatar:
    "data:image/jpeg;base64,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",
};
function getsapaan(user) {
  if (user) {
    return <h1>Hello, {formatname(user)}</h1>;
  }
  return <h1>Halo Salken</h1>;
}
const name = "jojon";
const element = <h1>Hello,{name}</h1>;
const element1 = <h1>Hello, {formatname(user)}</h1>;
// root.render(getsapaan(user));

const element2 = <a href="https://www.youtube.com/">NONTON YT</a>;
// root.render(element2);
const element3 = <img src={user.avatar}></img>;
// root.render(element3);
const element4 = (
  <div>
    <h1>Hello 1</h1>
    <h2>Selamat Sore</h2>
  </div>
);
let coba = 1;
// root.render(element4);
// root.render();
function tick() {
  const element = (
    <div>
      <h1>Selamat Datang,Sore</h1>
      <h2>
        Waktu sekarang menunjukkan pukul {new Date().toLocaleTimeString()}
      </h2>
      <h1>{coba++}</h1>
    </div>
  );
  root.render(element);
}
// tick();
// setInterval(tick,100);
function Welcome(props) {
  return <h1>Hello,{props.name}</h1>;
}
const element5 = <Welcome name="jojon" />;
// root.render(element5)
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello2,{this.props.name}</h1>;
  }
}
const element6 = <Welcome2 name="Jonnyi" />;
// root.render(element6);
function Cpp() {
  return (
    <div>
      <Welcome name="Aditya" />
      <Welcome name="Raihan" />
      <Welcome name="Aditya" />
    </div>
  );
}
const element7 = <Cpp />;
// root.render(element7)
function Clock(props) {
  return (
    <div>
      <h1>Hello Minansha</h1>
      <h2>Time now show : {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}
function tick1() {
  root.render(<Clock date={new Date()} />);
}
// tick1();
// setInterval(tick1,1000);
// class Clock2 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       date : new Date()
//     };
//   }
//   componentDidMount(){
//     this.timerID=setInterval(
//       ()=>this.tick(),
//       1000
//     );
//   }
//   tick(){
//     this.setState({
//       date : new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Minansha</h1>
//         <h2>Time now show : {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// function tick2(){
//   const element=<Clock2 date={new Date()}/>
//   root.render(element)
// }
// const element8=<Clock3 />
// root.render(element8)
class Clock3 extends React.Component{
  constructor(props){
    super(props);
    this.state={date : new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick(){
    this.setState({
      date : new Date()
    });
  }
  render(){
    return (
      <div>
        <h1>Hello Minansha</h1>
        <h2>Time now show : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
class Kuis extends React.Component{
  constructor(props){
    super(props);
      this.state={
        listStudent:[]
      }
    }
    componentDidMount(){
      this.ambilDataDariServerAPITypiCode();
    }
    ambilDataDariServerAPITypiCode=()=>{
      fetch("https://my-json-server.typicode.com/redo128/PBF3F/organisasi")
      .then((response)=>response.json())
      .then((jsonHasilAmbilDariAPI)=>{
        this.setState({
          listStudent:jsonHasilAmbilDariAPI,
        });
      });
    };
    render(){
      return (
        1
      )
    }
  }
const element8=<Clock3/>
// root.render(element8)
class Student extends React.Component{
  constructor(props){
    super(props);
    this.state={
      listStudent:[]
    };
  }

  componentDidMount(){
    this.ambilDataDariServerAPITypiCode();
  }

  ambilDataDariServerAPITypiCode=()=>{
    fetch("https://my-json-server.typicode.com/redo128/PBF3F/organisasi")
    .then((response)=>response.json())
    .then((jsonHasilAmbilDariAPI)=>{
      this.setState({
        listStudent:jsonHasilAmbilDariAPI,
      });
    });
  };
  render(){
    return (
      <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>
    {this.state.listStudent.map((Student) => {
      return(
      <div class="container my-5">
        <div class="bg-light p-2 rounded">
            <p class="pb-3 mb-0 small lh-sm border-bottom">
        <strong class="d-block text-gray-dark">{Student.nama}</strong>
        {Student.sekretariat}
      </p>
        </div>
      </div>
    );
      })}
          <small class="d-block text-end mt-3">
      <a href="#">All updates</a>
    </small>
      </div>
    ); 
    }
  }
const element9=(
  <div class="container">
    <Clock3/>
    <Student/>

  </div>
)
root.render(<BlogPost />);
// tick2()
// setInterval(tick2,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
