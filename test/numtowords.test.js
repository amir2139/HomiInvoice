const fs=require('fs'),assert=require('assert');
const h=fs.readFileSync(__dirname+'/../index.html','utf8');
const m=h.match(/\/\* ===== numtowords:start ===== \*\/([\s\S]*?)\/\* ===== numtowords:end ===== \*\//);
const f=new Function(m[1]+';return numberToPersianWords;')();
const cases={0:'صفر',15:'پانزده',101:'صد و یک',1000:'یک هزار',
1250000:'یک میلیون و دویست و پنجاه هزار',1000000000:'یک میلیارد'};
for(const k in cases){const r=f(+k);console.log(k,'=>',r);assert.strictEqual(r,cases[k]);}
console.log('OK');
