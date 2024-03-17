import * as $ from 'jquery'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotesComponent } from './components/notes/notes.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ButtonModule } from 'primeng/button';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { UpdateBookmarkComponent } from './components/update-bookmark/update-bookmark.component';
import { MenuModule } from 'primeng/menu';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SpeedDialModule } from 'primeng/speeddial';
import { OptionsComponent } from './components/options/options.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    AddNoteComponent,
    NoteCardComponent,
    UpdateNoteComponent,
    TodoCardComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    AddBookmarkComponent,
    UpdateBookmarkComponent,
    BookmarkCardComponent,
    OptionsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ScrollPanelModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputTextModule,
    AccordionModule,
    ButtonModule,
    MenuModule,
    OverlayPanelModule,
    ColorPickerModule,
    SpeedDialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
