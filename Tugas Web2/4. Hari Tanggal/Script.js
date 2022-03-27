function fungsihari()
{
var x;
var y=new Date().getUTCDay();
var z=new Date();
switch (y)
    {
    case 0:
        x="Hari ini adalah hari Minggu";
    break;
    case 1:
        x="Hari ini adalah hari Senin";
    break;
    case 2:
        x="Hari ini adalah hari Selasa";
    break;
    case 3:
        x="Hari ini adalah hari Rabu";
    break;
    case 4:
        x="Hari ini adalah hari Kamis";
    break;
    case 5:
        x="Hari ini adalah hari Jumat";
    break;
    case 6:
        x="Hari ini adalah hari Sabtu";
    break;
    }
    document.getElementById("hari").innerHTML=x;
    document.getElementById("tanggal").innerHTML=z;
}
