
export default  {
    template: `
    <div :class="{
            'w-100 p-4 border rounded':true,
            'bg-white text-black border-gray-300': theme === 'light',
            'bg-gray-700 text-white border-gray-400': theme === 'dark'
        
        }">
         <h2 class="font-bold mb-2" v-if="$slots.heading">
            <slot name="heading"/>   
         </h2>

         <slot name="default"/>

         <footer class="border-gray-400 border-t mt-4 pt-2" v-if="$slots.footer">
            <slot name="footer"/>
         </footer>
    </div>  
    `,
    props: {
        theme: {
            Type: String,
            default: 'dark'
        }
    }
}