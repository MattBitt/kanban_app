import React from 'react';
import Notes from './Notes';

import uuid from 'uuid';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: [
                {
                  id: uuid.v4(),
                  task: 'Learn React today'
                },
                {
                  id: uuid.v4(),
                  task: 'Do laundry'
                }
            ]
        };
      }
      render() {
          const {notes} = this.state;
          
          return (
          <div>
            <button className="add-note" onClick={this.addNote}>+</button>
            <Notes 
            notes={notes} 
            onDelete={this.deleteNote} 
            onEdit={this.editNote}
            onNoteClick={this.activateNoteEdit}
            />
          </div>
        );
      }
      addNote = () => {
          this.setState({
              notes: this.state.notes.concat([{
                  id : uuid.v4(),
                  task: 'New Task'
              }])
          });
      }
      
      deleteNote = (id, e) => {
          this.setState({
              notes: this.state.notes.filter(note => note.id != id)
          });
      }
      
      activateNoteEdit = (id) => {
          this.setState({
              notes: this.state.notes.map(note => {
                  if(note.id === id) {
                      note.editing = true;
                  }
                  
                  return note;
              })
          });
      }
      
      editNote = (id, task) => {
          this.setState({
              notes: this.state.notes.map(note => {
                  if(note.id === id) {
                      note.task = task;
                      note.editing = false;
                  }
                  
                  return note;
              })
          });
      }
}