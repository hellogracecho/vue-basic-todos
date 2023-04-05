import TodoItem from './TodoItem.js'
export default {
    components: { TodoItem },
    template: `
    <section class="w-80 h-72 overflow-auto">
        <h2 class="mb-2 font-bold">
            {{ title }}
            <span>({{ todos.length }})</span>
        </h2>
        <div v-if="todos.length" class="mb-4 flex gap-2">
            <button 
                @click="currentTag = tag"
                v-for="tag in tags"
                class="p-1.5 py-px rounded border border-purple-800 text-purple-800"
                :class="{
                    'bg-purple-800 text-white' : tag == currentTag
                }"
            >{{ tag }}</button>
        </div>
        <ul v-if="todos.length" class="px-3 border rounded-lg divide-y">
            <todo-item
                v-for="todo in filteredTodos"
                :key="todo.id"
                :todo="todo"
            ></todo-item>
        </ul>
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