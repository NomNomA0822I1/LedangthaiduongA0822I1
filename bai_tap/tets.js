var rate, index;

function locate(f,member,curr,r) {
    f.country.value=member;
    f.currency.value=curr;
    f.euro1.value=1;
    rate=r;
    toLocal(f);
}
function toLocal(f) {
    if (f.euro1.value != "") {
        f.local1.value = eval(f.euro1.value * rate);
        if (f.euro1.value != "1") {
            f.local1.value=eval(Math.round(f.local1.value * 100)) / 100;
            f.local1.value=format(f.local1.value);
        }
    }
}
function toEuro(f) {
    if (f.local2.value != "") {
        f.euro2.value = eval(f.local2.value / rate);
        if (f.local2.value != "1") {
            f.euro2.value=eval(Math.round(f.euro2.value * 100)) / 100;
            f.euro2.value=format(f.euro2.value);
        }
    }
}
function format(str) {
    index = str.indexOf(".");
    if (index < 0) str = str + ".00";
    else {
        str = str.substring(0, index + 3);
        if (str.length < (index + 3)) str += "0";
    }
    return str;
}
//  End -->
</script>
