// copy text to clipboard
var artlink_clipboard = new ClipboardJS("#btn_artlink");
var chain_clipboard = new ClipboardJS("#btn_chaincode");

artlink_clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  e.clearSelection();
});
artlink_clipboard.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});

chain_clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  e.clearSelection();
});
chain_clipboard.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});

// add or remove class ( time line buttons )
$(".btn_timeLine").click(function () {
  $(".btn_timeLine").removeClass("btn_active_timeline");
  $(this).addClass("btn_active_timeline");
});

// switch buttons in proofs page
$(".btn_section").click(function () {
  $(".btn_section").removeClass("btn_section_active");
  $(this).addClass("btn_section_active");
});
