function totalPurchaseSumOfBestThreeCustomers(listOfTotalPurchasePerCustomer) {
    let totalSum = 0;
    listOfTotalPurchasePerCustomer.forEach(totalPurchaseOfCustomer=>{
        totalSum += totalPurchaseOfCustomer;
    });
    return totalSum;
}

let bestThreeCustomers = [10000, 20000, 30000];
console.log(totalPurchaseSumOfBestThreeCustomers(bestThreeCustomers));