const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const WalletController = require('./src/controllers/WalletController');
const initWallet = require('./src/helpers/initWalet');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = parseInt(process.env.PORT || 5200, 10);

/* configure port to app */
app.set('port', port);


/* Configure routes */
let wallet = {};
app.post('/api/v1/join-contest', (req, res) => {
  const { entryFee, discount } = req.body;
  if (!entryFee && !discount)
    return res.status(400).json({ message: 'entryFee & discount are required fields' });

  const walletController = new WalletController();

  const result = walletController.deductEntryFee(wallet, entryFee, discount)
  return res.status(200).json(result);
})

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Bind onError and onListening handler
 */
server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`); // eslint-disable-line no-console
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`); // eslint-disable-line no-console
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});

function start(done) {
  wallet = initWallet();
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, done);
}

function lower(done) {
  server.close(done);
}

module.exports = {
  lower,
  start,
  default: app
};