import React, { useState } from 'react'
import Create from './CRUD/Create'
import Button from './UI/Button'

const ClickMePage = (props) => {

  const [isShowing, setIsShowing] = useState(false)
  const [createPage, setCreatePage] = useState('')
  const [createPageHandler, setCreatePageHandler] = useState(() => {
    return (currentPage) => {
      setIsShowing(true)
      setCreatePage(currentPage)
      }
    }
  )

  const saveDataHandler = (enteredData) => {
    const datus = {
      ...enteredData,
      id: Math.random().toString(),
    }

      props.onAddData(datus);
    };
  return (
   
    <div style={{height: '100%', 
                 width: '100%'}}>
    {
    !isShowing && ( 
      <div style={{height: '300px', 
                   width: '50%', 
                   margin: '50px auto',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   justifyContent: 'space-between'
                   }}>
          <h1 style={{ textAlign: 'center' }}>Hello! My name is CRUD and I am a combination of everything I have learned from Sir JM.</h1>
          <Button type='button' onClick={() => { createPageHandler('create') } }>Click Me</Button>
      </div>)
    }
    {
      isShowing && createPage == "create" &&
      <Create 
      data={props.data}
      name={props.name}
      occupation={props.occupation}
      onSaveData={saveDataHandler}
      onDelete={props.onDelete}
      editById={props.editById}
      setEditById={props.setEditById}
      setSaveEditData={props.setSaveEditData}
      editDataHandler={props.editDataHandler}
      saveDataHandler={props.saveDataHandler}
      />
    }
    </div>
  )
}


export default ClickMePage
