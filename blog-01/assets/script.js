const icon = document.querySelectorAll("#icon");
  icon.forEach((icon) => {
    icon.onclick = () => {
      icon.classList.toggle("filled");
    };
  });

console.log(icon.onclick);
