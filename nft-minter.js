import { ethers, JsonRpcProvider } from "ethers";
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config("./.env");

export async function mint(address, uri) {
    const provider = new JsonRpcProvider("http://127.0.0.1:8545");
    const signer = await provider.getSigner()

    const MyNFTAbi = JSON.parse(fs.readFileSync('./abis/MyNFT.json'));
    const MyNFTContract = new ethers.Contract("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", MyNFTAbi, signer);

    const result = await MyNFTContract.connect(signer).safeMint(address, uri);
    console.log(result.hash);
}

mint('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'https://ipfs.io/ipfs/QmZ4tj')