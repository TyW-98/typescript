const yearSpan = document.getElementById("year") as HTMLSpanElement;
const year: string = new Date().getFullYear().toString();
yearSpan.setAttribute("datetime", year);
yearSpan.textContent = year;
