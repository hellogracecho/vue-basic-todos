import TodoItem from './TodoItem.js'
import TodoTags from './TodoTags.js'

export default {
    components: { TodoItem, TodoTags },
    template: `
    <section class="w-80 h-72 overflow-auto">
        <h2 class="mb-2 font-bold">
            {{ title }}
            <span>({{ todos.length }})</span>
        </h2>
        <div v-if="todos.length" >
            <todo-tags
                :initial-tags="todos.map(a => a.tag)"
                :currentTag="currentTag"
                @changeTag="currentTag = $event"
            />
            <ul class="px-3 border rounded-lg divide-y">
                <todo-item
                    v-for="todo in filteredTodos"
                    :key="todo.id"
                    :todo="todo"
                ></todo-item>
            </ul>
        </div>
    </section>
    `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        todos: Array,
        title: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.todos.map( todo => todo.tag ))];
        }, 
        filteredTodos() {
            if (this.currentTag === 'all') {
                return this.todos;
            }
            return this.todos.filter(todo => todo.tag == this.currentTag );
        }
    }
}