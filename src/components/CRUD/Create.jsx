import React, { useState } from 'react'
import './Create.css'
import Read from './Read'
import FormControl from '../UI/FormControl'

const Create = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredOccupation, setEnteredOccupation] = useState("");
  const [isValid, setIsValid] = useState(true)

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setIsValid(true)
  };

  const occupationChangeHandler = (e) => {
    setEnteredOccupation(e.target.value);
    setIsValid(true)
  };

  const submitHandler = (event) => {
    event.preventDefault()
  
    const info = {
      name: enteredName,
      occupation: enteredOccupation,
    }
  
    if (enteredName.length < 3 || enteredOccupation.length < 3) {
      setIsValid(false);
      return;
    }
  
    props.onSaveData(info);
    setEnteredName("");
    setEnteredOccupation("");
  }

  return (
  <>
  <div className='create-page__container'>
    <div className='create'>
      <h2 className='create-heading'>Create</h2>
    </div>
    <FormControl onSubmit={submitHandler} invalid={!isValid}>
      <div>
        <label htmlFor="for-name">Name</label>
        <input id='for-name' 
               type="text"
               onChange={nameChangeHandler}
               value={enteredName}
               />
      </div>
      <div>
        <label htmlFor="for-occupation">Occupation</label>
        <input id='for-email' 
               type='text'
               onChange={occupationChangeHandler}
               value={enteredOccupation}
               />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </FormControl>
  </div>

  {
    <Read 
    data={props.data}
    name={props.name}
    occupation={props.occupation}
    onDelete={props.onDelete}
    editById={props.editById}
    setEditById={props.setEditById}
    editDataHandler={props.editDataHandler}
    saveDataHandler={props.saveDataHandler}
    />
   }
  </>
  )
}

export default Create
