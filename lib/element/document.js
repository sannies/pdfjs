'use strict'

var ContainerStyle = require('../style/container')
var PDF = require('../pdf')

var Document = module.exports = function(opts) {
  Document.super_.call(this, require('../pdf/nodes/document'))

  opts        = opts || {}
  opts.width  = opts.width  || 612
  opts.height = opts.height || 792

  this.style  = new ContainerStyle(opts)
}

require('../pdf/utils').inherits(Document, require('./container'))

Document.prototype.render = function() {
  return new PDF(this.createNode(this))
}