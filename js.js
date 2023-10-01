var rev0 = false;
var rev1 = false;
var rev2 = false;
var rev3 = false;
function reveal1(){
    let button = document.getElementById("arr1");
    let txt = document.getElementById("txt1");
    if(rev1){
        rev1 = false;
        txt.innerHTML = "";
        button.innerHTML = "&#x2193;"
    } else {
        rev1 = true;
        txt.innerHTML = "<h4>Tehnoloģijas</h4> \nT saīsinājumā STEM nozīmē <i>technology</i>. Tehnoloģijas ir mums apkārt un mums ir jāmācās tās izmantot un saprast, jo tās mūsu dzīvē spēlē arvien lielāku lomu.\nVisticamākais, ka Jūs jau mācījāties HTML un CSS pamatskolā, bet Web lapās ir arī iespēja pievienot skriptus. Vispazīstamākā valoda šiem skriptiem ir <i>JavaScript</i>. Šeit ir vienkāršs piemērs.</i></p>\n<button onclick=\"look_here()\">Nospied mani!</button>\n<div style = \"display: none;\" id = \"h0\">\n<p>Kā redzējāt, šai pogai ir funkcija un tā mainīja šo lapu. Iespējams, jūs vēlaties saprast, kā šī poga strādā. Šeit ir tiešā HTML rindiņa, kas šo pogu ieliek šajā lapā:</p>\n<div style = \"background-color: #000; border: 1px solid black; color: #fff; border-radius: 5px; padding: 5px;\">&lt;button onclick=\"look_here()\"&gt;Nospied mani!&lt;&#47;button&gt;</div>\n<p>Šis izskatās vienkārši, kur ir JavaScript? JavaScript parasti tiek likts &lt;script&gt; tagā. Ir divi veidi, kā var ievietot JavaScript HTML failā:</p><ul>\n<li>Ievietot pa tiešo starp sākuma un beigu tagiem - ieliec \"alert()\" funkciju:\n<div style = \"background-color: #000; border: 1px solid black; color: #fff; border-radius: 5px; padding: 5px;\">&lt;script&gt;\nfunction look_here(){<br><input type = \"text\" id = \"ans1\"><br>var button = document.getElementById(\"h0\");\nbutton.style.display = \"block\";\n}&lt;&#47;script&gt;</div>\n</li></ul>\n<button class = \"sub1\" onclick = \"check1()\">Pārbaudīt</button>\n<div style = \"display: none;\" id = \"h1\">\n<ul>\n<li>\nVar arī tikai ierakstīt javascript faila vārdu. Šajā piemērā vajag ierakstīt JavaScript failu vārdā \"js\":\n<div style = \"background-color: #000; border: 1px solid black; color: #fff; border-radius: 5px; padding: 5px;\">&lt;script&gt;\n&lt;&#47;script src = \"<input type = \"text\" id = \"ans\">\"&gt;&lt;&#47;script&gt;</div>\n</li>\n</ul>\n<button onclick = \"check2()\">Pārbaudīt</button></div>";
        button.innerHTML = "&#x2191;";
    }
}
function look_here(){
    alert("Skaties, šis logs uznira tāpēc, ka nospiedi pogu!");
    var button = document.getElementById("h0");
    button.style.display = "block";
}
function check1(){
    var field = document.getElementById("ans1");
    var ans = field.value;
    var h1 = document.getElementById("h1")
    if(ans.includes("alert(\"") && ans.includes("\");")) {
        h1.style.display = "block";
    } else {
        alert("Nepareizi, mēģiniet vēlreiz. Jūs varat izmantot ārējos resursus, lai atrastu pareizo sintaksi.")
    }
}
function check2(){
    var field = document.getElementById("ans2");
    var ans = field.value;
    if(ans == "js.js") {
        alert("Apsveicam, jūs pabeidzāt šīs lapas tehnoloģiju daļu!")
    } else {
        alert("Nepareizi, mēģiniet vēlreiz. Jūs varat izmantot ārējos resursus, lai atrastu pareizo sintaksi.")
    }
}