'use strict'

class PageController {
  home({view}) {
    return view.render('pages/welcome')
  }
  contact({view}) {
    return view.render('pages/contact')
  }
  edge({view}) {
    let users = [
    {
      'name': 'Hendrick',
      'pages': 1,
    },
    {
      'name': 'Hendrick',
      'pages': 1,
    },
    {
      'name': 'Hendrick',
      'pages': 1,
    }
  
  ]
    return view.render('pages/learning', {users})
  }
}

module.exports = PageController
