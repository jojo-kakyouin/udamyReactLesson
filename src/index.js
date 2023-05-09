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
    // 未完了エリアからの削除
    deleteFromIncomplateArea(moveTarget);
    const children = moveTarget.childNodes;
    moveTarget.removeChild(children[1]);

    children[1].textContent = "戻る";
    children[1].addEventListener("click", () => {
      // 戻るボタン押下時の処理
      document
        .getElementById("complate-ul")
        .removeChild(children[1].parentNode);
    });

    moveTarget.appendChild(children[1]);
    document.getElementById("complate-ul").appendChild(moveTarget);
  });

  // ■ 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタン押下時処理
  deleteButton.addEventListener("click", () => {
    // 未完了エリアからの削除
    deleteFromIncomplateArea(deleteButton.parentNode);
  });

  //未作成リストに設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplate-ul").appendChild(div);
};

// 未完了エリアからの削除
const deleteFromIncomplateArea = (targetElement) => {
  document.getElementById("incomplate-ul").removeChild(targetElement);
};

// 追加ボタン押下時処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
