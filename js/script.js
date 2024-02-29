function replaceName () {
    let name = prompt("Hallo siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById("tombol")
.addEventListener("click", function() {
    replaceName();
})

//function validateForm () {
    //const name = document.forms ["message-form"] ["full-name"]. value;
   // const birthDate = document.forms ["message-form"] ["birth-date"]. value;
   // const gender = document.forms ["message-form"] ["gender"]. value;
   // const messages = document.forms ["message-form"] ["messages"]. value;

   // if (name == "" ||  birthDate == "" || gender == "" ||  messages == "") {
       // alert("Tidak boleh kosong");
       // return false;
   // }
    
   // setSenderUI(name, birthDate, gender, messages);
   // return false;
//}

document.getElementById('send-message-us-form').addEventListener('click', () => sendform());

function sendform() {
    let date= Date();
    let fullName = document.forms ['message-form']['full-name']
    const gender = document.forms ['message-form']['gender']
    const birthDate = document.forms ['message-form']['birth-date']
    let messages = document.forms ['message-form']['messages']
    if (fullName.value == '' || gender.value == '' || birthDate.value == '' || messages.value == '') {
        alert ('input kosong !!!');
    } else {
        document.getElementById('sender-full-name').innerHTML = fullName.value;
        document.getElementById('sender-birth-date').innerHTML = birthDate.value;
        document.getElementById('sender-gender').innerHTML = gender.value;
        document.getElementById('sender-messages').innerHTML = messages.value;
    }
    return false;
    console.log(fullName);
    console.log(date);
    console.log(gender)
    console.log(birthDate)
    console.log(messages)

}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let imgList = document.getElementsByClassName("img-slidshow");
    if (n > imgList.length) slideIndex = 1;
    //else if (n < 1) slideIndex = imgList.length;
    let i = 0
    while (i < imgList.length) {
        imgList [i].style.display = 'none';
        i++;
    }
    imgList[slideIndex -1].style.display ='block';
    console.log(slideIndex)
    
    imgList [slideIndex -1].style.display = "block";

   // setInterval(() => {
       // plusDivs(1);
   // }, 1000 )

   const slideInterval = setInterval(() => nextSlide(1), 1000);
}