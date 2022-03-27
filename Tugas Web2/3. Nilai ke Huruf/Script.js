const buttonHitungNilai = document.querySelector(".btnHitung");
buttonHitungNilai.addEventListener("click", function(){
    const nilaiTugas1 = document.querySelector("#nilaiTugas1").value;
    const nilaiTugas2 = document.querySelector("#nilaiTugas2").value;
    const nilaiTugas3 = document.querySelector("#nilaiTugas3").value;

    const nilaiAkhir = function() {
        const nilaiAngka = document.querySelector(".nilaiAngka");
        const hasil = (nilaiTugas1 * 20 / 100) + (nilaiTugas2 * 30 / 100) + (nilaiTugas3 * 50 / 100);

        nilaiAngka.innerHTML = `
            <div class="box box-1">
                <p class="box-header">Nilai Angka</p>
                <div class="nilaiAngka"><h2>${hasil}</h2></div>
            </div>
        `;

        const nilaiHuruf = document.querySelector(".nilaiHuruf");
        let grade;
        if (hasil > 80 && hasil <= 100 ){
            grade = 'A';
        } else if (hasil > 69){
            grade = 'B';
        } else if (hasil > 59){
            grade = 'C';
        } else if (hasil > 49){
            grade = 'D';
        } else {
            grade = 'E';
        }

        nilaiHuruf.innerHTML = `
            <div class="box box-2">
                <p class="box-header">Nilai Huruf</p>
                <div class="nilaiHuruf"><h2>${grade}</h2></div>
            </div>
        `;
    }
    nilaiAkhir();
});