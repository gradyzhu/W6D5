import React from 'react'; 

class Clock extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
        time: new Date()
    };

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    var handle = setInterval(this.tick, 1000)
  }

  render() {
    return (<>
      <div>
        <div >
          <h1>Clock</h1>
        </div>
        <div>
          <h2>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h2>
        </div>
      </div>
      <div>
        <div>
          <h2> Date </h2>
        </div>
        <div>
          <h2>{this.state.time.getDate()}/{this.state.time.getMonth() + 1}/{this.state.time.getFullYear()}</h2>
        </div>
      </div>
    </>);

  }

}
// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<h1>React is Working!</h1>, root);
// });
export default Clock;