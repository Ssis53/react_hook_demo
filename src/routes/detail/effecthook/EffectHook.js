import React, { useState, useEffect } from 'react'
import { Button, Statistic } from 'antd';

const EffectHook = (porps) => {
  const [ count, setCount ] = useState(53);
  const [ info, setInfo ] = useState({age: 25, name: 'ss'});
  console.log(count, info);
  useEffect(() => {
    console.log('useEffect1 执行了');
  }, [info.name]);
  
  useEffect(() => {
    console.log('useEffect2 执行了');
  });
  return (
    <div className="effectHookTest">
      <div>
        <Button onClick={() => {setCount(count * 2); setInfo({age: info.age + 1, name: 'sss'})}} type="primary">加加</Button>
      </div>
      <div style={{marginTop: '20px'}}>
        <Statistic title="数量" value={count} />
      </div>
      <div>
        {info.name}|{info.age}
      </div>
    </div>
  )
}

export default  EffectHook;