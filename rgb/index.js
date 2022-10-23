function colors() {
  let valuer = document.querySelector("#red").value;
  let valueg = document.querySelector("#green").value;
  let valueb = document.querySelector("#blue").value;
  document.querySelector(".Red").style.backgroundColor = `rgb(${valuer},0,0)`;
  document.querySelector(".Green").style.backgroundColor = `rgb(0,${valueg},0)`;
  document.querySelector(".Blue").style.backgroundColor = `rgb(0,0,${valueb})`;
  document.querySelector(
    ".btn"
  ).style.backgroundColor = `rgb(${valuer},${valueg},${valueb})`;
  document.querySelector(".r-value").innerHTML = `255 Value: ${valuer}`;
  document.querySelector(".g-value").innerHTML = `255 Value: ${valueg}`;
  document.querySelector(".b-value").innerHTML = `255 Value: ${valueb}`;
  // console.log(valuer, valueg, valueb);
}
colors();
