class BlockChain {
    constructor() {
        this.blockChain = [this.startGenesisBlock()];
    }

    startGenesisBlock() {
        return new Block({}); // create an empty block to start
    }

    obtainLastBlock() {
        return this.blockChain[this.blockChain.length - 1]; // Get last Block on the chain
    }

    addNewBlock(newBlock) {
        newBlock.prevHash = this.obtainLastBlock().hash;

        newBlock.hash = newBlock.computeHash();

        this.blockChain.push(newBlock); // add the block to our chain
    }

    checkChainValidity() {
        for(let i = 1; i < this.blockChain.length; i++) {
            const currBlock = this.blockChain[i];

            const prevBlock = this.blockChain[i - 1];

            
            if(currBlock.hash !== currBlock.computeHash()) {
                return false;
            }

            if(currBlock.prevHash !== prevBlock.hash) {
                return false;
            }
        }
        return false;
    }
}

let a = new Block({from: "matheus", to: "jane"});
let b = new Block({from: "jane", to: "matheus"});

let chain = new BlockChain() // inicia a blockchain

chain.addNewBlock(a);
chain.addNewBlock(b);

console.log(chain); // Print out the blockchain
console.log("Validity: " + chain.checkChainValidity()); //check our chain for validity