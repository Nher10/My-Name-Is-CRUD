import React, {useState } from 'react'
import './Read.css'
import UpdateAndDelete from './UpdateAndDelete'

const Read = (props) => {

  const [editData, setEditData] = useState({ name: '', occupation: '' });

  const handleEdit = (data) => {
    setEditData({ name: data.name, occupation: data.occupation });
    props.setEditById(data.id);
  }

  const handleSave = (id) => {
    props.saveDataHandler(id, editData);
    setEditData({ name: '', occupation: '' });
    props.setEditById(null);
  }

  return (
    <div className='read-page__container'>
    <div className='read'>
      <h2 className='read-heading'>Read</h2>
    </div>
    <table className='read-table'>
      <thead className='read-table__head'>
        <tr className='read-table__main'>
          <th>Name</th>
          <th>Occupation</th>
          <th colSpan={2} style={{textAlign: 'center'}}>Actions</th>
          {/* <th></th> */}
        </tr>
      </thead>
            {
            props.data.length > 0 ?
            props.data.map((data, idx) => 
            (<tbody className='read-table__body' key={idx} >
              {
              props.editById === data.id ? 
              (<tr>
                <td className='read-values'>
                  <input type="text"
                    className='read-toEdit__Input' 
                    required='required'
                    placeholder='Enter a name...'
                    name='name'
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                </td>
                <td className='read-values'>
                  <input type="text"
                    className='read-toEdit__Input' 
                    required='required'
                    placeholder='Enter an occupation...'
                    name='occupation'
                    value={editData.occupation}
                    onChange={(e) => setEditData({ ...editData, occupation: e.target.value })}
                  />
                </td>
                <td>
                  <button type='button' className='read-toSave__button' onClick={() => handleSave(data.id)}>Save</button>
                </td>
              </tr>)  : 
              
              <tr className='read-tableBody__values'>
                <td className='read-values'>{data.name}</td>
                <td className='read-values'>{data.occupation}</td>
                <UpdateAndDelete 
                id={data.id}
                data={props.data}
                name={props.name}
                occupation={props.occupation}
                onDelete={props.onDelete}
                setEditById={props.setEditById}
                onEdit={handleEdit}
                />
              </tr>
              }
            </tbody>)) : <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td style={{textAlign: 'end'}}>Create</td>
                            <td style={{textAlign: 'start'}}>First</td>
                         </tr>
            }

    </table>
  </div>
  )
}

export default Read
