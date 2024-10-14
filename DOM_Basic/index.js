//change color
function changeTextColor(){
    const textElement1 = document.getElementById("text1");
    textElement1.style.color = "green";
    const textElement2 = document.getElementById("text2");
    textElement2.style.color = "yellow";
    const textElement3 = document.getElementById("text3");
    textElement3.style.color = "red";

}
function applyBgColor() {
    var color = document.getElementById('bgColorInput').value;
    changeBgColor(color);
}

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

function copyContent(text1,text2){
    const para1  = document.getElementById("text1");
    const para2  = document.getElementById("text2");
    if (para1 && para2) {
        para1.innerHTML = para2.innerHTML; 
    } else {
        console.error("Không tìm thấy đoạn văn.");
    }
}


document.getElementById('fontSizeInput').addEventListener('input', function() {
    const newSize = this.value; 
    changeFontSize(newSize); 
});

function changeFontSize(size) {
    const paragraphs = document.querySelectorAll('p'); 

    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = size + 'px';
    });
}
