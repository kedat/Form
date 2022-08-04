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

// let resultFname = document.querySelector('.result .fname');
// let resultLname = document.querySelector('.result .lname');
// let resultAge = document.querySelector('.result .age');
// let resultNickname = document.querySelector('.result .nickname');
// let resultGender = document.querySelector('.result .gender');
// let resultPhone = document.querySelector('.result .phone-number');
// let resultSpoceName = document.querySelector('.result .spouce-name');
// let resultLiveWith = document.querySelector('.result .live-with');
// let resultMarriage = document.querySelector('.result .marriage');
// let resultOccupation = document.querySelector('.result .occupation');
// let resultRetired = document.querySelector('.result .retired');
// let resultDisability = document.querySelector('.result .disability');
// let resultPrimaryDoctor = document.querySelector('.result .primary-doctor');
// let resultDoctorLocality = document.querySelector('.result .doctor-locality');
// let resultDoctorPhone = document.querySelector('.result .doctor-phone');
// let resultAllergic = document.querySelector('.result .allergic');
// let resultSmoke = document.querySelector('.result .smoke');
// let resultStop = document.querySelector('.result .stop');
// let resultDrink = document.querySelector('.result .drink');
// let resultOpinion = document.querySelector('.result .personal');

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
    age.style.borderColor = errBorderColor;
    hasErr = true;
  }
  if (phone.value == '') {
    document.querySelector('.phone .phoneErr').classList.replace('hide', 'show');
    document.querySelector('.phone .phoneErr').innerText = 'Phone can\'t be empty'
    age.style.borderColor = errBorderColor;
    hasErr = true;
  }
  if (marriageValue == '' || retiredValue == '' || diasbilityValue == '') {
    hasErr = true;
  }

  for (let i = 0; i < marriage.length; i++) {
    if (marriage[i].checked) {
      document.querySelector('.marriage .marriageErr').classList.replace('show', 'hide');
      document.querySelector('.marriage label:first-child').style.color = '#002f6b';
      break;
    }
    else {
      document.querySelector('.marriage label:first-child').style.color = age.style.borderColor = errBorderColor;;
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
      document.querySelector('.retired label:first-child').style.color = age.style.borderColor = errBorderColor;;
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
      document.querySelector('.disability label:first-child').style.color = age.style.borderColor = errBorderColor;;
      document.querySelector('.disability .disabilityErr').classList.replace('hide', 'show');
    }
  }
  return hasErr;
}
// AGE
age.onchange = function (e) {
  if (e.target.value < 0 || e.target.value > 150 || e.target.value == '') {
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
    age.style.borderColor = errBorderColor;
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
    age.style.borderColor = errBorderColor;
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
    for(i=0;i<result.length;i++){
    ulResult.innerHTML += `
    <h2 style="margin-bottom: 10px;">Patient ${result[i].id}</h2>
    <li><p>First name: ${result[i].Fname}</p></li>
    <li><p>Last name: ${result[i].Lname}</p></li>
    <li><p>Age: ${result[i].Age}</p></li>
    <li><p>Nickname: ${result[i].Nickname}</p></li>
    <li><p>Gender: ${result[i].Gender}</p></li>
    <li><p>Phone: ${result[i].PatientPhone}</p></li>
    <li><p>Spoce Name: ${result[i].SpouceName}</p></li>
    <li><p>Live with: ${result[i].LiveWith}</p></li>
    <li><p>Marriage: ${result[i].MaritalStatus}</p></li>
    <li><p>Occupation: ${result[i].Occupation}</p></li>
    <li><p>Retired: ${result[i].Retired}</p></li>
    <li><p>Disability: ${result[i].Disability}</p></li>
    <li><p>Primary Doctor: ${result[i].Doctor}</p></li>
    <li><p>Doctor location: ${result[i].DoctorLocate}</p></li>
    <li><p>Doctor phone: ${result[i].DoctorPhone}</p></li>
    <li><p>Allergic: ${result[i].Allergic}</p></li>
    <li><p>Smoke: ${result[i].Smoke}</p></li>
    <li><p>Stop: ${result[i].Stop}</p></li>
    <li><p>Drink: ${result[i].Drink}</p></li>
    <li><p>Opinion: ${result[i].Opinion}</p></li>
    `;}
  });
}
const showData = async () => {
  try {
    const response = await fetch(url, {
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