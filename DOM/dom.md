 <!-- DOM shortcuts -->
 document.images[]
 document.links[]
 document.forms[]


  <!-- DOM tree - Navigation -->
 element.parentElement / null
 element.previousElementSibling / null
 element.nextElementSibling / null
 element.children[]
 element.firstElementChild / null
 element.lastElementChild / null

  <!-- cand e sa gaseaca un singur element si esueaza, sistemul iti da /null -->

<!--   DOM tree - Navigation / Search functions -->
document.getElementById(...) / null
document.getElementsByClassName(...) / []
document.getElementsByTagName(...) / []

document.querySelector(...) / null
document.querySelectorAll(...) / [] 

<!-- Attributes/properties & composition -->
element.(src, .href, .alt, .style, .id)
element.className(.classList)