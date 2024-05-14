

import * as fs from 'fs';

let list = fs.readFileSync('./list.json', 'utf8');

list = JSON.parse(list);



let mapper = new Map();


list.forEach((item, index) => {
    let { addr, balance, } = item;
    mapper.set(addr, balance);
});



export default mapper;