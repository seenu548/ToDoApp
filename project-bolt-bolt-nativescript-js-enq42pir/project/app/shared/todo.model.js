export class TodoItem {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
        this.id = Date.now().toString();
    }
}