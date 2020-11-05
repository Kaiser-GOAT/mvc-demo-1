import "./app2.css";
import $ from "jquery";
const $tagBar = $("#app2 .tag-bar");
const $tagContent = $("#app2 .tag-content");
$tagBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selective").siblings().removeClass("selective");
  const index = $li.index();
  $tagContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tagBar.children().eq(0).trigger("click");
