import React from 'react'

const Update = (props) => {

  const handleDelete = () => {
    props.onDelete(props.id);
    console.log('hello')
  }

  // const handleEdit = () => {
  //   props.setEditById(props.id)

  //   // const editedValues = {
  //   //   name: props.name,
  //   //   occupatiion: props.occupation
  //   // }

  //   // props.setSaveEditData(editedValues)
  // }

  return (
  <>
    <td className='read-editDelete__button'>
      <button className='read-Edit__button' onClick={() => props.onEdit(props.data.filter(data => data.id === props.id)[0])}>Edit</button>
    </td>
    <td className='read-editDelete__button'>
      <button className='read-Delete__button'onClick={() => handleDelete()}>Delete</button>
    </td>
  </>
  )
}

export default Update
