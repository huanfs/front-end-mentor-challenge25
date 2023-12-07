
import './App.css'
import logo from "../public/images/logo.svg";
import Track from "./components/track.jsx"; 
function App() {

  return (
    <>
    <header>
      <div className="balance">
        <p>my balance</p>
        <h1>$954,99</h1>
      </div>
      <img src={logo}/>
    </header>
    <main>
      <h2>spending - last 7 days</h2>
      <article>
        <Track ammount={60} day="mon" id={1}/>
        <Track ammount={20} day="tue" id={2}/>
        <Track ammount={90} day="wed" id={3}/>
        <Track ammount={10} day="thu" id={4}/>
        <Track ammount={50} day="fri" id={5}/>
        <Track ammount={70} day="sat" id={6}/>
        <Track ammount={40} day="sun" id={0}/>
      </article>
      <footer>
        <div className="total">
          <p>total this month</p>
          <h3>$340,00</h3>
        </div>
        <div className="economy">
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
