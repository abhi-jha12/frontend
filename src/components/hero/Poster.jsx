import React,{useContext} from 'react';
import Button from '../button/Button';

function Poster({btnname, posterimg, redirect }) {
  return (
    <div style={{ backgroundImage: `url(${posterimg})` }} className=" bg-[image:var(--image-url)] max-w-[1100px] h-[300px] w-full m-auto py-16 px-6 relative group rounded-2xl">
        <div className="flex justify-end  mt-10 py-20 rounded-lg max-md:mt-10 max-md:pr-5" >
        <Button name={btnname ?? "Empty button"} location={redirect ?? '/shop'} textSize='sm' />
        </div>
    </div>
  )
}

export default Poster