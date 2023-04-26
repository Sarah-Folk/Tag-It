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



const Entries = () => {
  const sampleEntries = [
    {
      name: `Assassin's Creed II`,
      type: `Video Game`,
      description: `action-adventure video game developed by Ubisoft Montreal which takes place during the height of the Renaissance in Italy; second installment in the Assassin's Creed franchise`,
      year: `2009`,
      publisher: `Ubisoft`
    },
    {
      name: `Roman Holiday`,
      type: `Movie`,
      description: `romantic comedy starring Audrey Hepburn and Gregory Peck set in Rome`,
      year: `1953`,
      publisher: `Paramount`
    },
    {
      name: `Gladiator`,
      type: `Movie`,
      description: `epic historical drama starring Russell Crowe`,
      year: `2000`,
      publisher: `Universal`
    },
    {
      name: `Eat Pray Love`,
      type: `Movie`,
      description: `biographical romantic drama starring Julia Roberts as author Elizabeth Gilbert`,
      year: `2010`,
      publisher: `Sony`
    },
    {
      name: `Notting Hill`,
      type: `Movie`,
      description: `romantic comedy starring Julia Roberts and Hugh Grant`,
      year: `1999`,
      publisher: `Universal`
    },
    {
      name: `Sherlock`,
      type: `TV Show`,
      description: `British mystery crime drama series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories`,
      year: `2010 - 2017`,
      publisher: `BBC`
    },
    {
      name: `Elementary`,
      type: `TV Show`,
      description: `Procedural crime drama series based on a contemporary imagining of Sir Arthur Conan Doyle's Sherlock Holmes detective stories set in New York`,
      year: `2012 - 2019`,
      publisher: `CBS`
    },
    {
      name: `When Harry Met Sally`,
      type: `Movie`,
      description: `romantic comedy starring Meg Ryan and Billy Crystal`,
      year: `1989`,
      publisher: `Columbia`
    },
    {
      name: `Seinfeld`,
      type: `TV Show`,
      description: `sitcom starring Jerry Seinfeld`,
      year: `1989 - 1998`,
      publisher: `Columbia`
    },
    {
      name: `The Godfather`,
      type: `Movie`,
      description: `crime film starring Marlon Brando`,
      year: `1972`,
      publisher: `Paramount`
    },
    {
      name: `Top Gun`,
      type: `Movie`,
      description: `action drama starring Tom Cruise`,
      year: `1986`,
      publisher: `Paramount`
    },
    {
      name: `Top Gun: Maverick`,
      type: `Movie`,
      description: `action drama starring Tom Cruise`,
      year: `2022`,
      publisher: `Paramount`
    },
    {
      name: `Kansas City BBQ`,
      type: `Restaurant`,
      description: `BBQ restaurant in San Diego where a scene from Top Gun was filmed`
    },
    {
      name: `Phil's BBQ`,
      type: `Restaurant`,
      description: `BBQ restaurant in San Diego`
    },
    {
      name: `Tacos El Gordo`,
      type: `Restaurant`,
      description: `Mexican restaurant in San Diego which serves amazing tacos and other Mexican fare`
    },
    {
      name: `Katz's Delicatessen`,
      type: `Restaurant`,
      description: `New York deli in which a famous scene from When Harry Met Sally was filmed`
    },
    {
      name: `The Avengers`,
      type: `Movie`,
      description: `Superhero film based on the Marvel comic books`,
      year: `2012`,
      publisher: `Disney`
    },
    {
      name: `Tom's Restaurant`,
      type: `Restaurant`,
      description: `New York restaurant known as Monk's Cafe in Seinfeld`
    },
    {
      name: `Henry V`,
      type: `Play`,
      description: `history play by William Shakespeare`,
      year: `1599`,
      author: `William Shakespeare`
    },
    {
      name: `The Adventures of Sherlock Holmes`,
      type: `Book`,
      description: `stories written by Sir Arthur Conan Doyle`,
      year: `1892`,
      author: `Sir Arthur Conan Doyle`,
      publisher: `George Newnes`
    },
    {
      name: `Mary Poppins`,
      type: `Book`,
      description: `children's book about a magical nanny written by P. L. Travers`,
      year: `1934`,
      author: `P. L. Travers`,
      publisher: `HarperCollins`
    },
    {
      name: `Mary Poppins`,
      type: `Movie`,
      description: `musical fantasy film based on the character created by P. L. Travers`,
      year: `1964`,
      publisher: `Disney`
    },
    {
      name: `Mission: Impossible III`,
      type: `Movie`,
      description: `action spy film starring Tom Cruise`,
      year: `2006`,
      publisher: `Paramount`
    },
    {
      name: `Mission: Impossible`,
      type: `Movie`,
      description: `action spy film starring Tom Cruise`,
      year: `1996`,
      publisher: `Paramount`
    }
  ];

  const [entries, setEntries] = useState(sampleEntries);



  return (
    <div>
      {entries.map(entry =>
        <Entry entry={entry} />
      )}
    </div>
    // <Entry entries={entries} />
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