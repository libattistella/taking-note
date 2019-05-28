import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;
  noteForm: FormGroup;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private noteSvc: NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.note = this.noteSvc.getNote(this.id);
        console.log('Note', this.note);
        this.initForm();
      }
    );
  }

  initForm() {
    this.noteForm = new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      description: new FormControl(this.note.title, Validators.required)
    });
  }

  onSubmit() {
    this.note.title = this.noteForm.controls.title.value;
    this.note.description = this.noteForm.controls.description.value;
    console.log(this.note);
    this.noteSvc.updateNote(this.id, this.note);
    this.onCancel();
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

}
