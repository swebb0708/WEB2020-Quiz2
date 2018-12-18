var mermaid = document.getElementsByClassName("mermaid");
var bubble = document.getElementsByClassName("text_bubble");
var keyframes = [
    {backgroundPosition:'0px 0px'},
    {backgroundPosition: '40px 55px'}
];
var timing = {
    duration: 1,
    easing: "steps(13, end)"
  };

var mermaidswim = mermaid.animate(keyframes, timing);

// window.onscroll = function (e) {
// 	if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600){

//         // mermaid.style.backgroundPosition = '0px 0px';
//         mermaid.animate(keyframes, timing);
//         bubble.innerHTML = `Just Keep Swimming`;
        
//       }
    
    //   if (document.body.scrollTop > 600 && document.body.scrollTop < 1200 || 
    //       document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1200 ) {
    
    //     console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
    
    //     mermaid.style.backgroundPosition = '-71px 0px';
    //     mermaid.style.swimming = '50%';
    //   } 
    
    //   if (document.body.scrollTop > 1200 && document.body.scrollTop < 1800 ||
    //     document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1800) {
    
    //     console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
    
    //     mermaid.style.backgroundPosition = '-142px 0px';
    //     mermaid.style.swimming = '50%';
    //   }
    
    //   if (document.body.scrollTop > 1800 && document.body.scrollTop < 2400 ||
    //     document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2400) {
    
    //     console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
    
    //     mermaid.style.backgroundPosition = '0px -80px';
    //     mermaid.style.swimming= '50%';
    //   }
    
    //   if (document.body.scrollTop > 2400 && document.body.scrollTop < 3000 ||
    //     document.documentElement.scrollTop > 2400 && document.documentElement.scrollTop < 3000) {
    
    //     console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
    
    //     mermaid.style.backgroundPosition = '-71px -80px';
    //     mermaid.style.swimming = '50%';
    //   }
    
    //   if (document.body.scrollTop > 3000 && document.body.scrollTop < 3600 ||
    //     document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3600) {
    
    //     console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
    
    //     mermaid.style.backgroundPosition = '-142px -80px';
    //     mermaid.style.swimming = '50%';
    //   }
    //   else if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
    //     mermaid.style.backgroundPosition = '0px -160px';
    //     mermaid.style.swimming = '150px';
    //   }   
// }

