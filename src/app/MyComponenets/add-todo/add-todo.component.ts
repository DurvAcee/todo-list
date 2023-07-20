import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    title: string;
    desc: string;
    @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

    onSubmit(){
      const todo = {
          sno: 8,
          title: this.title,
          desc: this.desc,
          active: true
        }

        if(!this.title){
          console.log('Add the Details');
        } else {
          this.todoAdd.emit(todo);
        }
    }

    clearInputs() {
      this.title = '';
      this.desc = '';
    }
}
