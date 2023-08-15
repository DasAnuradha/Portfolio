
var titles=document.getElementsByClassName("about-title");
var contents=document.getElementsByClassName("content");

function opentab(titlename){
    for(title of titles){
        title.classlist.remove("active");
    }

    for(content of contents){
        content.classlist.remove("active-details");
    }
   event.currentTarget.classlist.add("active");
   document.getElementById(titlename).classlist.add("active-details");
}   