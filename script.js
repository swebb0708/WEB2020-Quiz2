
window.onscroll = function (e) {
  if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600){

    document.getElementById("mermaid").style.backgroundPosition = '0px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  }

  if (document.body.scrollTop > 600 && document.body.scrollTop < 1200 || 
      document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1200 ) {

    console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

    document.getElementById("mermaid").style.backgroundPosition = '40px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  } 

  if (document.body.scrollTop > 1200 && document.body.scrollTop < 1800 ||
    document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1800) {

    console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

    document.getElementById("mermaid").style.backgroundPosition = '80px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  }

  if (document.body.scrollTop > 1800 && document.body.scrollTop < 2400 ||
    document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2400) {

    console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

    document.getElementById("mermaid").style.backgroundPosition = '0px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  }

  if (document.body.scrollTop > 2400 && document.body.scrollTop < 3000 ||
    document.documentElement.scrollTop > 2400 && document.documentElement.scrollTop < 3000) {

    console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

    document.getElementById("mermaid").style.backgroundPosition = '40px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  }

  if (document.body.scrollTop > 3000 && document.body.scrollTop < 3600 ||
    document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3600) {

    console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

    document.getElementById("mermaid").style.backgroundPosition = '80px 0px';
    document.getElementById("mermaid").style.marginBottom = '50%';
  }
  else if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
    document.getElementById("mermaid").style.backgroundPosition = '0px 0px';
    document.getElementById("mermaid").style.marginBottom = '150px';
  }
} 