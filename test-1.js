
function button_click() {
 var txt = $("#msg")[0].value;
 if(!txt) {
  return;
 }
 var curdat = new Date();
 $("#messages").html( '<div style="width: 200px; display: inline-block; color: #00F;">' + txt + '</div><span style="color: #00F;">' + curdat.getHours() + ':' + curdat.getMinutes() + '</span><br />' + $("#messages").html().replace(/color: #00F;/gi, "color: #000;") );
 $("#msg")[0].value = "";
}
