const customers = document.getElementById("customers")
const icone = document.getElementById("icone")
    icone.addEventListener("click", function alternaricone() {

    if (customers.style.display === 'none') { 
      customers.style.display = "block"
  }else {
      customers.style.display = "none"
 }
})
const customers1 = document.getElementById("customers1")
const icone1 = document.getElementById("icone1")
    icone1.addEventListener("click", function alternaricone() {

    if (customers1.style.display === 'none') { 
      customers1.style.display = "block"
  }else {
      customers1.style.display = "none"
 }
})