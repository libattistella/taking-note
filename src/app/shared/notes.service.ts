import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesChanged = new Subject<Note[]>();
  notes: Note[] = [];

  constructor() {
    this.notes = Object.values(JSON.parse(localStorage.getItem('notes')) || {});
  }

  getNotes() {
    return this.notes.slice();
  }

  getNote(index: number) {
    return {...this.notes[index]};
  }

  addNote(note: Note) {
    this.notes.unshift(note);
    localStorage.setItem('notes', JSON.stringify({...this.notes}));
    this.notesChanged.next(this.notes.slice());
  }

  updateNote(index: number, note: Note) {
    this.notes[index] = note;
    localStorage.setItem('notes', JSON.stringify({...this.notes}));
    this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify({...this.notes}));
    this.notesChanged.next(this.notes.slice());
  }
}
