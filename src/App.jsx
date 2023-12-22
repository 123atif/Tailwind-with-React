import React from 'react';
import Header from "./Component/Header"
import Body from "./Component/Body"
import Footer from "./Component/Footer"

function App() {
  return (
    <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
export default App;