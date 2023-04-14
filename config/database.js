if(process.env.NODE_ENV === 'production'){localhost
  module.exports = {mongoURI: 'mongodb://CHANGEME'}
} else {
  module.exports = {mongoURI: 'mongodb:///dev-camper-dev'}
}