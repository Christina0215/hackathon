import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';


const components = [
    'button',
    'icon',
    'details',
    'skeleton',
    'card',
    'input',
    'select',
    'option',
    'checkbox',
    'alert',
    'dialog',
    'tag',
    'dropdown',
    'menu',
    'menu-item'
];

export function initShoelace() {
    setBasePath('./shoelace/');
    
    components.forEach(component => {
        import(`@shoelace-style/shoelace/dist/components/${component}/${component}.js`);
    });
} 