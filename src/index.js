import "./styles.css";

const onClickAdd = () => {
  // 入力値取得とクリア
  const input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  //div作成
  const div = document.createElement("div");
  div.className = "one_line";

  //li作成
  const li = document.createElement("li");
  li.innerText = input;

  //完了ボタン作成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";

  //削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);

  //未作成リストに設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplate-ul").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
