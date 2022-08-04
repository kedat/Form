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

let resultFname = document.querySelector('.result .fname');
let resultLname = document.querySelector('.result .lname');
let resultAge = document.querySelector('.result .age');
let resultNickname = document.querySelector('.result .nickname');
let resultGender = document.querySelector('.result .gender');
let resultPhone = document.querySelector('.result .phone-number');
let resultSpoceName = document.querySelector('.result .spouce-name');
let resultLiveWith = document.querySelector('.result .live-with');
let resultMarriage = document.querySelector('.result .marriage');
let resultOccupation = document.querySelector('.result .occupation');
let resultRetired = document.querySelector('.result .retired');
let resultDisability = document.querySelector('.result .disability');
let resultPrimaryDoctor = document.querySelector('.result .primary-doctor');
let resultDoctorLocality = document.querySelector('.result .doctor-locality');
let resultDoctorPhone = document.querySelector('.result .doctor-phone');
let resultAllergic = document.querySelector('.result .allergic');
let resultSmoke = document.querySelector('.result .smoke');
let resultStop = document.querySelector('.result .stop');
let resultDrink = document.querySelector('.result .drink');
let resultOpinion = document.querySelector('.result .personal');

let url = "https://62e894c693938a545be7e19b.mockapi.io/kdAPI/Infomations";
var marriageValue; let retiredValue; let diasbilityValue; let allergicResult; let smokeResult;
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
    age.style.borderColor = 'red';
    hasErr=true;
  }
  if (gender.value == '') {
    document.querySelector('.gender .genderErr').classList.replace('hide', 'show');
    gender.style.borderColor = 'red';
    hasErr = true;
  }
  if (phone.value == '') {
      document.querySelector('.phone .phoneErr').classList.replace('hide', 'show');
      document.querySelector('.phone .phoneErr').innerText = 'Phone can\'t be empty'
      phone.style.borderColor = 'red';
    hasErr=true;
    }
  if (marriageValue==''){
    hasErr = true;
  }
  if (retiredValue ==''){
    hasErr = true;
  }
  if (diasbilityValue ==''){
    hasErr = true;
  }
  for (let i = 0; i < marriage.length; i++) {
    if (marriage[i].checked) {
      document.querySelector('.marriage .marriageErr').classList.replace('show', 'hide');
      document.querySelector('.marriage label:first-child').style.color = '#002f6b';
      break;
    }
    else {
      document.querySelector('.marriage label:first-child').style.color = 'red';
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
      document.querySelector('.retired label:first-child').style.color = 'red';
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
      document.querySelector('.disability label:first-child').style.color = 'red';
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
    age.style.borderColor = 'red';
  }
  else {
    document.querySelector('.age .ageErr').classList.replace('show', 'hide');
    age.style.borderColor = '#ced4da';
  }
}
// GENDER
gender.onchange = function (e) {
  if (gender.value == '') {
    document.querySelector('.gender .genderErr').innerText = 'Invalid gender !'
    document.querySelector('.gender .genderErr').classList.replace('hide', 'show');
    gender.style.borderColor = 'red';
  }
  else {
    document.querySelector('.gender .genderErr').classList.replace('show', 'hide');
    gender.style.borderColor = '#ced4da';
  }
}
// PHONE
phone.onchange = function (e) {
  const phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  if (e.target.value.match(phoneformat)) {
    document.querySelector('.phone .phoneErr').classList.replace('show', 'hide');
    phone.style.borderColor = '#ced4da';
  }
  else {
    document.querySelector('.phone .phoneErr').innerText = 'Invalid phone number!'
    document.querySelector('.phone .phoneErr').classList.replace('hide', 'show');
    phone.style.borderColor = 'red';
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

    resultFname.innerText = 'First name: ' + result[result.length - 1].Fname;
    resultLname.innerText = 'Last name: ' + result[result.length - 1].Lname;
    resultAge.innerText = 'Age: ' + result[result.length - 1].Age;
    resultNickname.innerText = 'Nickname: ' + result[result.length - 1].Nickname;
    resultGender.innerText = 'Gender: ' + result[result.length - 1].Gender;
    resultPhone.innerText = 'Phone: ' + result[result.length - 1].PatientPhone;
    resultSpoceName.innerText = 'Spoce Name: ' + result[result.length - 1].SpouceName;
    resultLiveWith.innerText = 'Live with: ' + result[result.length - 1].LiveWith;
    resultMarriage.innerText = 'Marriage: ' + result[result.length - 1].MaritalStatus;
    resultOccupation.innerText = 'Occupation: ' + result[result.length - 1].Occupation;
    resultRetired.innerText = 'Retired: ' + result[result.length - 1].Retired;
    resultDisability.innerText = 'Disability: ' + result[result.length - 1].Disability;
    resultPrimaryDoctor.innerText = 'Primary Doctor: ' + result[result.length - 1].Doctor;
    resultDoctorLocality.innerText = 'Doctor location: ' + result[result.length - 1].DoctorLocate;
    resultDoctorPhone.innerText = 'Doctor phone: ' + result[result.length - 1].DoctorPhone;
    resultAllergic.innerText = 'Allergic: ' + result[result.length - 1].Allergic;
    resultSmoke.innerText = 'Smoke: ' + result[result.length - 1].Smoke;
    resultStop.innerText = 'Stop: ' + result[result.length - 1].Stop;
    resultDrink.innerText = 'Drink: ' + result[result.length - 1].Drink;
    resultOpinion.innerText = 'Opinion: ' + result[result.length - 1].Opinion;
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
    });
    await response.json();
    renderData();
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    alert(error);
  }
}