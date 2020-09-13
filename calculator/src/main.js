import Vue from 'vue'
import App from './App'

new Vue({
    // el: '#app',
    // // render pega o componente e renderiza na página
    // render(createElement) {
    //     return createElement(App)
    // }

    // código abaixo tem a mesma funcionalidade que o código acima mas de forma mais simplificada, e é o código que já vem gerado ao criar uma aplicação via CLI
    render: h => h(App)
}).$mount("#app")