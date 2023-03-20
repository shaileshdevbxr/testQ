var login_bttn = document.getElementById('login_bttn');
var u_name = document.getElementById('u_name').value;
login_bttn.addEventListener('click', function () {
    var u_name = document.getElementById('u_name').value;
    var pass = document.getElementById('pass').value;
    if (u_name != "" && pass != "" && pass != '' || pass != '') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('myform').style.display = 'block';
        document.getElementById('submit').style.display = 'block';
        document.getElementById('username').innerText = u_name;
    }
    else {
        alert('please fill all required fields. Thanks');
    }
})
var submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    // alert('hii');
    // e.preventDefault();  
    let q1 = document.myForm.q1.value;
    let q2 = document.myForm.q2.value;
    let q3 = document.myForm.q3.value;
    let q4 = document.myForm.q4.value;
    let q5 = document.myForm.q5.value;
    let q6 = document.myForm.q6.value;
    let q7 = document.myForm.q7.value;
    let q8 = document.myForm.q8.value;
    let q9 = document.myForm.q9.value;
    let q10 = document.myForm.q10.value;

    let Q_attempt = document.getElementById('Q_attempt');
    let curent_Q = document.getElementById('curent_Q');
    let status = document.getElementById('status');
    let percent = document.getElementById('percent');
    let result_per = document.getElementById('result_per');
    let congratulation = document.getElementById('congratulation');
    let knowledge = document.getElementById('knowledge');

    let count = 0;
    let attempt = 0;

    if (q1 == "B") {
        count++;
    }
    if (q2 == "A") {
        count++;
    }
    if (q3 == "C") {
        count++;
    }
    if (q4 == "C") {
        count++;
    }
    if (q5 == "A") {
        count++;
    }
    if (q6 == "D") {
        count++;
    }
    if (q7 == "B") {
        count++;
    }
    if (q8 == "A") {
        count++;
    }
    if (q9 == "B") {
        count++;
    }
    if (q10 == "D") {
        count++;
    }
    if (count >= '7') {
        let result = "Pass";
        status.innerText = result;
        status.style.color = 'rgb(101, 232, 101)';
        congratulation.innerText = 'Congratulation';
        knowledge.innerText = 'you have good knowledge.';

    }
    else if (count < 7) {
        let result = "Fail";
        status.innerText = result;
        status.style.color = 'red';
        congratulation.innerText = 'Try';
        knowledge.innerText = 'to do Better Thanks';
        congratulation.style.color = 'red';
    }

    console.log(count);
    if (q1 != "") {
        attempt++;
    }
    if (q2 != "") {
        attempt++;
    }
    if (q3 != "") {
        attempt++;
    }
    if (q4 != "") {
        attempt++;
    }
    if (q5 != "") {
        attempt++;
    }
    if (q6 != "") {
        attempt++;
    }
    if (q7 != "") {
        attempt++;
    }
    if (q8 != "") {
        attempt++;
    }
    if (q9 != "") {
        attempt++;
    }
    if (q10 != "") {
        attempt++;
    }
    Q_attempt.innerText = attempt;
    curent_Q.innerText = count;
    count = Number(count);
    percent.innerText = 100 / 10 * count + " %";
    result_per = result_per.innerText = ":" + " " + 100 / 10 * count + " %"
    // document.getElementById('username').innerText = u_name ;
    document.getElementById('myform').style.display = "none";
    document.getElementById('maincontaner-res').style.display = 'block';
    document.getElementById('submit').style.display = "none";
    // alert('Your Total Marks Is' + " " + count + " ");

});
var sc = true;
function checkbox() {
    if (sc) {
        document.getElementById('pass').type = 'text';
        sc = false;
    }
    else {
        document.getElementById('pass').type = 'password';
        sc = true;
    }
}