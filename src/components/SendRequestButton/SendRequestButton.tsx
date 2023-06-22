import React, { PropsWithChildren } from "react";
import './SendRequestButton.css';

type Props = {
  onClick: () => void,
}
type SendRequestButtonProps = PropsWithChildren<Props>;

function SendRequestButton(props: SendRequestButtonProps) {
  return (
    <button
      className="send-request-button"
      type='button'
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default SendRequestButton;