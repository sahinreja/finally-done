function generateCV(){
    document.getElementById('tname').innerHTML = document.getElementById('name').value;
    document.getElementById('temail').innerHTML = document.getElementById('email').value;
    document.getElementById('tphone').innerHTML = document.getElementById('phone').value;
    document.getElementById('taddress').innerHTML = document.getElementById('address').value;
    document.getElementById('tlinkedin').innerHTML= document.getElementById('linkedin').value;
    document.getElementById('tgithub').innerHTML= document.getElementById('github').value;
    document.getElementById('tfacebook').innerHTML= document.getElementById('facebook').value;
    document.getElementById('taboutme').innerHTML= document.getElementById('aboutme').value;
    document.getElementById('tgcname').innerHTML= document.getElementById('gcname').value;
    document.getElementById('tginame').innerHTML= document.getElementById('giname').value;
    document.getElementById('tgbname').innerHTML= document.getElementById('gbname').value;
    document.getElementById('tgiaddress').innerHTML= document.getElementById('giaddress').value;
    document.getElementById('tgpassyr').innerHTML= document.getElementById('gpassyr').value;
    document.getElementById('tgpassmark').innerHTML= document.getElementById('gpassmark').value;
    document.getElementById('tgdiv').innerHTML= document.getElementById('gdiv').value;
    document.getElementById('thcname').innerHTML= document.getElementById('hcname').value;
    document.getElementById('thiname').innerHTML= document.getElementById('hiname').value;
    document.getElementById('thbname').innerHTML= document.getElementById('hbname').value;
    document.getElementById('thiaddress').innerHTML= document.getElementById('hiaddress').value;
    document.getElementById('thpassyr').innerHTML= document.getElementById('hpassyr').value;
    document.getElementById('thpassmark').innerHTML= document.getElementById('hpassmark').value;
    document.getElementById('thdiv').innerHTML= document.getElementById('hdiv').value;
    document.getElementById('tmname').innerHTML= document.getElementById('miname').value;
    document.getElementById('tmbname').innerHTML= document.getElementById('mbname').value;
    document.getElementById('tmiaddress').innerHTML= document.getElementById('miaddress').value;
    document.getElementById('tmpassyr').innerHTML= document.getElementById('mpassyr').value;
    document.getElementById('tmpassmark').innerHTML= document.getElementById('mpassmark').value;
    document.getElementById('tmdiv').innerHTML= document.getElementById('mdiv').value;
    document.getElementById('tage').innerHTML = document.getElementById('age').value
    document.getElementById('tworking').innerHTML = document.getElementById('working').value
    document.getElementById('tworkexp').innerHTML= document.getElementById('workexp').value;
    document.getElementById('tskill').innerHTML= document.getElementById('skill').value;
    document.getElementById('fm').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block'
    document.getElementById('btn2').style.visibility = 'visible'

    // document.getElementById('')

     

}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
