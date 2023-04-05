export default {
    template: `
        <div v-if="tags.length" class="mb-4 flex gap-2">
            <button 
                v-for="tag in tags"
                class="p-1.5 py-px rounded border border-purple-800 text-purple-800"
                :class="{
                    'bg-purple-800 text-white' : tag == currentTag
                }"
                @click="$emit('changeTag', tag)"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }, 
    },
}