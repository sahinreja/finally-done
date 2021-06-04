function addNewWkField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('we')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder' , 'Enter Here');
    let weObj = document.getElementById('weField')
    let weBtn = document.getElementById('workBtn')

    weObj.insertBefore(newNode , weBtn);
}

function addNewAqField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aq')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder' , 'Enter Here');
    let aqObj = document.getElementById('aqField')
    let aqBtn = document.getElementById('aqBtn')

    aqObj.insertBefore(newNode , aqBtn);
}

function generateCv(){
    console.log('run');
    
    let name = document.getElementById('name').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = name;
    document.getElementById('nameT2').innerHTML = name;
    

    document.getElementById('contactT').innerHTML = document.getElementById('contact').value;
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;
    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedin').value;
    document.getElementById('githubT').innerHTML = document.getElementById('github').value;
    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    let wes = document.getElementsByClassName('we')
    let str = '';
    for(let e of wes){
        str+=`<li>${e.value}</li>`
    }
    document.getElementById('wkT').innerHTML = str;

    let aqs = document.getElementsByClassName('aq')
    let string = '';
    for(let e of aqs){
        string+=`<li>${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML = string;
    // var modal = document.getElementById("myModal");
    // modal.style.display = "block";
    // var span = document.getElementsByClassName("close")[0];
    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";
}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function changeTemplate(){
    const complete = document.getElementById('complete')
    complete.style.fontFamily = "san-serif"
    // const left = document.getElementById('left');
    // left.style.backgroundColor = "#dedede";
    // const img = document.getElementById('img');
    // img.style.width = "180px"
    // document.getElementById('card').style.backgroundColor = 'red'
    
}