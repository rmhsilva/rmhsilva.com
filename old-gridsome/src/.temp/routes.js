const c1 = () => import(/* webpackChunkName: "page--src--pages--writing-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/pages/Writing.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--essay-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/templates/Essay.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--book-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/templates/Book.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/pages/Books.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--archive-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/pages/Archive.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--templates--section-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/templates/Section.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ric/rmhs/dev/04-sw/ST003-rmhsilva-web/minimal-version/gridsome-foo/src/pages/Index.vue")

export default [
  {
    path: "/writing/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/w/:title/",
    component: c2
  },
  {
    path: "/book/:url/",
    component: c3
  },
  {
    path: "/books/",
    component: c4
  },
  {
    path: "/archive/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    path: "/:title/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
