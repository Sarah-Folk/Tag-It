import React from 'react';
import { MdClose } from 'react-icons/md';
import './Tags.css';

const Tag = ({ tag, uId, handleRemove, handleErr }) => (
  <div className='tag'>
    <span>{tag}</span>
    <span className='close-button' onClick={() => {
      handleRemove(uId);
      handleErr();
      }}>
      <MdClose />
    </span>
  </div>
);

export default Tag;