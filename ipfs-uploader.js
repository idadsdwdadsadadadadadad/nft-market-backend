import { create } from 'kubo-rpc-client';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config("./.env");

const ipfs = create("http://127.0.0.1:5001")

export async function addJSONToIPFS(json) {
    try {
        const result = await ipfs.add(JSON.stringify(json));
        return result;
    } catch (error) {
        console.error('Failed to add JSON to IPFS:', error);
    }
}

export async function addFileToIPFS(filePath) {
    try {
        const file = fs.readFileSync(filePath);
        const result = await ipfs.add({ path: filePath, content: file });
        return result;
    } catch (error) {
        console.error('Failed to add file to IPFS:', error);
    }
}

// console.log(await addJSONToIPFS({ name: "name" })); 