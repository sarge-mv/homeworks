function substringCheck(str1, str2) {
    if (str1.length < str2.length) {
        return str2.includes(str1);
    }
    return str1.includes(str2);
}