const charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatebtn = document.getElementById("generate-btn");
let generatedpasswords = document.querySelectorAll(".generated-password");
document.getElementById("copy-btn").addEventListener("click", function() {
    let passwordsToCopy = "";
    generatedpasswords.forEach((passwordElement) => {
        passwordsToCopy += passwordElement.innerText + "\n";
    });
    copyToClipboard(passwordsToCopy);
});


function generatePassword() {
    let length = 10;
    
    generatedpasswords.forEach((element) => {
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        element.innerText = password;
    });
}
function copyToClipboard(passwords) {
    const el = document.createElement('textarea');
    el.value = passwords;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Passwords copied to clipboard');
}
