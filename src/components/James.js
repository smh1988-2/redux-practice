import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToJames } from "../slices/jamesSlice";

function James() {

const dispatch = useDispatch();
const getJames = useSelector((state) => state.james)
console.log(getJames)

function handleJames(e){
    e.preventDefault();
    // console.log(e)
    let newObj = {
        name: e.target[0].value
    }
    // console.log(newObj)
    dispatch(addToJames(newObj))
}

  return (
    <form onSubmit={(e) => {
        handleJames(e)
    }}>
        <input type="text" placeholder="not james"></input>
    <button >Submit</button>
    </form>
  )
}

export default James