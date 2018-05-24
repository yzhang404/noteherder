import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [] || this.retrieveLocal(),
    }
  }

  retrieveLocal = () =>{
        localStorage.getItem('notes')
        return this.setState({notes: localStorage.getItem('notes' || [])})
  }
  saveToLocal = (notes) =>{
      localStorage.setItem('notes',JSON.stringify(notes))
      console.log('hi'+localStorage.getItem('notes'))
  }
  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]
    if(note.id){
    const i = notes.findIndex(currentNote => currentNote.id === note.id)
    notes[i] = note
    } else{
        note.id = Date.now()
        notes.push(note)
    }
    this.setState({ notes, currentNote: note })
    this.saveToLocal(notes)
    console.log(notes)
  }
  deleteCurrentNote = (note) =>{
    const notes = [...this.state.notes]
    const index = notes.findIndex(currentNote => currentNote.title === note.title && currentNote.body === note.body)
    notes.splice(index,1)
    this.setState({notes, currentNote: this.blankNote()})
    this.saveToLocal(notes)
  }

  render() {
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          resetCurrentNote = {this.resetCurrentNote}
          deleteCurrentNote = {this.deleteCurrentNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main