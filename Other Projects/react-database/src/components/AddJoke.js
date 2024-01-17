import React, { useRef } from 'react';
import styles from "./AddJoke.module.css";

function AddJoke(props) {
  const typeRef = useRef("");
  const setupRef = useRef("");
  const punchlineRef = useRef("");

  function submit(e){
    e.preventDefault();
    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value
    };
    props.onAddJoke(joke);
  }
  return (
    <form onSubmit={submit}>
      <div className={styles.control}>
        <label htmlFor='type'>Type</label>
        <input type='text' id='type' ref={typeRef}></input>
      </div>
      <div className={styles.control}>
        <label htmlFor='setup'>Setup</label>
        <textarea rows={5} type="text" id='setup' ref={setupRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor='punchline'>Punchline</label>
        <textarea rows={5} type="text" id='punchline' ref={punchlineRef}></textarea>
      <button>Add</button>
      </div>
    </form>
  )
}

export default AddJoke;