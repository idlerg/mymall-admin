// 引入的不是Vue 构造函数，引入的是 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// $mount
// createApp(App).mount('#app')
// 创建应用实例对象 --app(类似于之前Vue2中的vm.但是app比vm更轻)
const app = createApp(App)
// 挂载
app.mount('#app')

// 取消挂载
// setInterval(() => {
//     app.unmount('#app')
// }, 1000);
console.log(app);
// const vm = new Vue({
//     render:(h) => h(App)
// })
// vm.$mount('#app')