import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigateByUrl('/' + this.index);
  }

}
