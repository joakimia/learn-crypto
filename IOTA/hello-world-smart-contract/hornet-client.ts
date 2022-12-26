import { HornetClient } from '@iota/hornet-client';

const hornet = new HornetClient({
  provider: 'http://localhost:14600'
});

async function connectToTangle() {
  try {
    await hornet.init();
    console.log('Connected to the Tangle!');
  } catch (error) {
    console.error(error);
  }
}

connectToTangle();
