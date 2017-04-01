window.addEventListener("load", () => {
  var getValue = ( px ) => {
    return new Number( px.replace( /[^\d\.]/g, '' ) );
  };


  var wrap = ( query, tag ) => {
    // Now webslides is a grid
    const ws = document.getElementById('webslides');
    ws.classList.add('grid');

    document.querySelectorAll( query ).forEach( elem => {
      const div = document.createElement( 'div' );
      div.className = 'column';
      elem.parentElement.insertBefore( div, elem );
      const wrap = document.createElement( 'div' );
      wrap.className = 'wrap-zoom';
      div.appendChild( wrap );
      wrap.appendChild( elem );

      const divCSS = window.getComputedStyle( div );
      const divW = getValue( divCSS.width );
      const marginW = getValue( divCSS.paddingLeft ) + getValue( divCSS.paddingRight );
      const marginH = getValue( divCSS.paddingTop ) + getValue( divCSS.paddingBottom );

//      div.style.height = divH + 'px';
      elem.style.width =  ( window.innerWidth - marginW * 4 ) + 'px';
      elem.style.height = ( window.innerHeight - marginH * 4 )  + 'px';

      const slideCSS = window.getComputedStyle( elem );
      wrap.style.height = ( getValue( slideCSS.height ) / 4 ) + 'px';
    });
  };

  //wrap( '.slide', 'div' );
});
