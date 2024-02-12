function Shoaib() {
    let total_marks_of_grade12 = document.querySelector("#tm1").value;
    let obtained_marks_of_grade12 = document.querySelector("#obt1").value;
    let result = (obtained_marks_of_grade12 / total_marks_of_grade12) * 100;
    alert("Congrats! you got:" + result + "%")
    document.querySelector("#text").innerHTML = ("Congrats! you got:" + result + "%");
    console.log("Congrats! you got:" + result + "%");
}