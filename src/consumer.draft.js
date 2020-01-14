const { sluggerify } = require('./index')
const log = require('@ajar/marker')

log.blue(sluggerify('hello my name is ohad', 'what is your name', 'how are you doing?'))