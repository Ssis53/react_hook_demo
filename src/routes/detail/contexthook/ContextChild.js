import React, { useContext } from 'react'
import { Button } from 'antd';
import { ThemesContext } from './ContextHook';

export default class ContextChild extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Context Child didUpdate')
  }
  
  render() {
    console.log('Context Child render')
    return (
      <React.Fragment>
        <ContextButton />
      </React.Fragment>
    )
  }
}

function ContextButton(props) {
  const theme = useContext(ThemesContext);
  console.log(theme);
  return (
    <div>
      <Button style={theme} type="primary">小巴腾</Button>
    </div>
  )
}