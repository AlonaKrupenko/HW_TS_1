function getPositiveNumbers(arr) {
    var resultArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el > 0) {
            resultArr.push(el);
        }
    }
    return resultArr.length === 0
        ? (console.log("There is no positive numbers"), null)
        : resultArr;
}
