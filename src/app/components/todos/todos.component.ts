import { Component, OnInit } from '@angular/core';
import{ Todo } from './models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inpuTodo:string ="";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Певое дело',
        completed: false
      },
      {
        content: 'Второе дело',
        completed: false
      }
    ]
  }
toggleDone (id: number){
  this.todos.map((v, i)=>{
    if (i == id) v.completed = !v.completed;

    return v;
  }) 
}
deleteTodo (id:number) {
  this.todos = this.todos.filter((v, i) => i !== id);
}

addTodo () {
  this.todos.push({
    content: this.inpuTodo,
    completed:false
  });

  this.inpuTodo = "";
}
}
