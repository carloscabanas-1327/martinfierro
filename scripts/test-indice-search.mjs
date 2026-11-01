import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=readFileSync('dist/indice-general/index.html','utf8');
assert.match(html,/id="mf-resultados-directos"/);
assert.match(html,/El Moreno de la payada/);
assert.match(html,/negro del baile/);
assert.match(html,/hombre negro/);

assert.ok(existsSync('dist/js/indice-general.js'));
const js=readFileSync('dist/js/indice-general.js','utf8');
function element(tag='li'){
 return {tag,hidden:false,children:[],textContent:'',href:'',listeners:{},appendChild(e){this.children.push(e)},replaceChildren(){this.children=[]},addEventListener(ev,fn){this.listeners[ev]=fn},getAttribute(n){return this[n]}};
}
const input=element('input');input.value='';
const estado=element('p');
const resultados=element('ul');
const makeFila=(title,desc,href)=>{
 const a=element('a');a.textContent=title;a.href=href;
 const f=element('li');f['data-indice-text']=title+' '+desc;f.querySelector=()=>a;return f;
};
const filas=[makeFila('Don Vizcacha','Tutor de hijo menor','/personajes/#don-vizcacha'),makeFila('La frontera','Historia','/temas/frontera/'),makeFila('La vuelta · Canto 12','Lectura','/leer/vuelta/12/')];
const grupos=[{hidden:false,querySelectorAll(){return filas.slice(0,2)}},{hidden:false,querySelectorAll(){return filas.slice(2)}}];
const document={readyState:'complete',getElementById(id){return {'mf-buscar-directorio':input,'mf-buscar-estado':estado,'mf-resultados-directos':resultados}[id]},querySelectorAll(sel){return sel==='[data-indice-item]'?filas:grupos},createElement:element};
vm.runInNewContext(js,{document,Array,String});
assert.equal(resultados.children.length,0);
input.value='vizcacha';input.listeners.input();
assert.equal(resultados.children.length,1);
assert.equal(resultados.children[0].children[0].href,'/personajes/#don-vizcacha');
input.value='CANTO 12';input.listeners.input();
assert.equal(resultados.children.length,1);
assert.equal(resultados.children[0].children[0].href,'/leer/vuelta/12/');
input.value='frontera';input.listeners.input();
assert.equal(resultados.children.length,1);
input.value='';input.listeners.input();
assert.equal(resultados.children.length,0);
assert.equal(filas.filter(f=>!f.hidden).length,3);
console.log('OK: resultados debajo del campo, Vizcacha, cantos, limpieza');
