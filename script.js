function menghitungBarang(){
    let tanpaDiskon = 0;
    let diskonSatu = 0;
    let diskonDua = 0;
    let database = 0;
    let database2 = 0;
    let i = 1;

    const harga = 5000; 

    document.getElementById("infoUpdate").innerHTML = "";
    document.getElementById("wow").innerHTML = "";

    const jumlahPengunjung = parseInt(document.getElementById("jumlahPembeli").value) || 0;

    while (i <= jumlahPengunjung){
        let jumlahBuku = parseInt(prompt("Masukkan jumlah buku: (angka bulat)"));

		
		
        if (jumlahBuku <= 100){
            let total = jumlahBuku * harga;
            tanpaDiskon += total;
			if (total > 0){
			console.log(`Pembeli  ke - ${i} membeli buku sebanyak ${jumlahBuku} dan membayar sebesar ${total}`)
		}
            document.getElementById("infoUpdate").innerHTML +=
                `Pembeli ke-${i} membeli ${jumlahBuku} buku, total Rp ${total.toLocaleString("id-ID")}<br>`;
        }
        else if (jumlahBuku <= 200){
            let total = (100 * harga * 0.95) + (jumlahBuku - 100) * harga * 0.85;
            database++;
            diskonSatu += total;
			if (total > 0){
			console.log(`Pembeli  ke - ${i} membeli buku sebanyak ${jumlahBuku} dan membayar sebesar ${total}`)
		}
            document.getElementById("infoUpdate").innerHTML +=
                `Pembeli ke-${i} membeli ${jumlahBuku} buku, total Rp ${total.toLocaleString("id-ID")}<br>`;
        }
        else if(jumlahBuku > 200){
            let total = (100 * harga * 0.93) + (100 * harga * 0.83) + (jumlahBuku - 200) * harga * 0.73;
            database2++;
			if (total > 0){
			console.log(`Pembeli  ke - ${i} membeli buku sebanyak ${jumlahBuku} dan membayar sebesar ${total}`)
		}
            diskonDua += total;
            document.getElementById("infoUpdate").innerHTML +=
                `Pembeli ke-${i} membeli ${jumlahBuku} buku, total Rp ${total.toLocaleString("id-ID")}<br>`;
        }

        i++;
    }

    let hasil = tanpaDiskon + diskonSatu + diskonDua;
    let rataRata = jumlahPengunjung > 0 ? hasil / jumlahPengunjung : 0;

    document.getElementById("wow").innerHTML =
        `Total pendapatan dari seluruh penjualan adalah Rp ${hasil.toLocaleString("id-ID")}<br>` +
        `Rata-rata pendapatan adalah Rp ${rataRata.toLocaleString("id-ID")}<br>` +
        `Total pembeli diskon kecil: ${database}<br>` +
        `Total pembeli diskon besar: ${database2}`;

	console.log(`Total seluruh pendapatan adalah Rp.${hasil}`)
	console.log(`Rata rata pendapatan adalah Rp.${rataRata}`)
	
	console.log(`Total pembeli yang mendapatkan diskon kecil adalah ${database} pembeli`)
	console.log(`Total pembeli yang mendapatkan diskon besar adalah ${database2} pembeli`)
	
}
