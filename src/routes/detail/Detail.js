import React, { Component } from 'react'
import './Detail.css';
import { Collapse } from 'antd';
import StateHook from './statehook/StateHook';
import EffectHook from './effecthook/EffectHook';
import ContextHook from './contexthook/ContextHook';

class Detail extends Component {

  compArr = [
    {
      header: 'state hook',
      key: '1',
      isActive: false,
      compInstance: ( <StateHook /> )
    },
    {
      header: 'effect hook',
      key: '2',
      isActive: false,
      compInstance: ( <EffectHook /> )
    },
    {
      header: 'context hook',
      key: '3',
      isActive: true,
      compInstance: ( <ContextHook /> )
    }
  ]

  render() {
    let activeArr = [];
    this.compArr.forEach(ele => {
      if(ele.isActive) {
        activeArr.push(ele.key);
      }
    });
    return (
      <div className="detail">
        <Collapse defaultActiveKey={activeArr}>
          {
            this.compArr.map(ele => {
              return (
                <Collapse.Panel header={ele.header} key={ele.key}>
                  { ele.compInstance }
                </Collapse.Panel>
              )
            })
          }
        </Collapse>
      </div>
    )
  }

}

export default Detail;