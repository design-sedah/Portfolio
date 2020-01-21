$(document).ready(function() {
    "use strict";
    let plus = document.getElementsByClassName("plus");
    for(let i = 0 ; i < plus.length ; i++) {
        plus[i].addEventListener("click",plusValue);
    }
    function plusValue() {
        let parentItem = this.parentElement;
        let parentAll = parentItem.parentElement; 
        let childItems = parentAll.children;
        let values1 = childItems[2].children;
        let weight = values1[0];
        let values2 = childItems[4].children;
        let price = values2[0];
        let values3 = childItems[3].children;
        let select = values3[1];
        let currentWeight = +weight.innerHTML;
        let currentPrice = +price.innerHTML / currentWeight;
        if (weight.innerHTML < 20) {
            weight.innerHTML = +weight.innerHTML + 0.5;
            select.value = +weight.innerHTML;
            price.innerHTML = +weight.innerHTML * currentPrice;
        }
    }

    let minus = document.getElementsByClassName("minus");
    for(let i = 0 ; i < minus.length ; i++) {
        minus[i].addEventListener("click",minusValue);
    }
    function minusValue() {
        let parentItem = this.parentElement;
        let parentAll = parentItem.parentElement; 
        let childItems = parentAll.children;
        let values1 = childItems[2].children;
        let weight = values1[0];
        let values2 = childItems[4].children;
        let price = values2[0];
        let values3 = childItems[3].children;
        let select = values3[1];
        let currentWeight = +weight.innerHTML;
        let currentPrice = +price.innerHTML / currentWeight;
        if (weight.innerHTML > 0.5) {
            weight.innerHTML = +weight.innerHTML - 0.5;
            select.value = +weight.innerHTML;
            price.innerHTML = +weight.innerHTML * currentPrice;
        }
    }

    let select  = document.getElementsByClassName("push2");
    for(let i = 0 ; i < select.length ; i++) {
        select[i].addEventListener("click",addValue);
    };
    function addValue() {
        let parentItem = this.parentElement;
        let parentAll = parentItem.parentElement; 
        let childItems = parentAll.children;
        let values1 = childItems[2].children;
        let weight = values1[0];
        let values2 = childItems[4].children;
        let price = values2[0];
        let currentWeight = +weight.innerHTML;
        let currentPrice = +price.innerHTML / currentWeight;
        if (weight.innerHTML < 20) {
            weight.innerHTML = Math.round(+weight.innerHTML + 3/4);
            price.innerHTML = +weight.innerHTML * currentPrice;
        }
    }

    let buyPage = document.getElementsByClassName("buy_page")[0];
    let finallCount = document.getElementsByClassName("lastPrice")[0];
    finallCount.innerHTML = 0;
    let add = document.getElementsByClassName("add_text");
    for(let i = 0 ; i < add.length ; i++) {
        add[i].addEventListener("click",addProduct);
    }
    function addProduct(yes,no) {
        let text = "Ցանկանում ե՞ք պահպանել և փոխանցել մթերքը զամբյուղ";
        let parentItem = this.parentElement;
        let parentAll = parentItem.parentElement; 
        let childItems = parentAll.children;
        let value1 = childItems[2].children;
        let weight = value1[0].innerHTML;
        let value2 = childItems[4].children;
        let price = value2[0].innerHTML; 
        let newText = childItems[1].innerHTML + "  -  " + weight + "կգ" + " , " + price + "դրամ";
        if (confirm(text)) {
            yes();
        }
        else {
            no();
        }
        function yes() {
            let quantity = document.getElementsByClassName("quantity")[0];
            quantity.addEventListener("click",showPage);
            let count = document.getElementsByClassName("val2")[0];
            let newValue = document.getElementsByClassName("food_price")[0];
            quantity.style.display = "block";
            count.innerHTML = +count.innerHTML + 1;
            newValue.innerHTML = Math.round(+newValue.innerHTML + +price);
            let busketBut = document.getElementsByClassName("busket_but")[0];
            let buyText = document.createElement("p");
            buyText.innerHTML = newText;
            buyPage.appendChild(buyText);
            buyPage.insertBefore(buyText,busketBut);
            buyText.setAttribute("style","font-size:20px;color:rgb(7,202,7);margin-left:35px;margin-bottom:25px;");
            buyText.classList += "shopText";
            finallCount.innerHTML = +newValue.innerHTML ; 
            let del = document.getElementsByClassName("delete")[0];
            del.addEventListener("click",removeAll);
            function removeAll() {
                buyPage.removeChild(buyText);
                finallCount.innerHTML = 0;
                count.innerHTML = 0;
                newValue.innerHTML = 0;
                quantity.style.display = "none";
            }
        }
        function no() {
            window.alert("Փոխանցումը չեղարկված է:");
        }
    }

    let products = document.getElementsByClassName("products")[0];
    let searchDiv = document.getElementsByClassName("search_divs")[0]; 
    let basket = document.getElementsByClassName("basket")[0];
    basket.addEventListener("click",showPage);
    function showPage() {
        products.style.display = "none";
        searchDiv.style.display = "none";
        buyPage.style.display = "block";
    }

    let exit = document.getElementsByClassName("exit")[0];
    exit.addEventListener("click",exitCurrent);
    function exitCurrent(text,yes) {
        let message = "Վստահ ե՞ք,որ ցանկանում եք ետ գնալ նախկին էջ:";
        if (confirm(message)) {
           yes();
        }
        function yes() {
            buyPage.style.display = "none";
            products.style.display = "flex";
            searchDiv.style.display = "flex";
        }
    } 
});
