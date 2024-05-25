
export default {
    template:`
    <div class="flex gap-2">
        <button 
        @click="$emit('update:currentTag', tag)"
        class="border border-gray-600 bg-gray-700 rounded px-2 py-2 mb-2 text-8" 
        :class="{
            'border-blue-500 text-blue-500': tag === currentTag
        }"
        v-for="tag in tags">{{tag}}</button>
    </div>       
    `,
    props: {
        initialTags: {
            Type: Array,
        },
        currentTag: String, // modelValue is the default prop name when using v-model on a custom component
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
          }
    },
}