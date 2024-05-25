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
            {name: 'Finish Project', completed:false, id:1, tag:'math'},
            {name: 'Read chapter 4', completed:false, id:2, tag:'science'},
            {name: 'Turn in Assignments', completed:false, id:3, tag:'engineering'},
        ], 
    };
},
computed: { //computed methods depend on other varibles in the application
    incompletedAssigments() {
        return this.assignments.filter(a => !a.completed)
    },
    completedAssigments() {
        return this.assignments.filter(a => a.completed)
    }, 
},
methods: {
    add(name) { //the name varible input is used to to specify that the'res a value from the child that was emited ($emit)
       this.assignments.push({
        name: name,
        completed:false,
        id:this.assignments.length + 1
       }
       )
    }
}


}