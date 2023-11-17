import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const LikeButton = ({likes: numberOfLikes}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(numberOfLikes?.length);

  const toggleLike = () => {
    setLiked(liked => !liked);
    setLikes(liked ? (likes - 1) : (likes + 1))
  };

  return (
    <div>
      <Button className='bg-inherit' onClick={toggleLike} startContent={<span className='font-seminold text-orange'>{numberOfLikes?.length}</span>}>
        {
            liked ? <BsHeartFill color='deeppink' size={20} /> : <BsHeart size={20}/>
        }
      </Button>
    </div>
  );
};

export default LikeButton;





