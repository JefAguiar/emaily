var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'dklajdlkajlka' }, function(err, tunnel) {
  console.log('LT running')
});