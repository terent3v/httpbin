import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      Please visit any of these pages:{' '}
      <Link to='get'>Get</Link>,{' '}
      <Link to='post'>Post</Link>,{' '}
      <Link to='delete'>Delete</Link>
    </div>
  )
}

export default Home;