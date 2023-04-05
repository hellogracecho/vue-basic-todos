export default {
    template: `
        <li class="py-2 flex space-x-2">
            <input type="checkbox" :name="todo.id" :id="todo.id" v-model="todo.complete">
            <label :for="todo.id">{{ todo.name }}</label>
        </li>
    `,
    props: {
        todo: Object
    }
}