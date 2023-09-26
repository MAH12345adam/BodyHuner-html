const copyText = document.getElementsByClassName("modal-product");
const copyBtn = document.querySelector(".modal-body__copy");

const copiedText = [];

for (let i = 0; i < copyText.length; i++) {
  copiedText.push(copyText[i].innerText);
}

const copyFn = (copy) => {
  let textarea = document.createElement("textarea");
  textarea.value = copy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

copyBtn.addEventListener("click", (e) => {
  copyFn(copiedText);
});
