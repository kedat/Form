let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let age = document.getElementById('age');
let nickname = document.getElementById('nickname');
let gender = document.getElementById('gender');
let phone = document.getElementById('phone');
let spouceName = document.getElementById('spouce-name');
let lwith = document.getElementById('lwith');
let marriage = document.getElementsByName('marriage');
let retired = document.getElementsByName('retired');
let disability = document.getElementsByName('disability');
let occupation = document.getElementById('occupation');
let doctor = document.getElementById('doctor');
let doctorLocality = document.getElementById('doctor-locality');
let doctorPhone = document.getElementById('doctor-phone');
let allergic = document.getElementsByName('allergic');
let smoke = document.getElementsByName('smoke');
let stop = document.getElementById('quit');
let drink = document.getElementById('drink');
let opinion = document.getElementById('person');
let btnSubmit = document.querySelector('.form-body button');

let url = "https://62e894c693938a545be7e19b.mockapi.io/kdAPI/Infomations";
var marriageValue; let retiredValue; let diasbilityValue; let allergicResult; let smokeResult;
let errBorderColor = 'red';
let trueBorderColor = '#ced4da'
btnSubmit.addEventListener('click', showResult)
function showResult() {
  checkData();
  if (checkData()) {
    document.querySelector('.errResult .resultErr').classList.replace('hide', 'show');
    document.querySelector('.result').classList.replace('show', 'hide');
  }
  else {
    document.querySelector('.errResult .resultErr').classList.replace('show', 'hide');
    document.querySelector('.result').classList.replace('hide', 'show');
    showData();
  }
}
function checkData() {
  getRadioValue();
  let hasErr = false;
  if (age.value == '') {
    document.querySelector('.age .ageErr').innerText = 'Age can\'t be empty'
    document.querySelector('.age .ageErr').classList.replace('hide', 'show');
    age.style.borderColor = errBorderColor;
    hasErr = true;
  }
  if (gender.value == '') {
    document.querySelector('.gender .genderErr').classList.replace('hide', 'show');
    gender.style.borderColor = errBorderColor;
    hasErr = true;
  }
  if (phone.value == '' || phone.style.borderColor == errBorderColor) {
    document.querySelector('.phone .phoneErr').classList.replace('hide', 'show');
    document.querySelector('.phone .phoneErr').innerText = 'Phone can\'t be empty'
    phone.style.borderColor = errBorderColor;
    hasErr = true;
  }
  if (marriageValue == undefined || retiredValue == undefined || diasbilityValue == undefined) {
    hasErr = true;
  }

  for (let i = 0; i < marriage.length; i++) {
    if (marriage[i].checked) {
      document.querySelector('.marriage .marriageErr').classList.replace('show', 'hide');
      document.querySelector('.marriage label:first-child').style.color = '#002f6b';
      break;
    }
    else {
      document.querySelector('.marriage label:first-child').style.color = errBorderColor;;
      document.querySelector('.marriage .marriageErr').classList.replace('hide', 'show');
    }
  }
  for (let i = 0; i < retired.length; i++) {
    if (retired[i].checked) {
      document.querySelector('.retired .retiredErr').classList.replace('show', 'hide');
      document.querySelector('.retired label:first-child').style.color = '#002f6b';
      break;
    }
    else {
      document.querySelector('.retired label:first-child').style.color = errBorderColor;;
      document.querySelector('.retired .retiredErr').classList.replace('hide', 'show');
    }
  }
  for (let i = 0; i < disability.length; i++) {
    if (disability[i].checked) {
      document.querySelector('.disability .disabilityErr').classList.replace('show', 'hide');
      document.querySelector('.disability label:first-child').style.color = '#002f6b';
      break;
    }
    else {
      document.querySelector('.disability label:first-child').style.color = errBorderColor;;
      document.querySelector('.disability .disabilityErr').classList.replace('hide', 'show');
    }
  }
  return hasErr;
}
// AGE
age.onchange = function (e) {
  if (e.target.value > 150 || e.target.value == '') {
    document.querySelector('.age .ageErr').innerText = 'Invalid age !'
    document.querySelector('.age .ageErr').classList.replace('hide', 'show');
    age.style.borderColor = errBorderColor;
  }
  else {
    document.querySelector('.age .ageErr').classList.replace('show', 'hide');
    age.style.borderColor = trueBorderColor;
  }
}
// GENDER
gender.onchange = function (e) {
  if (gender.value == '') {
    document.querySelector('.gender .genderErr').innerText = 'Invalid gender !'
    document.querySelector('.gender .genderErr').classList.replace('hide', 'show');
    gender.style.borderColor = errBorderColor;
  }
  else {
    document.querySelector('.gender .genderErr').classList.replace('show', 'hide');
    gender.style.borderColor = trueBorderColor;
  }
}
// PHONE
phone.onchange = function (e) {
  const phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  if (e.target.value.match(phoneformat)) {
    document.querySelector('.phone .phoneErr').classList.replace('show', 'hide');
    phone.style.borderColor = trueBorderColor;
  }
  else {
    document.querySelector('.phone .phoneErr').innerText = 'Invalid phone number!'
    document.querySelector('.phone .phoneErr').classList.replace('hide', 'show');
    phone.style.borderColor = errBorderColor;
  }
}
function getRadioValue() {
  for (let i = 0; i < marriage.length; i++) {
    if (marriage[i].checked) {
      marriageValue = marriage[i].value;
      break;
    }
  }
  for (let i = 0; i < retired.length; i++) {
    if (retired[i].checked) {
      retiredValue = retired[i].value;
      break;
    }
  }
  for (let i = 0; i < disability.length; i++) {
    if (disability[i].checked) {
      diasbilityValue = disability[i].value;
      break;
    }
  }

  for (let i = 0; i < allergic.length; i++) {
    if (allergic[i].checked) {
      allergicResult = allergic[i].value;
      break;
    }
  }
  for (let i = 0; i < smoke.length; i++) {
    if (smoke[i].checked) {
      smokeResult = smoke[i].value;
      break;
    }
  }
}
function renderData() {
  fetch(url).then(res => res.json()).then(result => {
    let ulResult = document.querySelector(' .result');
    for (i = 0; i < result.length; i++) {
      ulResult.innerHTML += `
    <tr>
      <td>${result[i].id}</td>
      <td>${result[i].Fname}</td>
      <td>${result[i].Lname}</td>
      <td>${result[i].Age}</td>
      <td>${result[i].Nickname}</td>
      <td>${result[i].Gender}</td>
      <td>${result[i].PatientPhone}</td>
      <td>${result[i].SpouceName}</td>
      <td>${result[i].LiveWith}</td>
      <td>${result[i].MaritalStatus}</td>
      <td>${result[i].Occupation}</td>
      <td>${result[i].Retired}</td>
      <td>${result[i].Disability}</td>
      <td>${result[i].Doctor}</td>
      <td>${result[i].DoctorLocate}</td>
      <td>${result[i].DoctorPhone}</td>
      <td>${result[i].Allergic}</td>
      <td>${result[i].Smoke}</td>
      <td>${result[i].Stop}</td>
      <td>${result[i].Drink}</td>
      <td>${result[i].Opinion}</td>
    </tr>
    `;
    }
  });
}
const showData = async () => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Fname": fname.value,
        "Lname": lname.value,
        "Age": age.value,
        "Nickname": nickname.value,
        "Gender": gender.value,
        "PatientPhone": phone.value,
        "SpouceName": spouceName.value,
        "LiveWith": lwith.value,
        "MaritalStatus": marriageValue,
        "Occupation": occupation.value,
        "Retired": retiredValue,
        "Disability": diasbilityValue,
        "Doctor": doctor.value,
        "DoctorLocate": doctorLocality.value,
        "DoctorPhone": doctorPhone.value,
        "Allergic": allergicResult,
        "Smoke": smokeResult,
        "Stop": stop.value,
        "Drink": drink.value,
        "Opinion": opinion.value
      })
    })
    renderData();
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    alert(error);
  }
}