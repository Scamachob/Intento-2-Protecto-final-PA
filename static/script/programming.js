document.addEventListener("DOMContentLoaded", function() {
   const preElements = document.querySelectorAll('pre.code_block');

   preElements.forEach(pre => {
       const code = pre.querySelector('code');
       if (code) {
           const lines = code.innerHTML.split('\n');
           const trimmedLines = lines.map(line => line.replace(/^\s{24}/, ''));
           code.innerHTML = trimmedLines.join('\n');
       }
   });
});
