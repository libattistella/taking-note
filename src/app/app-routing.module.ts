import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

const routes: Routes = [
  { path: '', component: NoteAddComponent, pathMatch: 'full' },
  { path: ':id', component: NoteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
