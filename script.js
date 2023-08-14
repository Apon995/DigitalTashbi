let subhan_allahvalue = document.getElementById("subhan_allahValue");
subhan_allahvalue = 0;

document.getElementById("subhan_allahCountbtn").addEventListener("click", function () {
    subhan_allahvalue += 1;
    document.getElementById("subhan_allahValue").innerText = subhan_allahvalue;
    document.getElementById('subhan-allah-value').innerText = subhan_allahvalue;


    let value1 = document.getElementById('subhan_allahValue').innerText;
    value1 = parseInt(value1);

    let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
    value2 = parseInt(value2);

    let value3 = document.getElementById('Allahu_akbarValue').innerText;
    value3 = parseInt(value3);
    const totalvalue = value1 + value2 + value3;
    document.getElementById('total').innerText = totalvalue;
});


document.getElementById("subhan_allahDownbtn").addEventListener("click", function () {
    if (subhan_allahvalue > 0) {
        subhan_allahvalue -= 1;
        document.getElementById("subhan_allahValue").innerText = subhan_allahvalue;
        document.getElementById('subhan-allah-value').innerText = subhan_allahvalue;


        let value1 = document.getElementById('subhan_allahValue').innerText;
        value1 = parseInt(value1);

        let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
        value2 = parseInt(value2);

        let value3 = document.getElementById('Allahu_akbarValue').innerText;
        value3 = parseInt(value3);
        const totalvalue = value1 + value2 + value3 

        document.getElementById('total').innerText = totalvalue;
    }

});

let alhumduliaahValue = document.getElementById("Alhum_dulilaahValue");
alhumduliaahValue = 0;

document.getElementById("Alhum_dulilaahCountbtn").addEventListener("click", function () {
    alhumduliaahValue += 1;

    document.getElementById("Alhum_dulilaahValue").innerText =
        alhumduliaahValue;
    document.getElementById('alhamduliaah-value').innerText = alhumduliaahValue;

    let value1 = document.getElementById('subhan_allahValue').innerText;
    value1 = parseInt(value1);

    let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
    value2 = parseInt(value2);

    let value3 = document.getElementById('Allahu_akbarValue').innerText;
    value3 = parseInt(value3);
    const totalvalue = value1 + value2 + value3;
    document.getElementById('total').innerText = totalvalue;
});
document.getElementById("Alhum_dulilaahDownbtn").addEventListener("click", function () {
    if (alhumduliaahValue > 0) {
        alhumduliaahValue -= 1;
        document.getElementById("Alhum_dulilaahValue").innerText = alhumduliaahValue;
        document.getElementById('alhamduliaah-value').innerText = alhumduliaahValue;

        let value1 = document.getElementById('subhan_allahValue').innerText;
        value1 = parseInt(value1);

        let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
        value2 = parseInt(value2);

        let value3 = document.getElementById('Allahu_akbarValue').innerText;
        value3 = parseInt(value3);
        const totalvalue = value1 + value2 + value3 ; 
        document.getElementById('total').innerText = totalvalue;
    }
});


let allah_huakbarValue = document.getElementById('Allahu_akbarValue');
allah_huakbarValue = 0;

document.getElementById("Allahu_akbarCountbtn").addEventListener('click', function () {
    allah_huakbarValue += 1;
    document.getElementById('Allahu_akbarValue').innerText = allah_huakbarValue;
    document.getElementById('allahuakbar-value').innerText = allah_huakbarValue;
    let value1 = document.getElementById('subhan_allahValue').innerText;
    value1 = parseInt(value1);

    let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
    value2 = parseInt(value2);

    let value3 = document.getElementById('Allahu_akbarValue').innerText;
    value3 = parseInt(value3);
    const totalvalue = value1 + value2 + value3;

    document.getElementById('total').innerText = totalvalue;
})

document.getElementById('Allahu_akbarDownbtn').addEventListener('click', function () {

    if (allah_huakbarValue > 0) {
        allah_huakbarValue -= 1;
        document.getElementById('Allahu_akbarValue').innerText = allah_huakbarValue;
        document.getElementById('allahuakbar-value').innerText = allah_huakbarValue;


        let value1 = document.getElementById('subhan_allahValue').innerText;
        value1 = parseInt(value1);

        let value2 = document.getElementById('Alhum_dulilaahValue').innerText;
        value2 = parseInt(value2);

        let value3 = document.getElementById('Allahu_akbarValue').innerText;
        value3 = parseInt(value3);
        const totalvalue = value1 + value2 + value3 ; 
        document.getElementById('total').innerText = totalvalue;
    }
})
const resetAll = () => {
    subhan_allahvalue = 0;
    document.getElementById("subhan_allahValue").innerText = 0;
    document.getElementById('subhan-allah-value').innerText = 0;


    alhumduliaahValue = 0;
    document.getElementById("Alhum_dulilaahValue").innerText = 0;
    document.getElementById('alhamduliaah-value').innerText = 0;


    allah_huakbarValue = 0;
    document.getElementById('Allahu_akbarValue').innerText = 0;
    document.getElementById('allahuakbar-value').innerText = 0;


    document.getElementById('total').innerText = 0;
}





function toggleNav(event){
    event.name = event.name == 'menu' ? 'close' : 'menu';

    document.querySelector('.opacity-0').classList.toggle('opacity-90')

}