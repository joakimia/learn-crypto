import { Client, ClientOptions } from "cardano-cli";

// Set up the client options
const options: ClientOptions = {
  nodeUrl: "http://localhost:8090",
};

// Create the client
const client = new Client(options);

// Define the message to store in the contract
const message = "Hello, World!";

// Deploy the contract to the blockchain
client.transaction
  .buildRaw({
    protocolMagic: 764824073,
    input: {
      specification: {
        proposal: {
          type: 0,
          implicit: [
            {
              keyhash: "ed25519_pk",
              certificate: [
                {
                  algorithm: 1,
                  issuer: "ed25519_pk",
                  signature: "ed25519_sig",
                },
              ],
            },
          ],
          certificate: [
            {
              algorithm: 1,
              issuer: "ed25519_pk",
              signature: "ed25519_sig",
            },
          ],
          expression: {
            slot_id: 0,
            unlock_height: 0,
          },
        },
      },
    },
    output: {
      specification: {
        data: {
          source: {
            file: "Message.sol",
          },
          contract_hash: "keccak256",
        },
      },
    },
  })
  .then((transaction) => {
    console.log("Transaction:", transaction);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
