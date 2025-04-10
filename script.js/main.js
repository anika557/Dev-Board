const updateDayAndDate = function () {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Satur'];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString('en-Us', {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    document.getElementById("day").textContent = `${day}`;
    document.getElementById("date").textContent = date;
}
updateDayAndDate();

const updateColor = function () {

function getRandomNum(){
    return  Math.floor(Math.random() * 255) + 1;
    
}
    let r = getRandomNum()
    let g = getRandomNum()
    let b = getRandomNum()
let randomColor = `rgb(${r}, ${g}, ${b})`

    let body = document.getElementById("body-color");
    body.style.backgroundColor = randomColor;
    let dive = document.getElementById("dive-color");
    dive.style.backgroundColor = randomColor;
    let last = document.getElementById("last-color");
    last.style.backgroundColor = randomColor;
    

}
document.getElementById("theme").addEventListener("click", function(){

    updateColor()

} )




document.getElementById("jabi-naki").addEventListener('click', function(){
    window.location.href = 'blog.html';
})



