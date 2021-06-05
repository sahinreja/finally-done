function generateCV(){
    document.getElementById('tname').innerHTML = document.getElementById('name').value;
    document.getElementById('temail').innerHTML = document.getElementById('email').value;
    document.getElementById('tnumber').innerHTML = document.getElementById('phone').value;
    document.getElementById('tprofile').innerHTML = document.getElementById('profile').value;
    document.getElementById('tskill').innerHTML = document.getElementById('skill').value;
    document.getElementById('ttechnical').innerHTML = document.getElementById('technical').value;
    document.getElementById('texp').innerHTML = document.getElementById('exp').value;
    document.getElementById('tedu').innerHTML = document.getElementById('edu').value;
    document.getElementById('fm').style.display = 'none';
    document.getElementById('cv-template').style.display = "block"
    document.getElementById('btn2').style.visibility = 'visible'
    document.getElementById('pbt').style.display="block"

}


function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
