import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hello, goodbye } from "../slices/greetingsSlice";
import { message } from "../slices/customGreetingSlice";
import { setLoading } from "../slices/uiSlice"

function HelloWorld() {
  const greetings = useSelector((state) => state.greeting.value);

  const messages = useSelector((state) => state.message.value)

  const ui = useSelector((state) => state.ui.value)


  const dispatch = useDispatch();

  useEffect(() => {
      setTimeout(() => dispatch(setLoading()), 2000)
  },[])

  return (
    <div>
      <button onClick={() => dispatch(hello())}>Say Hello</button>
      <br />
      <br />
      <button onClick={() => dispatch(goodbye())}>Say Goodbye</button>
      <br />
      <br />
      {greetings.map((greeting) => (
        <p>{greeting}</p>
      ))}
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(message(e.target[0].value || "no message"))
        }}
      >
        <input type="text"></input>
        <button>Submit custom greeting</button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}

      { ui.loading === true ? <p>loading!</p> : <p>not loading!</p> }

    </div>
  );
}

export default HelloWorld;
