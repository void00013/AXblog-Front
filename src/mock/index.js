const Mock = require('mockjs')

// 设置数据在几秒之后请求回去，模拟实际接口的等待状态
Mock.setup({ timeout: '1000' })

// ************blog接口**************
// mock数据不能用postman在外面请求？
Mock.mock('/mock/blog/typelist', 'get', {
  code: 200,
  data: [
    {
      typeId: 1,
      typeTitle: '前端',
      typeIco: '/static/blog/编程/前端/前端.png'
    },
    {
      typeId: 2,
      typeTitle: '后端',
      typeIco: '/static/blog/编程/后端/后端.png'
    },
    {
      typeId: 3,
      typeTitle: '嵌入式',
      typeIco: '/static/blog/编程/嵌入式/嵌入式.png'
    },
    {
      typeId: 4,
      typeTitle: 'c语言',
      typeIco: '/static/blog/编程/c语言/c语言.png'
    },
    {
      typeId: 5,
      typeTitle: 'python',
      typeIco: '/static/blog/编程/python/python.png'
    },
    {
      typeId: 6,
      typeTitle: '电子',
      typeIco: '/static/blog/电子/电子.png'
    },
    {
      typeId: 7,
      typeTitle: '机械',
      typeIco: '/static/blog/机械/机械.png'
    },
    {
      typeId: 8,
      typeTitle: '数学',
      typeIco: '/static/blog/数学/数学.png'
    },
    {
      typeId: 9,
      typeTitle: '哲学',
      typeIco: '/static/blog/哲学/哲学.png'
    }
  ]
})

// ***********article接口************
Mock.mock('/mock/articleList/前端', 'get', {
  code: 200,
  typeId: 1,
  data: [
    {
      articleId: 1,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
    },
    {
      articleId: 10,
      articleTitle: '第十篇博客',
      articleBriefly: '这是我的第十篇博客哦'
    },
    {
      articleId: 11,
      articleTitle: '第十一篇博客',
      articleBriefly: '这是我的第十一篇博客哦'
    }
  ]
})

