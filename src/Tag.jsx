import React from 'react';
import { MdClose } from 'react-icons/md';
import './Tags.css';

const Tag = ({ tag, index, handleRemoveTagClick, handleErr }) => (
  <div className='tag'>
    <span>{tag}</span>
    <span className='close-button' onClick={() => {
      handleRemoveTagClick(index);
      handleErr();
      }}>
      <MdClose />
    </span>
  </div>
);

export default Tag;