"use strict"



let isPalindrome = function (string) {
    string = string.toLowerCase();
    string = string.replace(/\s+/g, '');
        if (string == string.split('').reverse().join('')) {
        alert( ' Да,это палиндром!');
    }
    else {
        alert( ' Нет, это не палиндром (');
    }
}

document.getElementById("check").onclick = function() {
    isPalindrome(document.getElementById('input').value);
 }

