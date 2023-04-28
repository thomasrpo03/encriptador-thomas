//Botones
document.getElementById("encrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const encryptedText = encryptText(inputText);
  document.getElementById("output").value = encryptedText;
  showText();
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const decryptedText = decryptText(inputText);
  document.getElementById("output").value = decryptedText;
  showText();
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("text-input").value = "";
  document.getElementById("output").value = "";
  showText();
});

document.getElementById("copy-btn").addEventListener("click", function () {
  const outputText = document.getElementById("output");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
});

document.getElementById("paste-btn").addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then(function (text) {
      document.getElementById("text-input").value = text;
    })
    .catch(function (err) {
      console.error("Error al pegar: ", err);
    });
});


//funciones para encriptar y desencriptar
function encryptText(text) {
  let encryptedText = text.toLowerCase();
  encryptedText = encryptedText.replace(/e/g, "enter");
  encryptedText = encryptedText.replace(/i/g, "imes");
  encryptedText = encryptedText.replace(/a/g, "ai");
  encryptedText = encryptedText.replace(/o/g, "ober");
  encryptedText = encryptedText.replace(/u/g, "ufat");
  return encryptedText;
}

function decryptText(text) {
  let decryptedText = text.toLowerCase();
  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");
  return decryptedText;
}


//Cambio de visibilidad de texto
function showText() {
  const resultText = document.getElementById("output").value;

  if (resultText !== "") {
    document.getElementById("output-container").style.display = "grid";
    document.getElementById("pre-output").style.display = "none";
  } else {
    document.getElementById("output-container").style.display = "none";
    document.getElementById("pre-output").style.display = "grid";
  }
}
