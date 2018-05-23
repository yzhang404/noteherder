import React from 'react'
import './NoteForm.css'
const NoteForm = () =>{
    return (
        <div className="NoteForm"
        style={styles.noteForm}>
          <div className="form-actions"
          style={styles.formAction}>
            <button type="button"
            style={styles.button}>
              <i className="far fa-trash-alt"
              style={styles.buttonFa}></i>
            </button>
          </div>
          <form style={styles.form}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style={styles.input}
              />
            </p>
            
            <textarea name="body"
            style={styles.textArea}></textarea>
          </form>
        </div>
    )
}

const styles={
    //style the noteform
    noteForm:{
        msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem',
    },
    formAction:{
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '"-ms-flexbox"',
        display: 'flex',
        msFlexLinePack: 'center',
        alignContent: 'center',
    },
    button:{
        border: 'none',
        background: 'none',
        padding: '0',
        type: 'submit',
        backgroundColor: '#008bf8',
        borderRadius: '0.4rem',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem',
    },
    buttonFa:{
        color: '#999',
        fontSize: '2rem',
        margin: '0',
    },
    form:{
        margin: '0 auto',
        maxWidth: '80rem',
    },
    input:{
        border: 'none',
        fontSize: '200%',
        fontFamily: '"Fauna One"',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
    },
    textArea:{
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
    }
}
export default NoteForm