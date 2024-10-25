// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import inject from "@rollup/plugin-inject";



export default {
  plugins: [
    inject({   // => that should be first under plugins array
        $: 'jquery',
        jQuery: 'jquery',
        }),
    Inspect()
  ],
  
}

