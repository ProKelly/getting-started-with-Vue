import assignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {assignmentList, AssignmentCreate},
    template: `

    <section class="space-y-6">
        <assignmentList :assignments="incompletedAssigments" title="In Progress"></assignmentList>
        <assignmentList :assignments="completedAssigments" title="Completed"></assignmentList>
        
        <assignment-create @add='add'></assignment-create>
    </section>

`, 
data() {
    return {
        assignments: [
            {name: 'Finish Project', completed:false, id:1},
            {name: 'Read chapter 4', completed:false, id:2},
            {name: 'Turn in Assignments', completed:false, id:3},
        ], 
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
    add(name) {
       this.assignments.push({
        name: name,
        completed:false,
        id:this.assignments.length + 1
       }
       )
    }
}


}