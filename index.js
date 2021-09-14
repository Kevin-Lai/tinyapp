document.addEventListener("DOMContentLoaded", () => {

    let titlesList = ["app","blog","shop","note","game","grave"];
    let titleIdx = 0;

    let currentTitle = document.getElementById("title-current");

    currentTitle.innerHTML = titlesList[titleIdx];

    let leftButton = document.getElementById("left-button");
    let rightButton = document.getElementById("right-button");

    leftButton.addEventListener("click", ()=>{
        if(titleIdx === 0){
            titleIdx = titlesList.length-1;
        }else{
            titleIdx--;
        }
        currentTitle.innerHTML = titlesList[titleIdx];

        if(titleIdx === titlesList.length-1){
            currentTitle.style.color = "purple";
        }
        else{
            currentTitle.style.color = "turquoise";
        }
    });

    rightButton.addEventListener("click", ()=>{
        if(titleIdx === titlesList.length-1){
            titleIdx = 0;
        }else{
            titleIdx++;
        }
        currentTitle.innerHTML = titlesList[titleIdx];
        
        if(titleIdx === titlesList.length-1){
            currentTitle.style.color = "purple";
        }
        else{
            currentTitle.style.color = "turquoise";
        }
    });

});