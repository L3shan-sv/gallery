var config = {}

config.mongoURI = {
  production: 'mongodb+srv://leshan:Leshan123@leshan123.wbimfdv.mongodb.net/darkroom?retryWrites=true&w=majority&appName=leshan123',
  development: 'mongodb+srv://leshan:Leshan123@leshan123.wbimfdv.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=leshan123',
  test: 'mongodb+srv://leshan:mypassword123@leshan123.wbimfdv.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=leshan123',
}

module.exports = config;
