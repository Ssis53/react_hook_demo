import React from 'react'
import { Button, InputNumber } from 'antd';
import './Home.css';
import { createChangeAction, createAsyncAddAction } from '../../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      count: 0
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', 'props:', props, 'state:', state);
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', 'props:', nextProps, 'state:', nextState);
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapshotBeforeUpdate', 'props:', prevProps, 'state:', prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', 'props:', prevProps, 'state:', prevState);
  }
  
  
  
  handleClick(needAsync=false) {
    if(needAsync) {
      this.props.store.dispatch(createAsyncAddAction(this.state.count));
      return;
    }
    this.props.store.dispatch(createChangeAction(this.state.count));
  }
  render() {
    const { store } = this.props;
    console.log('render:', store.getState());
    const { countData } = store.getState();
    return (
      <React.Fragment>
        <div className="home">
          <div>
            <InputNumber defaultValue={0} value={this.state.count} onChange={(e) => {this.setState({count: e})}} />
          </div>
          <div style={{ marginTop: '30px' }}>
            <Button onClick={() => {this.handleClick(false)}} type="primary">同步action</Button>
          </div>
          <div style={{marginTop: '30px'}}>
            <Button loading={countData.fetching} onClick={() => {this.handleClick(true)}} type="primary">异步action</Button>
          </div>
          <h1>{countData?.data}</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;