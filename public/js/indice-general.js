/* Búsqueda interna del índice: funciona sin dependencias, distingue títulos y cantos. */
(function () {
  function iniciar() {
    const input = document.getElementById('mf-buscar-directorio');
    const estado = document.getElementById('mf-buscar-estado');
    if (!input || !estado) return;
    const filas = Array.from(document.querySelectorAll('[data-indice-item]'));
    const grupos = Array.from(document.querySelectorAll('.mf-directorio-grupo, .mf-directorio-parte'));
    const normalizar = (valor) => String(valor || '').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    function filtrar() {
      const terminos = normalizar(input.value.trim()).split(/\s+/).filter(Boolean);
      let visibles = 0;
      for (const fila of filas) {
        const contenido = normalizar(fila.getAttribute('data-indice-text') || fila.textContent);
        const coincide = terminos.every((termino) => contenido.includes(termino));
        fila.hidden = !coincide;
        if (coincide) visibles++;
      }
      for (const grupo of grupos) {
        grupo.hidden = terminos.length > 0 && !Array.from(grupo.querySelectorAll('[data-indice-item]')).some((fila) => !fila.hidden);
      }
      estado.textContent = terminos.length
        ? (visibles === 1 ? '1 enlace encontrado.' : visibles + ' enlaces encontrados.')
        : 'Se muestran todos los enlaces del índice.';
    }
    input.addEventListener('input', filtrar);
    input.addEventListener('search', filtrar);
    filtrar();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }
})();
