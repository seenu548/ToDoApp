import { Observable } from '@nativescript/core';
import { todoService } from './shared/todo-list.service';

export function createViewModel() {
    const viewModel = new Observable();
    
    viewModel.todos = todoService.items;
    viewModel.newTodoText = "";

    viewModel.addTodo = () => {
        if (viewModel.newTodoText.trim()) {
            todoService.addTodo(viewModel.newTodoText.trim());
            viewModel.set("newTodoText", "");
        }
    };

    viewModel.toggleTodo = (args) => {
        const todo = todoService.items[args.index];
        todoService.toggleTodo(todo.id);
    };

    return viewModel;
}