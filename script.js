function copyColor(color) {
  navigator.clipboard
    .writeText(color)
    .then(function () {
      alert("color code copied to clipboard : " + color);
    })
    .catch((err) => {
      console.error("Unable to copy code to clipboard", err);
    });
}

function showShades(shade) {
  let redShade = document.querySelector(".red-shade");
  let orangeShade = document.querySelector(".orange-shade");
  let yellowShade = document.querySelector(".yellow-shade");
  let greenShade = document.querySelector(".green-shade");
  let blueShade = document.querySelector(".blue-shade");
  let indigoShade = document.querySelector(".indigo-shade");
  let violetShade = document.querySelector(".violet-shade");
  let blackShade = document.querySelector(".black-shade");

  switch (shade) {
    case "red":
      redShade.style.display = "flex";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "orange":
      redShade.style.display = "none";
      orangeShade.style.display = "flex";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "yellow":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "flex";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "green":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "flex";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "blue":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "flex";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "indigo":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "flex";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
      break;
    case "violet":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "flex";
      blackShade.style.display = "none";
      break;
    case "black":
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "flex";
      break;
    default:
      redShade.style.display = "none";
      orangeShade.style.display = "none";
      yellowShade.style.display = "none";
      greenShade.style.display = "none";
      blueShade.style.display = "none";
      indigoShade.style.display = "none";
      violetShade.style.display = "none";
      blackShade.style.display = "none";
  }
}
