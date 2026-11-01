const recipes = [
  { title: "定番・豚こま塩こしょう", category: ["meat"], tags: ["お肉", "10分"], desc: "豚のうまみをまとわせた、まずはこれ！の王道味。", time: "10 min", color: "#91b734", bg: "#ecf3c8", ingredients: "もやし 1袋、豚こま切れ肉 120g、塩 小さじ1/3、こしょう 少々、にんにく 少々", steps: ["豚肉を炒め、色が変わったらもやしを加える。", "強火で2分炒め、塩こしょうで味を整える。"] },
  { title: "にら玉もやし", category: ["veggie"], tags: ["卵", "10分"], desc: "ふわふわ卵とシャキシャキ野菜の、やさしい一皿。", time: "10 min", color: "#b1c943", bg: "#f1f3ce", ingredients: "もやし 1袋、にら 1/2束、卵 2個、鶏ガラスープの素 小さじ1", steps: ["溶き卵を半熟に炒めて一度取り出す。", "もやしとにらを炒め、卵を戻して調味する。"] },
  { title: "えび塩レモン炒め", category: ["seafood"], tags: ["海鮮", "爽やか"], desc: "ぷりぷりえびにレモン。暑い日にもぴったり。", time: "12 min", color: "#d59055", bg: "#f8e6c9", ingredients: "もやし 1袋、むきえび 120g、レモン汁 小さじ2、塩 小さじ1/3、オリーブ油", steps: ["えびをオリーブ油で炒める。", "もやしを加え、塩とレモン汁で手早く仕上げる。"] },
  { title: "韓国風・牛肉コチュジャン", category: ["meat", "spicy"], tags: ["ピリ辛", "ごはん"], desc: "甘辛だれが食欲を刺激する、白ごはん泥棒。", time: "12 min", color: "#c75d32", bg: "#f5ded2", ingredients: "もやし 1袋、牛こま 150g、コチュジャン 大さじ1、醤油 小さじ2、ごま油", steps: ["牛肉をごま油で炒め、コチュジャンと醤油を絡める。", "もやしを加え、強火でさっと炒める。"] },
  { title: "きのこバター醤油", category: ["veggie"], tags: ["野菜だけ", "香り"], desc: "きのこの香りとバター醤油が、もやしに合う。", time: "10 min", color: "#9baf55", bg: "#e9efd7", ingredients: "もやし 1袋、しめじ 1/2パック、バター 10g、醤油 小さじ2", steps: ["バターでしめじを炒める。", "もやしと醤油を加え、香ばしく炒める。"] },
  { title: "ツナ塩昆布もやし", category: ["seafood"], tags: ["缶詰", "5分"], desc: "火を使う時間も短め。忙しい日の救世主レシピ。", time: "5 min", color: "#9cbd52", bg: "#edf2d7", ingredients: "もやし 1袋、ツナ缶 1缶、塩昆布 ひとつまみ、ごま油 小さじ1", steps: ["もやしを炒め、油を切ったツナを加える。", "塩昆布とごま油を混ぜて完成。"] },
  { title: "ベーコン黒こしょう", category: ["meat"], tags: ["洋風", "10分"], desc: "カリカリベーコンの塩気に、粗びき黒こしょう。", time: "10 min", color: "#a9745b", bg: "#f1e4d8", ingredients: "もやし 1袋、ベーコン 3枚、黒こしょう たっぷり、醤油 少々", steps: ["ベーコンをカリッと焼く。", "もやしを加えて炒め、黒こしょうと醤油を振る。"] },
  { title: "にんにく味噌もやし", category: ["veggie"], tags: ["野菜だけ", "濃厚"], desc: "にんにく味噌のコクで、もやしだけでも満足。", time: "8 min", color: "#a5bd42", bg: "#edf2cc", ingredients: "もやし 1袋、味噌 大さじ1、みりん 小さじ1、にんにく 少々", steps: ["味噌、みりん、にんにくを混ぜる。", "もやしを炒め、合わせ調味料を絡める。"] },
  { title: "豚キムチもやし", category: ["meat", "spicy"], tags: ["ピリ辛", "定番"], desc: "キムチの酸味と豚肉のコク。失敗知らずの味。", time: "12 min", color: "#bd5e3e", bg: "#f6ded2", ingredients: "もやし 1袋、豚バラ 100g、キムチ 100g、醤油 小さじ1", steps: ["豚バラを炒め、キムチを加える。", "もやしを加え、醤油で味を整える。"] },
  { title: "たこと青ねぎの塩炒め", category: ["seafood"], tags: ["海鮮", "おつまみ"], desc: "たこの歯ごたえと青ねぎ。お酒にも合う一皿。", time: "8 min", color: "#b56d57", bg: "#f4e3db", ingredients: "もやし 1袋、ゆでだこ 100g、青ねぎ 2本、塩、鶏ガラスープの素", steps: ["たこを食べやすく切り、もやしと炒める。", "青ねぎと調味料を加え、さっと混ぜる。"] },
  { title: "カレー粉もやし", category: ["veggie"], tags: ["野菜だけ", "スパイス"], desc: "カレーの香りで、いつもの副菜が新鮮に。", time: "7 min", color: "#c4a23e", bg: "#f7efc9", ingredients: "もやし 1袋、カレー粉 小さじ1、塩 少々、醤油 小さじ1", steps: ["もやしを強火で炒める。", "カレー粉、塩、醤油を加えて混ぜる。"] },
  { title: "花椒香るよだれもやし", category: ["spicy"], tags: ["ピリ辛", "中華"], desc: "花椒のしびれとラー油。クセになる大人の味。", time: "8 min", color: "#8da83b", bg: "#eaf0cb", ingredients: "もやし 1袋、醤油 大さじ1、酢 小さじ2、ラー油、花椒", steps: ["もやしを炒め、醤油と酢を加える。", "火を止めてラー油と花椒を振る。"] },
  { title: "厚揚げとオイスター", category: ["veggie"], tags: ["ボリューム", "15分"], desc: "厚揚げを足して、主役級の食べごたえ。", time: "15 min", color: "#a7ad4c", bg: "#eef0d3", ingredients: "もやし 1袋、厚揚げ 1枚、オイスターソース 大さじ1、醤油 小さじ1", steps: ["厚揚げを焼き色がつくまで炒める。", "もやしと調味料を加え、全体を炒め合わせる。"] },
  { title: "鶏むね塩だれ", category: ["meat"], tags: ["お肉", "ヘルシー"], desc: "しっとり鶏むねと塩だれで、軽やかに満足。", time: "15 min", color: "#b6c957", bg: "#eef2d4", ingredients: "もやし 1袋、鶏むね肉 150g、塩 小さじ1/3、レモン汁、ごま油", steps: ["そぎ切りにした鶏肉を炒める。", "もやしと塩だれを加えて、火を通す。"] },
  { title: "明太マヨもやし", category: ["seafood"], tags: ["海鮮", "濃厚"], desc: "明太子とマヨネーズの濃厚さを、もやしで軽く。", time: "7 min", color: "#d27d65", bg: "#f7e3dd", ingredients: "もやし 1袋、明太子 1/2腹、マヨネーズ 大さじ1、醤油 少々", steps: ["もやしを炒めて火を止める。", "明太子とマヨネーズを混ぜ、余熱で絡める。"] },
];

