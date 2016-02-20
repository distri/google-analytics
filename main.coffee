module.exports =
  init: (id) ->
    require "./lib/analytics"

    global.ga('create', id, 'auto')
    global.ga('send', 'pageview')
