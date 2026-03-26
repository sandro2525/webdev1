const container = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.display = "inline-block";
  box.style.margin = "10px";

  if (i % 2 === 0) {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "red";
  }

  container.appendChild(box);
}

document.body.appendChild(container);