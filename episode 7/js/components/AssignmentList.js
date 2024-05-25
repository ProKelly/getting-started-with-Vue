
import assignment from './Assignment.js';
import assignmentTags from './AssignmentTags.js';

export default {
    components: {assignment, assignmentTags},
    template: `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>   

   <assignmentTags
    :initialTags="this.assignments.map(a=>a.tag)"
    :currentTag="currentTag"
    @change="currentTag=$event"
    />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    
    <ul class="border border-gray-600 divide-y divide-gray-600">
        <assignment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        v-for="assignment in filteredAssignments"
        :key='assignment.id'
        :assignment="assignment">
        
        </assignment>
    </ul>
    </section>
    
    `, 
    props: {
        assignments:Array,
        title:String
    },
    data() {
        return {
            currentTag: 'all',
        }
    },
    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a=>a.tag === this.currentTag)
        },
    }
    
    }