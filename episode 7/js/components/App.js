
import assignments from './Assignments.js';
import Panel from './Panel.js';

export default {

    components: {assignments, Panel},

    template: `
    <div class="grid gap-5 m-5">
        <assignments></assignments>
    </div>
    `,

}