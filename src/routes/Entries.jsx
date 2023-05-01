import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Entry from './Entry.jsx';
// import { useParams } from 'react-router';

// const testObjEntries = [
//   {
//     name: `Assassin's Creed II`,
//     // video game, movie, tv show, book, food, etc.
//     type: `Video Game`,
//     // tags: [{type: mongoose.Schema.Types.String}],
//     // tags: {type: [String], required: true},
//     description: `action-adventure video game developed by Ubisoft Montreal which takes place during the height of the Renaissance in Italy; second installment in the Assassin's Creed franchise`,
//     // author: {type: String},
//     year: 2009,
//     publisher: `Ubisoft`
//     entry_creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
//     entry_created: {type: Date, default: Date},
//     lastModified: {type: Date, default: Date}
//   },
// ]

const handleItemClick = () => {
  console.log('clicked item')
};

const Entries = ({ entries }) => {

  return (
    <div className='card-list'>
      <h2>The following entries matched your search:</h2>
      {entries.map(entry =>
        <a href={`/entries/${entry.id}`} className='entry-card list-item' onClick={handleItemClick}>
          <div className='list-item-text'>
            <h3>{entry.name}</h3>
            <h4>{entry.type}</h4>
          </div>
          <img src={entry.img} class='thumbnail'/>
        </a>
      )}
    </div>
  );
};

export default Entries;


// possible search tags:
// AC2: Florence, Venice, San Gimignano, Rome, Tuscany, Italy, Michelangelo, Leonardo Da Vinci, art, Renaissance, Medici, Brunelleschi, parkour
// Roman Holiday: Rome, Paramount, Oscar-winning, Audrey Hepburn, Gregory Peck, Bocca della Verita
// Gladiator: Rome, Oscar-winning, Russell Crowe, historical, epic, brutal, Orcia Valley, Val d'Orcia, Pienza, Siena, Tuscany, Italy, Colosseum
// Eat Pray Love: Julia Roberts, Javier Bardem, James Franco, New York, Naples, Rome, Italy, pizza, food, Bali, Indonesia, Delhi, India, meditation, inner peace, memoir, biographical
// Notting Hill: Julia Roberts, Hugh Grant, London, Notting Hill, Portobello Road Market, England, art, Chagall, romantic comedy
// Sherlock: crime, mystery, detective, Sherlock Holmes, Watson, Doyle, Benedict Cumberbatch, Martin Freeman, Baker Street, London, England, British, Adventures of Sherlock Holmes, modern
// Elementary: crime, mystery, detective, Sherlock Holmes, Watson, Doyle, Sir Arthur Conan Doyle, Jonny Lee Miller, Lucy Liu, New York, London, Adventures of Sherlock Holmes, modern
// When Harry Met Sally: New York, Meg Ryan, Billy Crystal, romantic comedy, romcom, friendship, love, Katz's Delicatessen, road trip
// Seinfeld: New York, biographical, comedy, sitcom, Jerry Seinfeld, Larry David, Monk's Cafe, Tom's Restaurant, funny
// The Godfather: crime, Oscar-winning, Marlon Brando, Al Pacino, mafia, gangster, brutal, New York, Sicily, Italy, Paramount
// Top Gun: Tom Cruise, Anthony Edwards, Meg Ryan, Val Kilmer, naval aviator, Navy, action, San Diego, dogfighting, F-14, volleyball, Paramount
// Top Gun: Maverick: Tom Cruise, Jennifer Connelly, Val Kilmer, Miles Teller, Glen Powell, Monica Barbaro, Jon Hamm, naval aviator, Navy, action, nostalgic, San Diego, dogfighting, F-18, F-14, football, Paramount
// Kansas City BBQ: San Diego, BBQ, barbecue, food, restaurant, Top Gun, Tom Cruise, Anthony Edwards, Meg Ryan
// Phil's BBQ: San Diego, BBQ, barbecue, restaurant, food, ribs
// Tacos El Gordo: San Diego, restaurant, food, Mexican, tacos
// Katz's Delicatessen: New York, deli, restaurant, When Harry Met Sally, Meg Ryan, Billy Crystal
// The Avengers: New York, superhero, Marvel, MCU, schwarma, Disney
// Tom's Restaurant: restaurant, food, cafe, Monk's Cafe, Seinfeld
// Henry V: London, England, France, Shakespeare, historical, play, history play, British
// The Adventures of Sherlock Holmes: crime, mystery, detective, Sherlock Holmes, Watson, Doyle, Baker Street, London, England, British
// Mary Poppins: London, magical, P.L. Travers, children's book, fantasy, England, British
// Mary Poppins: London, magical, Oscar-winning, Julie Andrews, Dick Van Dyke, England, fantasy, British
// Mission: Impossible: Tom Cruise, Chicago, Drake Hotel, action, spy, Prague, Czech Republic, London, Liverpool Street, England
// Mission: Impossible III: Tom Cruise, action, spy, Rome, Vatican, Berlin, Germany, Chesapeake Bay Bridge–Tunnel, Virginia