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
            todos: [
                { name: 'Lorem ipsum dolor sit', complete: false, id: 1, tag: 'tag1' },
                { name: 'ipsum dolor', complete: false, id: 2, tag: 'tag2' },
                { name: 'Consectetur adipisicing elit', complete: false, id: 3, tag: 'tag1' },
            ],
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
    methods: {
        add(newTodo) {
            this.todos.push({
                id: ++this.todos.length, name: newTodo, complete: false
            });
        }
    }
}