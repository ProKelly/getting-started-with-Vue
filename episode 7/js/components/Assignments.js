import assignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {assignmentList, AssignmentCreate},
    template: `

    <section class="flex gap-8">
        <assignmentList :assignments="incompletedAssigments" title="In Progress" >
        <assignment-create @add='add'></assignment-create>
        </assignmentList>
        <assignmentList :assignments="completedAssigments" title="Completed" canToggle="true"></assignmentList>

    </section>

`, 
data() {
    return {
        assignments: [], 
    };
},
created() {
    fetch('http://localhost:3001/assignments')
    .then(response => response.json())
    .then(assignments => {
        this.assignments = assignments;
    })
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