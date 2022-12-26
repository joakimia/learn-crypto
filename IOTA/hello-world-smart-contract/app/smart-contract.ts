import { IOTA } from 'iota.lib.js';

const iota = new IOTA({
  'provider': 'https://nodes.comnet.thetangle.org:443'
});

const recipientAddress = 'RECEIVINGADDRESSGOESHERE';
const message = 'Hello, IOTA!';

const transfer = [{
  'address': recipientAddress,
  'value': 0,
  'message': iota.utils.toTrytes(message)
}];

iota.api.sendTransfer(seed, depth, minWeightMagnitude, transfer, (error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(success);
  }
});
