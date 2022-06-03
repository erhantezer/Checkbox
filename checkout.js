const taxRate=0.18;

const shippingPrice=15.0;


window.addEventListener('load',()=>{
localStorage.setItem("taxRate",taxRate);
localStorage.setItem("shippingPrice",shippingPrice);
})


//capturing 

let productsDiv=document.querySelector(".products");
productsDiv.addEventListener("click",(event)=>{

   //* =====================MİNUS==============
   if(event.target.classList.contains("minus")){
       if(event.target.nextElementSibling.innerText>1){
          event.target.nextElementSibling.innerText--
        }else{
            if(confirm("product wil be deleted")){
                event.target.closest(".product").remove(); 
            }
        }

   }
  
  
  
  
   //* =====================PLUS==============

  else if(event.target.className=="plus"){
    //   console.log("toplama")
      event.target.previousElementSibling.innerText++;

  }
  
  
  
  
   //* =====================REMOVE==============
   else if(event.target.classList.contains("remove-product")){
//    console.log("erhan");
    // event.target.parentElement.parentElement.parentElement.remove();
    event.target.closest(".product").remove();

   }

})


//* ===========================FUNCTİON=================
