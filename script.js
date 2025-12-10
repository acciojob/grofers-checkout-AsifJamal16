const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let prices = document.querySelectorAll("td.price");

const getSum = () => {
    let sum = 0;

    prices.forEach(function(p){
        sum = sum + Number(p.innerText);
    });

    console.log(sum);
};

getSumBtn.addEventListener("click", getSum);
