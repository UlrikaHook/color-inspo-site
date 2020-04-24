
//********************
//KOD FÖR ATT SLUMPA FRAM FÄRGER */
//välj alla divs inne i klassen box
const boxes = document.querySelectorAll(".box .colorBox");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeDivs = () => {
  for (let box of boxes) {
    const p = box.querySelector("p");
    const newColor = getRandomColor();
    box.style.backgroundColor = newColor;
    p.innerText = newColor;
  }
};

const btn = document.querySelector("#click");
//binder funktionen changeDivs till knappen
btn.addEventListener("click", changeDivs);
changeDivs();

//************************** */



//*KOD FÖR ATT GE ALLA ICKE SLUMPADE TEXT */
//välj alla med klassen colorBox
const allBoxes = document.querySelectorAll(".colorBox");

//hämtar lådans färg
//gör om till hex från rgb
//sätter lådans p.innerText till färgen
const changeInnerText = (box) => {
	const style = window.getComputedStyle(box).backgroundColor
	const color = RGBToHex(style)
	const p = box.querySelector("p");
	p.innerText = color.toUpperCase();
}

//stulen från nätet... gör om rgb till hex, komplicerat
function RGBToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}


//loopar över alla colorBox
for(let box of allBoxes){
	changeInnerText(box)
}

//********************* */



