// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import inject from "@rollup/plugin-inject";


export default {
    base: '/Website24/',
    assetsInclude: ['**/*.stl', '**/*.obj', '**/*.mtl',  '**/*.jpg'],
    plugins: [
        inject({   // => that should be first under plugins array
            $: 'jquery',
            jQuery: 'jquery',
            }),
    Inspect()
  ],
  
}

