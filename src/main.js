import { createApp } from 'vue'
import App from './App'
import Components from '@/Components/UI';

const app = createApp(App);

// Components.forEach(component => {
//     app.component(component.name, component)
// });
console.log(Object.keys(Components).length)
for(let i=0; i<Object.keys(Components).length; i++){
    console.log(Components[Object.keys(Components)[i]])
    app.component(Components[Object.keys(Components)[i]].name, Components[Object.keys(Components)[i]])
}

app.mount('#app')