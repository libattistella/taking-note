import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { TruncateTextPipe } from './shared/truncate-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteItemComponent,
    NoteEditComponent,
    NoteAddComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
