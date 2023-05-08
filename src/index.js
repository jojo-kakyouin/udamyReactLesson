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

  // ■ 完了ボタン作成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  // 完了ボタン押下時処理
  complateButton.addEventListener("click", () => {
    const moveTarget = complateButton.parentNode;
    document.getElementById("incomplate-ul").removeChild(moveTarget);

    const children = moveTarget.childNodes;
    moveTarget.removeChild(children[1]);

    children[1].textContent = "戻る";
    moveTarget.appendChild(children[1]);
    document.getElementById("complate-ul").appendChild(moveTarget);
  });

  // ■ 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタン押下時処理
  deleteButton.addEventListener("click", () => {
    const deteleTarget = deleteButton.parentNode;
    document.getElementById("incomplate-ul").removeChild(deteleTarget);
  });

  //未作成リストに設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplate-ul").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
