import React, { useState } from 'react';
import { useParams } from 'react-router';
import Tags from '../Tags.jsx';

const Entry = ({ entries }) => {
  // const [tags, setTags] = useState([]);
  const { id } = useParams();
  let entry = {};
  let maxTagCount = '50';

  console.log('id??', id);

  if (id) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].id == id) {
        entry = entries[i];
      }
    }
    if (!Object.keys(entry).length) {
      throw new Error;
    }
  }

  const [tags, setTags] = useState(entry.tags);
  const [err, setErr] = useState('');

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleTags =  (event) => {
    if (event.key === 'Enter') {
      const lowerCased = tags.map(tag => tag.toLowerCase());
      let withoutPunctuation = event.target.value.replace(/[.,\/#!$%\^&\*\"?;:{}=\_`~()]/g,'');
      event.target.value = withoutPunctuation.replace(/\s{2,}/g,' ').trim();
      let lowerCasedValue = event.target.value.toLowerCase();

      if (event.target.value !== '' && tags.length < maxTagCount && !lowerCased.includes(lowerCasedValue)) {
        setTags([...tags, event.target.value]);
        event.target.value = '';
      } else if (event.target.value == '') {
        setErr('Tag cannot be blank');
      } else if (tags.length >= maxTagCount) {
        setErr('Maximum number of tags reached');
      } else if (lowerCased.includes(lowerCasedValue)) {
        setErr('Tag already exists; please enter a new tag');
      }
    } else if (event.key === 'Backspace') {
      if (tags.length && event.target.value.trim() == 0) {
        event.preventDefault();
        const tagsCopy = [...tags];
        tagsCopy.pop();
        setTags(tagsCopy);
      } else if (tags.length < 1) {
        setErr('No tags to delete; try creating a tag first.');
      }
    }
  };

  const handleRemove = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  const handleErr = () => {
    setErr('');
  }







  // const assignTags = () => {

  // };

  const VisualMedia = () => (
    <div>
      <h2>{entry.name}</h2>
      <img src={entry.img}/>
      <h3>{entry.type}{` \u2022 `}{entry.publisher}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
      <Tags maxTagCount={maxTagCount} tags={tags} err={err} handleTags={handleTags} handleRemove={handleRemove} handleErr={handleErr} />
    </div>
  );

  const Play = () => (
    <div>
      <h2>{entry.name}</h2>
      <img src={entry.img}/>
      <h3>{entry.type}{` \u2022 `}{`Written by ${entry.author}`}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
      <Tags maxTagCount='50' tags={entry.tags} err={err} handleTags={handleTags} handleRemove={handleRemove} handleErr={handleErr} />
    </div>
  );

  const Book = () => (
    <div>
      <h2>{entry.name}</h2>
      <img src={entry.img}/>
      <h3>{entry.type}{` \u2022 `}{`Written by ${entry.author}`}{` \u2022 `}{`Published by ${entry.publisher}`}{` \u2022 `}{entry.year}</h3>
      <p>{entry.description}</p>
      <Tags maxTagCount='50' tags={entry.tags} err={err} handleTags={handleTags} handleRemove={handleRemove} handleErr={handleErr} />
    </div>
  );

  const Restaurant = () => (
    <div>
      <h2>{entry.name}</h2>
      <img src={entry.img}/>
      <h3>{entry.type}</h3>
      <p>{entry.description}</p>
      <Tags maxTagCount='50' tags={entry.tags} err={err} handleTags={handleTags} handleRemove={handleRemove} handleErr={handleErr} />
    </div>
  );

  return (
    <div className='entry-card detail'>
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