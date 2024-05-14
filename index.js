
import * as fs from 'fs';
import genDogeKey from '@definetool/dogecoin';
import mapper from './list.js';


let randomIndex = Math.floor(Math.random() * 100);
let obj = {};


for (let i = 0; i < 9999 * 365 * 24 * 3600 * 100; i++) {
    let { address, privateKey, mnemonic, } = await genDogeKey();

    // if (obj[privateKey]) {
    //     throw new Error('已存在私钥:',privateKey);
    // }
    // obj[privateKey] = true;



    // //test
    // if (i == randomIndex) {
    //     mapper.set(address, 100);
    // }

    // console.log(i, { address, privateKey, mnemonic, });
    console.log(i, privateKey);
    
    // break;


    if (mapper.has(address)) {
        console.log('\u001b[32m-------------------恭喜发财，找到私钥-------------------\u001b[39m:');
        console.log(privateKey);
        console.log('\u001b[32m--------------------------------------------------------\u001b[39m:');

        let file = `./found-${Date.now()}-${privateKey}.json`;
        let json = { address, privateKey, mnemonic, };

        fs.writeFileSync(file, JSON.stringify(json, null, 4));

        break;
    }

}