import React from 'react';
import Button from '../button/Button';

function Poster() {
  const fetchedUrl = "https://picsum.photos/seed/picsum/1300/300?grayscale";
  return (
    <div style={{'--image-url': `url(${fetchedUrl})`}} className=" bg-[image:var(--image-url)] max-w-[1240px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl">
        <div className="flex justify-end  mt-10  py-20 rounded-lg max-md:mt-10 max-md:pr-5" >
        <Button name="Shop Now" location='/shop' textSize='sm' />
        </div>
    </div>
  )
}

export default Poster