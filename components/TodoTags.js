export default {
    template: `
        <div v-if="tags.length" class="mb-4 flex gap-2">
            <button 
                @click="$emit('update:modelValue', tag)"
                v-for="tag in tags"
                class="p-1.5 py-px rounded border border-purple-800"
                :class="{
                    'bg-purple-800 text-white' : tag == modelValue,
                    'text-purple-800' : tag != modelValue
                }"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        modelValue: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }, 
    },
}