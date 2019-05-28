import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;
  @Input() index: number;

  constructor(private router: Router,
              private noteSvc: NotesService) { }

  ngOnInit() {
  }

  onShow() {
    this.router.navigateByUrl('/' + this.index);
  }

  onEdit() {
    this.router.navigateByUrl('/' + this.index);
  }

  onRemove() {
    this.noteSvc.deleteNote(this.index);
    this.router.navigateByUrl('/');
  }

}
