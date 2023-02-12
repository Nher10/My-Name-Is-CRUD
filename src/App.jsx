import React, { useState } from 'react'
import './App.css'
import ClickMePage from './components/ClickMePage'

const dummyData = [
  {
    id: 1,
    name: 'Juan DelaCruz',
    occupation: 'Engineer'
  },
  {
    id: 2,
    name: 'Maria Clara',
    occupation: 'Nurse'
  }
]

const App = () => {

  const [data, setData] = useState(dummyData)

  const [editById, setEditById] = useState(null)

  const saveDataHandler = (id, editedData) => {
    setData(prevData => prevData.map(item => (item.id === id ? { ...item, ...editedData } : item)));
  }

  const deleteDataHandler = (dataId) => {
      setData((prevData) => {
      return prevData.filter((data) => data.id !== dataId);
    });
    console.log('hello')
  };

  const addDataHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <div>
      <ClickMePage 
      data={data}
      name={data.name}
      occupation={data.occupation}
      onDelete={deleteDataHandler}
      onAddData={addDataHandler}
      editById={editById}
      setEditById={setEditById}
      saveDataHandler={saveDataHandler}
      />
    </div>
  )
}

export default App
