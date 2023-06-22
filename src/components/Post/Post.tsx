import React, { useContext } from 'react';
import SendRequestButton from '../SendRequestButton/SendRequestButton';
import { LogsDispatchContext } from '../LogsProvider/LogsProvider';

function Post() {
  const dispatchLog = useContext(LogsDispatchContext);
  async function handleClick() {
    const url = 'https://httpbin.org/post';
    try {
      if (dispatchLog) {
        dispatchLog({
          type: 'add',
          payload: {
            method: 'POST',
            date: new Date(),
            url: url,
          }
        })
      }
      const response = await fetch(url, {
        method: 'POST',
      });
      console.log('Успех!');
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  }

  return (
    <div className='post page'>
      <SendRequestButton onClick={handleClick}>
        Send POST Request
      </SendRequestButton>
    </div>
  )
}

export default Post;