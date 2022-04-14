import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import question1 from '../components/question1'

Vue.use(Router)
    const routes=[{
            path:'/',
            name:"HelloWorld",
            component:HelloWorld
        },
        {
            path:'/question1',
            name:"question1",
            component:question1
        },
        
        ]

        let router=new Router({routes})
        export default router