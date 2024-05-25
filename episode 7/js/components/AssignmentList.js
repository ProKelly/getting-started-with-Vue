
import assignment from './Assignment.js';
import assignmentTags from './AssignmentTags.js';
import Panel from './Panel.js';

export default {
    components: {assignment, assignmentTags, Panel},
    template: `
    <panel v-show="show && assignments.length" class="w-100">
    <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
        {{title}}
        <span>({{assignments.length}})</span>
        </h2> 

        <button v-show="canToggle" @click="show = false">&times;</button>
    </div>  

   <assignmentTags
    :initialTags="this.assignments.map(a=>a.tag)"
    v-model:currentTag="currentTag"
    />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    
    <ul class="border border-gray-600 divide-y divide-gray-600">
        <assignment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        v-for="assignment in filteredAssignments"
        :key='assignment.id'
        :assignment="assignment">
        
        </assignment>
    </ul>
    <slot> </slot>

    <template #footer>
        footer goes here
    </template>
    </panel>
    
    `, 
    props: { //props are used to define varibles or properties that should be passed when making use of this component
        assignments:Array,
        title:String,
        canToggle: {
            Type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            currentTag: 'all',
            show: true,
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