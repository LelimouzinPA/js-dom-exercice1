function Val() {
    let numb1 = pass.value;
    let numb2 = pass2.value;
    if (numb1 == numb2) {
        pass.style.borderColor = "green";
        pass2.style.borderColor = "green";

    } else {
        pass.style.borderColor = "red";
        pass2.style.borderColor = "red";
    }
}