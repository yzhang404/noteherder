import React from 'react'

const Note = (props) => {
  return (
    <li className="Note">
      <div className="note">
        <div className="note-title">
          { props.note.title }
        </div>
        <div className="note-body">
          <p>
            { props.note.body }
          </p>
        </div>
      </div>
    </li>
  )
}

export default Note