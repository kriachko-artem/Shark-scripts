window.onload = function () {
    let action = setTimeout(function (){
        var form = document.getElementsByTagName('form'),
            p = form.length;
        while (p--) {
            form[p].setAttribute('action', 'ordered.php');
        }
    },5000)
}
