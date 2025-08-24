 let password = "qwerty";
 function swap(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
    [arr[2], arr[3]] = [arr[3], arr[2]];
    return arr;
}
 function encrypt() {
    const arr = password.split("");
    return swap(arr).join("");
}
function check(encrypted, original) {
    const arr = encrypted.split("");
    const decrypted = swap(arr).join("");
    return decrypted === original;
}
const encryptedPassword = encrypt();
console.log("Зашифрованный пароль:", encryptedPassword); 

console.log(check(encryptedPassword, password)); 
console.log(check(encryptedPassword, "wrong")); 
