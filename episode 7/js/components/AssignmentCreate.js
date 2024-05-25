

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
            this.$emit('add', this.newAssignment); //$emit is used to hold the new assignment so that it can be accesed by the parent component which is Assignments.js
            //the name 'add' will be used as @add='' in the parent to reference the the method to be executed to to access the change in the assignment
            this.newAssignment = ''; 
         }
    }
}