import React, { useState } from 'react';
import { Button, Statistic } from 'antd';

const StateHook = function(props) {
  const [ count, setCount ] = useState({data: 5300, text: 'ws'});
  console.log(count);
  return (
    <div className="stateHookTest">
      <div>
        <Button onClick={() => setCount({data: 5300 + 1000, text: 'www'})} type="primary">加加</Button>
      </div>
      <div style={{marginTop: '20px'}}>
        <Statistic title="数量" value={count.data} />
      </div>
    </div>
  )
}

export default StateHook;