import React from 'react';
import { MdClose } from 'react-icons/md';
import Tag from './Tag.jsx';
import './Tags.css';

const Tags = ({ maxTagCount }) => {
  const [tags, setTags] = React.useState([]);
  const [err, setErr] = React.useState('');

  const handleTags =  event => {
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

  const handleRemoveTagClick = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  const handleErr = () => {
    setErr('');
  }

return (
  <>
    <h1>Yay tags!!!</h1>
    <div className='tags'>
      {tags.map((tag, index) => (
          // <div className='tag' key={index}>
          //     <span>{tag}</span>
          //     <i
          //         onClick={() => removeTags(index)}
          //     >
          //         <MdClose />
          //     </i>
          // </div>
        <Tag tag={tag} index={index} handleRemoveTagClick={handleRemoveTagClick} handleErr={handleErr} />
      ))}
        <input type='text' placeholder='Type here to add a new tag' onChange={handleErr} onKeyDown={event => handleTags(event)} />
    </div>
    <div className='error'>
      {err}
    </div>
  </>
);
};
export default Tags;