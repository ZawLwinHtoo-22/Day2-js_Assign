let faq=document.querySelectorAll('.botm__box');

for(let i=0; i< faq.length; i++)
{
    faq[i].addEventListener("click", function show() {

        faq[i].classList.toggle("show");

    });
}