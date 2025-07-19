import React from "react";

const UserProducts = (props) => {
  return (
    <>
      <div className="flex flex-row gap-2 justify-between px-2 items-center sm:px-1 py-4 rounded-2xl">
        
          <img src={props.image} alt="product img" className="h-15 rounded" />
          
            <p>{props.name}</p>
            <p>{props.price}</p>
          
        
        
          <button className="bg-purple-500 px-5 py-1 rounded-full cursor-pointer hover:opacity-80">
            Delete
          </button>
        </div>
    </>
  );
};

export default UserProducts;
