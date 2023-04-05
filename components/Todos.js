import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';

export default {
    components: { TodoList, TodoCreate },
    template: `
    <div class="grid gap-6 grid-cols-2">
        <todo-create @add="add" />
        <todo-list :todos="filters.inProgress" title="In Progress"></todo-list>
        <todo-list :todos="filters.completed" title="Completed"></todo-list>
    </div>
    `,
    data() {
        return {
            todos: [],
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.todos.filter(todo => !todo.complete),
                completed: this.todos.filter(todo => todo.complete)
            }
        }
    },
    created() {
        fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todos => {
            this.todos = todos;
        })
    },
    methods: {
        add(newTodo) {
            this.todos.push({
                id: ++this.todos.length, name: newTodo, complete: false
            });
        }
    }
}