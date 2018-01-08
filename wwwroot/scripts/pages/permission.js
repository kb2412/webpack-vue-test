
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(function(to, from, next) {
  NProgress.start()
  next()
  NProgress.done()
})

router.afterEach(function() {
  NProgress.done()
})