const grid = document.querySelector("#recipe-grid");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#recipe-dialog");
const dialogContent = document.querySelector("#dialog-content");

function render(filter = "all") {
  const visible = recipes.filter((recipe) => filter === "all" || recipe.category.includes(filter));
  grid.innerHTML = visible.map((recipe) => {
    const index = recipes.indexOf(recipe) + 1;
    return `<article class="recipe-card" tabindex="0" data-index="${index}" aria-label="${recipe.title}のレシピを開く">
      <div class="card-visual" style="--card-color:${recipe.color};--card-bg:${recipe.bg}">
        <span class="card-number">${String(index).padStart(2, "0")}</span><div class="mini-bowl"></div><span class="card-time">${recipe.time}</span>
      </div>
      <div class="card-tags">${recipe.tags.map((tag) => `<span class="card-tag">#${tag}</span>`).join("")}</div>
      <h3>${recipe.title}</h3><p>${recipe.desc}</p>
    </article>`;
  }).join("");
  empty.hidden = visible.length > 0;
  grid.querySelectorAll(".recipe-card").forEach((card) => {
    card.addEventListener("click", () => openRecipe(Number(card.dataset.index) - 1));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") openRecipe(Number(card.dataset.index) - 1); });
  });
}
function openRecipe(index) {
  const recipe = recipes[index];
  dialogContent.innerHTML = `<span class="dialog-kicker">RECIPE ${String(index + 1).padStart(2, "0")} / 15</span><h2>${recipe.title}</h2><div class="dialog-columns"><div><h3>材料（2人分）</h3><p>${recipe.ingredients}</p></div><div><h3>作り方</h3><ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol></div></div>`;
  dialog.showModal();
}
document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active");
  render(button.dataset.filter);
}));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
render();
