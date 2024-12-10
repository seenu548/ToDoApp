import { Observable } from '@nativescript/core';
import { TodoItem } from './todo.model';

class TodoListService extends Observable {
    constructor() {
        super();
        this.items = [];
    }

    addTodo(title) {
        const todo = new TodoItem(title);
        this.items.push(todo);
        this.notifyPropertyChange('items', this.items);
    }

    toggleTodo(id) {
        const todo = this.items.find(item => item.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.notifyPropertyChange('items', this.items);
        }
    }

    deleteTodo(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.notifyPropertyChange('items', this.items);
    }
}

export const todoService = new TodoListService();