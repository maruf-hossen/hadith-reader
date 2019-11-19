var nextButton = document.getElementById("next");
var revButton = document.getElementById("prev");
var image = document.getElementById("image");
var submitButton = document.getElementById("submit");
var inputHadith = document.getElementById("inputHadith");
var displayHadith = document.getElementById("hadith");
var images = [
              
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL04TsSHjGedbTmsgklrwWcrzVL79SNagUf3HLrwd3LVfAaYGi",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDCtF3p7S8O8CryLGclpp22TERG-NS1IW_ef7RokKdwcPxVIxR",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK0evmTS9Ylg-w_65mLjfWljZsktKPtgi2u0IvXms_CPHHxjFB",
              "https://loecpa.com/wp-content/uploads/2016/11/Legal-pad-background.png"
              
             ];
var hadiths = []; 
var index = 0;
submitButton.addEventListener("click",function(){
    var newHadith = inputHadith.value;
    if(newHadith.trim()){
        if(localStorage.length>0){ 
        var oldHadiths = JSON.parse(localStorage.getItem("hadiths"));
        oldHadiths.push(newHadith);
        localStorage.clear;
        localStorage.setItem("hadiths", JSON.stringify(oldHadiths));
        }
        else{
          hadiths.push(newHadith);
          localStorage.setItem("hadiths",JSON.stringify(hadiths));
        }
    }
    else{
      alert("Text field should not be empty");
    }   
});
nextButton.addEventListener("click", function(){
   if(index == images.length -1)
        index = 0;
   else{
        index++;
    }
    image.setAttribute("src", images[index]); 
})
revButton.addEventListener("click", function(){
  if(index == 0)
    index = images.length - 1;
  else{
        index--;
    }
    image.setAttribute("src", images[index]);

});
image.addEventListener("click", changeHadith);
function changeHadith(){ 
    var storedHadiths = JSON.parse(localStorage.getItem("hadiths"));
    if(storedHadiths!=null && storedHadiths.length > 0){
      var randomHadith = storedHadiths[Math.floor(Math.random()*storedHadiths.length)];
      displayHadith.innerHTML = randomHadith;
    }
    else{
      alert("Please Insert some text");
    }
       
}

