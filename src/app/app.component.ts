import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'material-todo';
  showDialog: boolean = false;
  okButtonText: string = 'Create task';
  fieldValue: string = '';
  editingTodo: any = null;
  todoList: any[] = [];

  log(text) {
    console.log(text);
  }

  todoDialog(todo=null) {
    this.okButtonText = 'Create task';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edit task';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null;
  }
}
