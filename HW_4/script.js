window.onbeforeunload = function(e) {
    var dialogText = 'Форма очищена!';
    console.log(dialogText);
    return dialogText;
};

// $(window).unload(function() {
//     alert('Handler for .unload() called.');
// });