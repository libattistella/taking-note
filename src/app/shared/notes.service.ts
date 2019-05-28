import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesChanged = new Subject<Note[]>();
  notes: Note[] = [{
    title: 'Titulo 1',
    description: 'Descripcion 1',
    color: '#10dc60'
  },
  {
    title: 'Titulo 2',
    description: 'Descripcion 2',
    color: '#7044ff'
  },
  {
    title: 'Titulo 3',
    description: 'Descripcion 3',
    color: '#f04141'
  },
  {
    title: 'Titulo 4',
    description: 'Descripcion 4',
    color: '#3880ff'
  },
  {
    title: 'Titulo 5',
    description: 'Descripcion 5',
    color: '#ffce00'
  },
  {
    title: 'Titulo 6',
    description: 'Descripcion 6',
    color: '#3880ff'
  },
  {
    title: 'Titulo 7',
    description: 'Descripcion 7',
    color: '#ff8000'
  }];

  constructor() { }

  getNotes() {
    return this.notes.slice();
  }

  getNote(index: number) {
    return {...this.notes[index]};
  }

  addNote(note: Note) {
    this.notes.unshift(note);
    this.notesChanged.next(this.notes.slice());
  }

  updateNote(index: number, note: Note) {
    this.notes[index] = note;
    this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }
}
