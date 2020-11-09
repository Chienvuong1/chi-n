function helloWord(){
    alert('Hello word');
    console.log('1234');
}
// let h2Dom = document.getElementsById('title');
// h2Dom.addEventListen  er('click' , helloWord);
// function welcome(){
//     let inputName = document.getElementsById('inputName')
//     console.dir('Xin chao: ' + inputName.value);
// }
function welcome(e,t){
    console.log(e);
    console.dir(t);
    let inputName = document.getElementById('inputName');
    let matKhau = document.getElementById('pass');
    if(inputName.value === 'Chien'&& matKhau.value ==='123456'){
        alert('Thành Công');
        window.location="https://dantri.com.vn/";
        // window.location.replace('https://dantri.com.vn/')
    }
    else{
        alert('Sai tên hoawccj pass')
    }
}
function enterLogin(e, t){
    console.log(e);
    console.dir(t);
    if(e.key === 'Enter'){
    welcome();
    }
}
let listPhone = [];
function addPhones(){
    let phone = document.getElementById('txtphoneName');
    let phoneName = phone.value.trim();
    Nhap.value='';
    listPhone.push(phoneName)   ;
    displayListPhone() ;
}
function displayListPhone(){
   let domPhone = document.getElementById('Listphone');
   domPhone='';
   for (let i = 0; i < domPhone.length; i++) {
       const phones = domPhone[i];
       domPhone.innerHTML += `<li>
            ${phoneName}
       </li>`
   }
}
function enterLogin(e, t){
    
    if(e.key === 'Enter'){
    addPhones();
    }
}
function searchPhone(){
    let txtSearchDom = document.getElementById
}