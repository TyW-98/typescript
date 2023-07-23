"use strict";
const yearSpan = document.getElementById("year");
const year = new Date().getFullYear().toString();
yearSpan.setAttribute("datetime", year);
yearSpan.textContent = year;
