import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { Note } from '../shared/note.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  subscription: Subscription;

  constructor(private notesSvc: NotesService) { }

  ngOnInit() {
    this.subscription = this.notesSvc.notesChanged.subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      }
    );
    this.notes = this.notesSvc.getNotes();
  }


}
