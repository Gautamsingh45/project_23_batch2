arr=[
    {
        name: "gautam singh",
        address: "mp nagar",
        phone: 987654321
    }
    , {
        name: "sonu singh",
        address: "Banaras",
        phone: 987654321
    }
    , {
        name: "gautam singh",
        address: "Vanarasi",
        phone: 987654321
    }
]
function demo1(){
    var a1 = document.gtm.text.value;
    // document.write(a1);
    document.getElementById('demo').innerHTML=JSON.stringify(arr[a1]);
}