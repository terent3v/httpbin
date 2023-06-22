import React, { useContext } from 'react';
import SendRequestButton from '../SendRequestButton/SendRequestButton';
import { LogsDispatchContext } from '../LogsProvider/LogsProvider';

function Get() {
  const dispatchLog = useContext(LogsDispatchContext);
  async function handleClick() {
    const url = 'https://httpbin.org/get';
    try {
      if (dispatchLog) {
        dispatchLog({
          type: 'add',
          payload: {
            method: 'GET',
            date: new Date(),
            url: url,
          }
        })
      }
      const response = await fetch(url, {
        method: 'GET',
      });
      console.log('Успех!');
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  }

  return (
    <div className='get page'>
      <SendRequestButton onClick={handleClick}>
        Send GET Request
      </SendRequestButton>
    </div>
  )
}

export default Get;