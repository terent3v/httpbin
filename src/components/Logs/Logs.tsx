import React, { useContext, useState } from "react";
import { LogsContext } from "../LogsProvider/LogsProvider";
import './Logs.css';

function Logs() {
  const logs = useContext(LogsContext);
  const [isOpen, setIsOpen] = useState(true);
  const buttonText = isOpen ? 'Сollapse' : 'Expand';
  const contentClass = isOpen ? 'logs-content open' : 'logs-content closed';

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="logs">
      <div className="logs-title">
        <h2>Logs</h2>
        <button
          className="collapse-button"
          type='button'
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
      <div className={contentClass}>
        <div className="logs-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Method</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {logs && logs.map(el => (
                <tr key={el.date.toISOString()}>
                  <td>{el.date.toLocaleString('ru-RU')}</td>
                  <td>{el.method}</td>
                  <td>{el.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Logs;