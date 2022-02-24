 //                 this part to make the navbar and give it the attributes                                              
    fragement = document.createDocumentFragment();
   const sections =document.querySelectorAll('section');
    sections.forEach(function(section) {
            nElement = document.createElement('li');
            nElement.innerHTML = "<a class ='menu__link' href='#"+section.getAttribute('id')+"'>"+section.getAttribute('data-nav')+"</a>";
            fragement.appendChild(nElement);
        });
        const nav=document.getElementById('navbar__list');
    nav.appendChild(fragement);
//  this part to know the section on the screen and make it active and show it on the navbar
window.addEventListener("scroll", () => {
    sections.forEach(function(section) {
            if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150 ){
                if(!section.classList.contains('your-active-class')){
                    section.classList.add('your-active-class');
                document.querySelectorAll('a').forEach(li =>{
                li.classList.remove('active');
                li.classList.add('menu__link');
                if(li.getAttribute('href') === '#'+section.getAttribute('id')){
                    li.classList.remove('menu__link');
                    li.classList.add('active');
                }
            })    
                }
}
else{
    section.classList.remove('your-active-class');
}
    });
});
//                    this part to make move smooth
nav.addEventListener("click",(section)=>{
    section.preventDefault();
    if(section.target){
    let destination=section.target.toString();
    destination=destination.split("#");
    let final=  document.getElementById(`${destination[1]}`);
    final.scrollIntoView({behavior:"smooth",block: "center"});
    }
});                                                                     