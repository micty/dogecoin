
# dogecoin
------------------------------------------------


本工具用来暴力破解已知钱包地址对应的私钥，可离线运行。

具体为：先随机生成狗狗币的私钥、地址和助记词，并对比已知的钱包地址，如果匹配，则表示找到对应的私钥。


在首次运行之前，先运行 `npm install` 以进行安装依赖包。

在命令行窗口运行 `node index.js` 即可运行。


为了提高命中率，建议尽量多搜集已知的持币地址，并添加到 `list.json` 中。
同时，在运行时，可以打开多个窗口进行运行，每次都完全是随机的。
如果命中，则会打印私钥并停止运行，并且保存到当前目录。

如果你发财了，可以打赏一些狗狗币给我，我的狗狗币钱包地址：

`DEc438qToEbDtfva2NXoh3iKZHCiHjrrCQ`

祝你好运。

``` js

import * as fs from 'fs';
import genDogeKey from '@definetool/dogecoin';
import mapper from './list.js';

let randomIndex = Math.floor(Math.random() * 100);
let obj = {};


for (let i = 0; i < 9999 * 365 * 24 * 3600 * 100; i++) {
    let { address, privateKey, mnemonic, } = await genDogeKey();

    // console.log(i, { address, privateKey, mnemonic, });
    console.log(i, privateKey);


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



```