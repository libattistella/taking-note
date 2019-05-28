import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../shared/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note = {
    title: '',
    description: '',
    color: ''
  };
  noteForm: FormGroup;

  constructor(private noteSvc: NotesService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.note = {
      title: '',
      description: '',
      color: ''
    };
    this.noteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.note.title = this.noteForm.controls.title.value;
    this.note.description = this.noteForm.controls.description.value;
    console.log(this.note);
    this.noteSvc.addNote(this.note);
    this.initForm();
  }

  onCancel() {
    this.initForm();
  }

  setColorBlue() {
    this.note.color = '#3880ff';
  }

  setColorRed() {
    this.note.color = '#f04141';
  }

  setColorYellow() {
    this.note.color = '#ffce00';
  }

  setColorGreen() {
    this.note.color = '#10dc60';
  }

  setColorOrange() {
    this.note.color = '#ff8000';
  }

  setColorPurple() {
    this.note.color = '#7044ff';
  }

}
