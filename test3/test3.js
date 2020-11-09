
function quaySo(e,t){
    console.log(e);
    console.dir(t);
    let input = document.getElementById('input')
    if(input.value<1 || input.value>10){
        alert("Mời bạn nhập lại:");
    }
    else if(input.value==8){
        alert("Chuc mung ban da trung thuong");
    }
    else{
        alert("Chúc bạn may mắn lần sau ");
    }
        
}