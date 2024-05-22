import assignmentList from "./AssignmentList.js";

export default {
    components: {assignmentList},
    template: `

    <section class="space-y-6">
        <assignmentList :assignments="incompletedAssigments" title="In Progress"></assignmentList>
        <assignmentList :assignments="completedAssigments" title="Completed"></assignmentList>

        <form @submit.prevent='add'>
            <div class="border border-gray-600">
                <input v-model='newAssignment' type="text" placeholder="new assignment..." class="text-black p-2"/>
                <button type="submit" class="py-2 px-5 bg-gray-700">Add</button>
            </div>
        </form>
    </section>

`,
data() {
    return {
        assignments: [
            {name: 'Finish Project', completed:false, id:1},
            {name: 'Read chapter 4', completed:false, id:2},
            {name: 'Turn in Assignments', completed:false, id:3},
        ], 
        newAssignment: '',
    };
},
computed: {
    incompletedAssigments() {
        return this.assignments.filter(a => !a.completed)
    },
    completedAssigments() {
        return this.assignments.filter(a => a.completed)
    }, 
},
methods: {
    add() {
       this.assignments.push({
        name: this.newAssignment,
        completed:false,
        id:this.assignments.length + 1
       }
       )
       this.newAssignment = ''
    }
}


}