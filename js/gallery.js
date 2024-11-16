/* variables */
let bg_image = document.getElementById("image");
let img_text = bg_image.innerHTML;


function setImageAttribute(){
   let images = document.getElementsByTagName("img");

   /*set tabindex and src to images*/
   for(let i = 0; i < images.length; i++){
      images[i].setAttribute("tabindex","0");
      images[i].setAttribute("onFocus","imageFocus(this)"); 
   }
}


function upDate(previewPic){
    /* Change the url for the background image of the div to the source file of the preview image */

    bg_image.style.backgroundImage ='url('+previewPic.src+')';
       
     /* Change the text of the div to the alt text of the preview image */

    bg_image.innerHTML = previewPic.alt;   

       }
   
function unDo(){
    /* Update the url for the background image of the div back to the orginal-image.*/
    
    bg_image.style.backgroundImage= "none";

    /* Change the text  of the div back to the original text.*/
    
    bg_image.innerHTML = img_text;
       
       }

function imageFocus(previewPic){
   bg_image.style.backgroundImage ='url('+previewPic.src+')';

   console.log(previewPic.getAttribute("alt"));
       
     /* Change the text of the div to the alt text of the preview image */

    bg_image.innerHTML = previewPic.alt;   

}

function imageBlur(){

   bg_image.style.backgroundImage= "none";

    /* Change the text  of the div back to the original text.*/
    
    bg_image.innerHTML = img_text;

}