const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname+'/../www/generated');

const N = 1000;
const steps = 1; // set a bigger value to emulate cascade (require.js could not handle)

for (let s = 0; s < steps; s++) {
  for (let i = 0; i < N; i++) {
    const name = `g${s}_${i}`
    let dep = '';
    if (s > 0) {
      dep = `'generated/g${s - 1}_${i}'`;
    }
    fs.writeFileSync(`${ROOT}/${name}.js`, `define([${dep}], function(x) { 
    return (x||0)+${i};
    })`);
  }
}

const deps = [];
const imports = [];
const S = steps-1;
for (let i = 0; i < N; i++) {
  deps.push(`'generated/g${S}_${i}'`);
  imports.push(`g${i}`);
}
fs.writeFileSync(`${ROOT}/index.js`, `define([${deps.join(',')}], 
function(${imports.join(',')}) { 
   return ${imports.join('+')} + 1;
})`);