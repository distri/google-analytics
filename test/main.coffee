mocha.globals("ga")

describe "analytics", ->
  it "should put analytics on the page", ->
    GA = require "../main"

    GA.init("UA-XXXX-Y")

  it "should be a chill bro", ->
    ga("send", "duder")
