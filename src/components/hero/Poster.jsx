import React from 'react';
import Button from '../button/Button';

function Poster() {
  return (
    <div className=" bg-zinc-300 max-w-[1260px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl">
        <div className="flex justify-end  mt-10  py-20 rounded-lg max-md:mt-10 max-md:pr-5" >
        <Button name="Shop Now" location='/shop' />
        </div>
    </div>
  )
}

export default Poster