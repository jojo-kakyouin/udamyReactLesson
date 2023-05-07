import "./styles.css";

const onClickAdd = () => {
  // 入力値取得とクリア
  const input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  //div
  const div = document.createElement("div");
  div.className = "one_line";

  //li
  const li = document.createElement("li");
  li.innerText = input;

  div.appendChild(li);

  document.getElementById("incomplate").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
