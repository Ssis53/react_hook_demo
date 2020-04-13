import React, { Component } from 'react'
import './Detail.css';
import { Collapse } from 'antd';
import StateHook from './statehook/StateHook';
import EffectHook from './effecthook/EffectHook';

class Detail extends Component {

  render() {
    return (
      <div className="detail">
        <Collapse defaultActiveKey={['1', '2']}>
          <Collapse.Panel header="state hook" key="1">
            <StateHook />
          </Collapse.Panel>
          <Collapse.Panel header="effect hook" key="2">
            <EffectHook />
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }

}

export default Detail;