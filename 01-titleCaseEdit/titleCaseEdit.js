function titleCaseEdit(title) {
  // Insert code here;'
  var separate = title.toLowerCase().split(" ");
   for (var i = 0; i < separate.length; i++) {
      separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].substring(1);
   }
   return separate.join(" ");
  

}

//console.log(titleCaseEdit("the cow jumped over the moon"));
// Do not edit this line;
module.exports = titleCaseEdit;