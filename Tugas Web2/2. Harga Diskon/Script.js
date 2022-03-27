function hasil() {
    var harga = parseInt(document.getElementById("harga").value);
    var jumlah = parseInt(document.getElementById("jumlah").value);
    var diskon = parseInt(document.getElementById("diskon").value);
    var total = harga * jumlah;
    document.getElementById("total").innerHTML = total;
    var besar = diskon * total / 100;
    document.getElementById("besar").innerHTML = besar;
    var setelahDiskon = total - besar;
    document.getElementById("setelahDiskon").innerHTML = setelahDiskon;
}