import React, { createContext, useReducer, PropsWithChildren } from "react";

export type Log = {
  date: Date,
  method: string,
  url: string,
}

type AddLogAction = {
  type: string,
  payload: Log,
}

type Props = {};
type LogsProviderProps = PropsWithChildren<Props>;

export const LogsContext = createContext<Log[] | null>(null);
export const LogsDispatchContext = createContext<React.Dispatch<AddLogAction> | null>(null);

const initialState: Log[] = [];
const logsReducer = (logs: Log[], action: AddLogAction) => {
  switch (action.type) {
    case 'add':
      return [...logs, {
        date: action.payload.date,
        method: action.payload.method,
        url: action.payload.url,
      }];

    default: {
      throw Error('Неизвестный action ' + action.type);
    }
  }
}

const LogsProvider: React.FC<LogsProviderProps> = (props) => {
  const [logs, dispatch] = useReducer(logsReducer, initialState);

  return (
    <LogsContext.Provider value={logs}>
      <LogsDispatchContext.Provider value={dispatch}>
        {props.children}
      </LogsDispatchContext.Provider>
    </LogsContext.Provider >
  )
}

export default LogsProvider;