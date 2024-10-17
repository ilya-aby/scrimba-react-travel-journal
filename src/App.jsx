import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      <div className="cards-container">
        {cards}
      </div>
    </div>
  )
}