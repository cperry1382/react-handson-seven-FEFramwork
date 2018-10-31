import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment1 = () => {
    this.props.dispatch({
      type: 'Increment1'
    });
  };
increment5 = () => {
    this.props.dispatch({
      type: 'Increment5'
    });
  };
  decrement1 = () => {
    this.props.dispatch({
      type: 'Decrement1'
    });
  };
  decrement10 = () => {
    this.props.dispatch({
      type: 'Decrement10'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <span>{this.props.count}</span><br>
        </br>
        <button onClick={this.increment1}>Increase By 1</button>
        <br>
        </br>
          <button onClick={this.increment5}>Increase By 5</button>
          <br>
          </br>
          <button onClick={this.decrement1}>Decrease By 1</button>
          <br>
          </br>
          <button onClick={this.decrement10}>Decrease By 10</button>
          <br>
          </br>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);