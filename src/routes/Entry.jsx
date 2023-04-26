import React from 'react';
import { useParams } from 'react-router';


// const testObj = {
//   1: 'firstentrytest',
//   2: 'secondentrytest'
// };

  // const { entry_id } = useParams();

  // console.log('id??', entry_id);



const Entry = ({ entry }) => {

  const VisualMedia = () => (
    <div>
      <h2>{entry.name}</h2>
      <h3>{entry.type}{` \u2022 `}{entry.publisher}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
    </div>
  );

  const Play = () => (
    <div>
      <h2>{entry.name}</h2>
      <h3>{entry.type}{` \u2022 `}{`Written by ${entry.author}`}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
    </div>
  );

  const Book = () => (
    <div>
      <h2>{entry.name}</h2>
      <h3>{entry.type}{` \u2022 `}{`Written by ${entry.author}`}{` \u2022 `}{`Published by ${entry.publisher}`}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
    </div>
  );

  const Restaurant = () => (
    <div>
      <h2>{entry.name}</h2>
      <h3>{entry.type}</h3>
      <p>{entry.description}</p>
    </div>
  );

  return (
    <div className='entryCard'>
      {entry.type === 'Video Game' || entry.type === 'Movie' || entry.type === 'TV Show' ?
        <VisualMedia /> :
        null
      }
      {entry.type === 'Play' ?
        <Play /> :
        null
      }
      {entry.type === 'Book' ?
        <Book /> :
        null
      }
      {entry.type === 'Restaurant' ?
        <Restaurant /> :
        null
      }
    </div>
  )
};

export default Entry;



// entryName: {type: String, required: true},
// // video game, movie, tv show, book, food, etc.
// type: {type: String, enum: allowedTypes, required: true},
// tags: [{type: mongoose.Schema.Types.String}],
// // tags: {type: [String], required: true},
// description: {type: String, required: true},
// author: {type: String},
// year: {type: Number},
// creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
// created: {type: Date, default: Date},
// lastModified: {type: Date, default: Date}
// // related:
// // comments:



    // <div>Hello world from inside entry!! {testObj[entry_id]}</div>


  //   <div>
  //   <h2>{entry.name}</h2>
  //   {entry.year ?
  //   <h3>{entry.type}{` \u2022 `}{entry.year}</h3> :
  //   <h3>{entry.type}</h3>}
  //   <p>{entry.description}</p>
  //   {publisher ?
  //   <
  //   :

  //   }
  // </div>


    // const entryElements = [];

  // const keysAndValues = Object.entries(entry)
  // for (const [key, value] of Object.entries(entry)) {
  //   // console.log(`${key}: ${value}`);
  //   // console.log('end of one entry')
  //   // entryElements.push(`${key}: ${value}`)


  // }


        // <div>{`Hello World ${entry.type}`}</div>
      // : {entry.type === 'Book' ? <div>{`Hello World ${entry.type}`}</div> : null}