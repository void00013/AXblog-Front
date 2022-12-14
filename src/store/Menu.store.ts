import { makeAutoObservable } from 'mobx'

class MenuStore {
  constructor() {
    makeAutoObservable(this)
  }
  menuList = [
    {
      img: '/static/menu/首页.png',
      text: '首页',
      route: '/'
    },
    {
      img: '/static/menu/Blog.png',
      text: '博客',
      route: '/blog'
    },
    {
      img: '/static/menu/github.png',
      text: 'Github',
      link: 'https://github.com/void00013'
    },
    {
      img: '/static/menu/作品.png',
      text: '作品',
      route: '/works'
    },
    {
      img: '/static/menu/工作.png',
      text: '工作',
      route: '/work'
    },
    {
      img: '/static/menu/简历.png',
      text: '简历',
      route: '/resume'
    },
    {
      img: '/static/menu/about.png',
      text: '关于',
      route: '/about'
    },
  ]
}

const menuStore = new MenuStore()

export default menuStore