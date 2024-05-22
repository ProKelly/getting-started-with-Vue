

export default {
    template: `
    <form @submit.prevent='add'>
        <div class="border border-gray-600">
            <input v-model='newAssignment' type="text" placeholder="new assignment..." class="text-black p-2"/>
            <button type="submit" class="py-2 px-5 bg-gray-700">Add</button>
        </div>
    </form>

    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
         }
    }
}