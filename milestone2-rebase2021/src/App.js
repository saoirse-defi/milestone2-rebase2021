import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';



function App() {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes')
        .then(res => {
            setCards(res.data['data']);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    };

    const filteredCards = cards.filter(card => 
        card.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="card-app">
      <h1>Yugioh Deck Builder</h1>
      <div className='card-search'>
          Search:
          <form>
              <input type='text' placeholder='Search a Yugioh card...' 
              className='card-input' onChange={handleChange}/>
          </form>
      </div>
      {filteredCards.map(card => {
          return <Card 
            key={card.id}
            image={card['card_images'][0]['image_url']}
            name={card.name}
            level={card.level}
            type = {card.type}
            atk = {card.atk}
            def = {card.def}
            race = {card.race}
            attribute = {card.attribute}
            desc = {card.desc}
          />
      })}
    </div>
  );
}

export default App;
