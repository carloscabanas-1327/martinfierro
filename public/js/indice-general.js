/* Resultados del índice inmediatamente debajo del campo de búsqueda. */
(function () {
  function iniciar() {
    const input=document.getElementById('mf-buscar-directorio');
    const estado=document.getElementById('mf-buscar-estado');
    const resultados=document.getElementById('mf-resultados-directos');
    if(!input||!estado||!resultados)return;
    const filas=Array.from(document.querySelectorAll('[data-indice-item]'));
    const grupos=Array.from(document.querySelectorAll('.mf-directorio-grupo,.mf-directorio-parte'));
    const normalizar=v=>String(v||'').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const datos=filas.map(fila=>{
      const enlace=fila.querySelector('a[href]');
      return {fila,enlace,texto:normalizar(fila.getAttribute('data-indice-text')||fila.textContent),titulo:enlace?.textContent?.trim()||'',href:enlace?.getAttribute('href')||''};
    });
    function filtrar(){
      const terms=normalizar(input.value.trim()).split(/\s+/).filter(Boolean);
      resultados.replaceChildren();
      resultados.hidden=!terms.length;
      let encontrados=0;
      for(const dato of datos){
        const match=terms.every(term=>dato.texto.includes(term));
        dato.fila.hidden=terms.length>0&&!match;
        if(!match||!terms.length||!dato.href)continue;
        encontrados++;
        const li=document.createElement('li');
        const a=document.createElement('a');
        a.href=dato.href;
        a.textContent=dato.titulo;
        li.appendChild(a);
        resultados.appendChild(li);
      }
      for(const grupo of grupos){
        grupo.hidden=terms.length>0&&!Array.from(grupo.querySelectorAll('[data-indice-item]')).some(li=>!li.hidden);
      }
      estado.textContent=terms.length
        ? encontrados===1?'1 resultado, debajo del buscador.':encontrados+' resultados, debajo del buscador.'
        :'Escribí para buscar enlaces de este índice.';
    }
    input.addEventListener('input',filtrar);
    input.addEventListener('search',filtrar);
    filtrar();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar,{once:true});
  else iniciar();
})();