Mock.mock('/mock/articleList/后端', 'get', {
  code: 200,
  typeId: 2,
  data: [
    {
      articleId: 2,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/嵌入式', 'get', {
  code: 200,
  typeId: 3,
  data: [
    {
      articleId: 3,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/c语言', 'get', {
  code: 200,
  typeId: 4,
  data: [
    {
      articleId: 4,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/python', 'get', {
  code: 200,
  typeId: 5,
  data: [
    {
      articleId: 5,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/电子', 'get', {
  code: 200,
  typeId: 6,
  data: [
    {
      articleId: 6,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/机械', 'get', {
  code: 200,
  typeId: 7,
  data: [
    {
      articleId: 7,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/数学', 'get', {
  code: 200,
  typeId: 8,
  data: [
    {
      articleId: 8,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/articleList/哲学', 'get', {
  code: 200,
  typeId: 9,
  data: [
    {
      articleId: 9,
      articleTitle: '第一篇博客',
      articleBriefly: '这是我的第一篇博客哦'
      // articleText:
      //   '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
    }
  ]
})

Mock.mock('/mock/article/1', 'get', {
  code: 200,
  data: {
    typeId: 1,
    articleId: 1,
    articleTitle: '第一篇博客',
    articleBriefly: '这是我的第一篇博客哦',
    articleText:
      '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
  }
})

Mock.mock('/mock/article/10', 'get', {
  code: 200,
  data: {
    typeId: 1,
    articleId: 10,
    articleTitle: '第十篇博客',
    articleBriefly: '这是我的第十篇博客哦',
    articleText:
      '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
  }
})

Mock.mock('/mock/article/11', 'get', {
  code: 200,
  data: {
    typeId: 1,
    articleId: 11,
    articleTitle: '第十一篇博客',
    articleBriefly: '这是我的第十一篇博客哦',
    articleText:
      '文章包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。'
  }
})

// ***********works接口**********
// 作品类型列表
Mock.mock('/mock/works/typelist', 'get', {
  code: 200,
  msg: '作品类型列表请求成功',
  data: [
    {
      typeId: 1,
      typeTitle: '前端',
      typeIco: '/static/blog/编程/前端/前端.png'
    },
    {
      typeId: 2,
      typeTitle: '后端',
      typeIco: '/static/blog/编程/后端/后端.png'
    },
    {
      typeId: 3,
      typeTitle: '嵌入式',
      typeIco: '/static/blog/编程/嵌入式/嵌入式.png'
    }
  ]
})

// 作品列表
Mock.mock('/mock/works/workslist', 'get', {
  code: 200,
  msg: '请求成功',
  data: [
    {
      id: 1,
      cover: '',
      title: ''
    }
  ]
})

// 作品详情
Mock.mock('/mock/works/前端', 'get', {
  code: 200,
  msg: '请求成功',
  data: [
    {
      id: 1,
      cover: '/static/作品/前端/vmusic/1.png',
      title: 'v音乐',
      description: '一个仿网易云音乐的网站',
      displayList: [
        {
          num: 1,
          img: '/static/作品/前端/vmusic/1.png',
          tip: '文本1'
        },
        {
          num: 2,
          img: '/static/作品/前端/vmusic/2.png',
          tip: '文本2'
        },
        {
          num: 3,
          img: '/static/作品/前端/vmusic/3.png',
          tip: '文本3'
        },
        {
          num: 4,
          img: '/static/作品/前端/vmusic/4.png',
          tip: '文本4'
        },
        {
          num: 5,
          img: '/static/作品/前端/vmusic/5.png',
          tip: '文本5'
        },
        {
          num: 6,
          img: '/static/作品/前端/vmusic/6.png',
          tip: '文本6'
        },
        {
          num: 7,
          img: '/static/作品/前端/vmusic/7.png',
          tip: '文本7'
        },
        {
          num: 8,
          img: '/static/作品/前端/vmusic/8.png',
          tip: '文本8'
        }
      ]
    },
    {
      id: 2,
      cover: '/static/作品/前端/大事件后台管理系统/2.png',
      title: '大事件后台管理系统',
      description: '一个发布文章的后台管理系统',
      displayList: [
        {
          num: 1,
          img: '/static/作品/前端/大事件后台管理系统/1.png',
          tip: '文本1'
        },
        {
          num: 2,
          img: '/static/作品/前端/大事件后台管理系统/2.png',
          tip: '文本2'
        },
        {
          num: 3,
          img: '/static/作品/前端/大事件后台管理系统/3.png',
          tip: '文本3'
        },
        {
          num: 4,
          img: '/static/作品/前端/大事件后台管理系统/4.png',
          tip: '文本4'
        },
        {
          num: 5,
          img: '/static/作品/前端/大事件后台管理系统/5.png',
          tip: '文本5'
        },
        {
          num: 6,
          img: '/static/作品/前端/大事件后台管理系统/6.png',
          tip: '文本6'
        },
        {
          num: 7,
          img: '/static/作品/前端/大事件后台管理系统/7.png',
          tip: '文本7'
        },
        {
          num: 8,
          img: '/static/作品/前端/大事件后台管理系统/8.png',
          tip: '文本8'
        }
      ]
    },
    {
      id: 3,
      cover: '/static/作品/前端/蛋糕管理平台/3.png',
      title: '蛋糕管理平台',
      description: '某个蛋糕店网站的管理后台',
      displayList: [
        {
          num: 1,
          img: '/static/作品/前端/蛋糕管理平台/1.png',
          tip: '文本1'
        },
        {
          num: 2,
          img: '/static/作品/前端/蛋糕管理平台/2.png',
          tip: '文本2'
        },
        {
          num: 3,
          img: '/static/作品/前端/蛋糕管理平台/3.png',
          tip: '文本3'
        },
        {
          num: 4,
          img: '/static/作品/前端/蛋糕管理平台/4.png',
          tip: '文本4'
        },
        {
          num: 5,
          img: '/static/作品/前端/蛋糕管理平台/5.png',
          tip: '文本5'
        }
      ]
    },
    {
      id: 4,
      cover: '/static/作品/前端/电商后台管理系统/5.png',
      title: '电商后台管理系统',
      description: '一个简易的电商后台管理系统',
      displayList: [
        {
          num: 1,
          img: '/static/作品/前端/电商后台管理系统/1.png',
          tip: '文本1'
        },
        {
          num: 2,
          img: '/static/作品/前端/电商后台管理系统/2.png',
          tip: '文本2'
        },
        {
          num: 3,
          img: '/static/作品/前端/电商后台管理系统/3.png',
          tip: '文本3'
        },
        {
          num: 4,
          img: '/static/作品/前端/电商后台管理系统/4.png',
          tip: '文本4'
        },
        {
          num: 5,
          img: '/static/作品/前端/电商后台管理系统/5.png',
          tip: '文本5'
        }
      ]
    }
  ]
})
