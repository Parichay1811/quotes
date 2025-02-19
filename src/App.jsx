import './App.css'
import Footer from './compnents/Footer/Footer'
import Nav from './compnents/Navbar/Nav'
import Card from './compnents/QuoteSection/Card'
import quotesData from './quotesData.json'

function App() {
  return (
    <>
      <Nav/>
      <div className="card_container">
        {quotesData.map((obj, idx) => (
          <Card key={idx} {...obj} />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default App
