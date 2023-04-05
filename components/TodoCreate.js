export default {
    template: `
        <form @submit.prevent="add" class="col-span-full">
            <input 
                @input="disableButton = !newTodo"
                v-model="newTodo"
                type="text" 
                placeholder="add a new TODO..." 
                class="p-2 border rounded-lg"
            />
            <button 
                type="submit" 
                class="ml-2 p-2 bg-purple-500 hover:bg-purple-700 text-white rounded-lg"
                :class="{ '!bg-gray-400' : disableButton }"
                :disabled="disableButton"
            >
                Add
            </button>
        </form>
    `,
    data() {
        return {
            newTodo: '',
            disableButton: !this.newTodo,
        }
    },
    methods: {
        add() {
            // From child to parent, you are emitting event
            this.$emit('add', this.newTodo);

            this.newTodo = '';
            this.disableButton = true;
        }
    }
}