export default {
    template: `
    <li>
            <label class='p-3 flex justify-between items-center'>
                {{ assignment.name }}
    
                <input type="checkbox" v-model="assignment.completed" class='ml-5'>
            </label>
        </li>
    `,
    props: {
        assignment: {
            Type: Object,
        }
    }
}