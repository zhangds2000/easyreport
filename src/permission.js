import router from './router'
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        router.go(-1)
    }
    else {
        next()
    }
    
})