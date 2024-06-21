let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let leng = 6
let randomString = ""
while (randomString.length < leng) {
  let i = (Math.floor(Math.random() *
    alphabet.length));
  randomString+=alphabet[i]
}
console.log(randomString)