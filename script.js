const sharedAccounts = [

["Netflix Premium (Shared Profile)","K65"],

["Netflix Premium (Private Profile)","K100"],

["Prime Video","K80"],

["DSTV Stream (2 Weeks)","K150"],

["Spotify","K60"],

["Apple Music Slot","K80"],

["iCloud Storage 50GB","K50"],

["iCloud Storage 200GB","K80"],

["Music Distribution","K100"],

["Music Cover Art / Logo","K50"],

["Gemini AI Plus","K50"]

];

const privateAccounts=[

["Netflix Mobile","K160"],

["Netflix Basic","K250"],

["Netflix Standard","K350"],

["Netflix Premium","K399"],

["DSTV Stream Promo","K250"],

["Amazon Prime Video","K250"],

["Spotify Individual","K150"],

["Spotify Family","K250"],

["Apple Music Individual","K180"],

["Apple Music Family","K300"],

["iCloud 50GB","K80"],

["iCloud 200GB","K150"],

["iCloud 2TB","K300"],

["Gemini AI Plus","K100"],

["Gemini AI Pro","K150"],

["ChatGPT Go","K150"]

];

function buildTable(){

const shared=document.getElementById("sharedTable");

const privateTable=document.getElementById("privateTable");

if(shared){

sharedAccounts.forEach((item)=>{

shared.innerHTML+=`

<tr>

<td>

<input

type="radio"

name="service"

value="${item[0]} - ${item[1]}">

</td>

<td>${item[0]}</td>

<td>${item[1]}</td>

</tr>

`;

});

}

if(privateTable){

privateAccounts.forEach((item)=>{

privateTable.innerHTML+=`

<tr>

<td>

<input

type="radio"

name="service"

value="${item[0]} - ${item[1]}">

</td>

<td>${item[0]}</td>

<td>${item[1]}</td>

</tr>

`;

});

}

}

buildTable();

function continueToPayment(){

let selected=document.querySelector('input[name="service"]:checked');

if(!selected){

alert("Please select a subscription.");

return;

}

localStorage.setItem("subscription",selected.value);

window.location="payment.html";

}

if(document.getElementById("selectedService")){

document.getElementById("selectedService").innerHTML=

localStorage.getItem("subscription");

}

function goNext(){

if(!document.getElementById("paid").checked){

alert("Please confirm payment.");

return;

}

window.location="signup.html";

}