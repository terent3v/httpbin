import React, { useContext } from 'react';
import SendRequestButton from '../SendRequestButton/SendRequestButton';
import { LogsDispatchContext } from '../LogsProvider/LogsProvider';

function Delete() {
  const dispatchLog = useContext(LogsDispatchContext);
  async function handleClick() {
    const url = 'https://httpbin.org/delete';
    try {
      if (dispatchLog) {
        dispatchLog({
          type: 'add',
          payload: {
            method: 'DELETE',
            date: new Date(),
            url: url,
          }
        })
      }
      const response = await fetch(url, {
        method: 'DELETE',
      });
      console.log('Успех!');
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  }

  return (
    <div className='delete page'>
      <SendRequestButton onClick={handleClick}>
        Send DELETE Request
      </SendRequestButton>
    </div>
  )
}

export default Delete;