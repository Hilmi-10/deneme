 //Document ile çıktı

 //document.writeln("Bu ilk çıktı Document ile <br>");
 //document.writeln("Elif Taş");

 //console.log("Bu console.log ile ilk çıktı");

 //console.log(document.location.host);

 //alert("merhaba");


 const editOption = document.querySelector('.edit');
const deleteOption = document.querySelector('.delete');
const changeOption = document.querySelector('.done');

editOption.addEventListener('click', function() {
    console.log('Düzenle seçeneği tıklandı!');
});

deleteOption.addEventListener('click', function() {
    console.log('Sil seçeneği tıklandı!');
});

changeOption.addEventListener('click', function() {
    console.log('Tamamla seçeneği tıklandı!');
});
