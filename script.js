/* =====================================================================
   script.js  (THIS FILE IS EMPTY ON PURPOSE. IT ONLY HAS NOTES.)

   Your website works with only HTML and CSS. It already follows the
   visitor's phone or computer setting:
     - phone is in dark mode  -> the site shows dark colors
     - phone is in light mode -> the site shows light colors
   That is done in style.css with "@media (prefers-color-scheme: dark)".

   What you do NOT have yet is a BUTTON that lets the visitor choose
   Light or Dark by themselves, and that remembers the choice.
   That needs JavaScript. This file tells you what to learn first.
   ===================================================================== */


/* =====================================================================
   PART 1. WHAT YOU SHOULD KNOW BEFORE YOU START
   Learn these in this order. Each one is small.
   ===================================================================== */

/*
   1) HTML: ids, classes and buttons
      - An id is a unique name for one tag:      <button id="theme-btn">
      - A class is a name for many tags:         <a class="btn">
      - JavaScript finds a tag using its id or its class.

   2) CSS variables (you already use them)
      - In style.css, :root { --bg: #FAF7F4; } stores a color in a box
        called --bg. Then background: var(--bg); uses it.
      - Dark mode is only this: use another set of colors in the same boxes.
      - So changing the theme = changing the values of the variables.

   3) CSS selectors with classes
      - html.dark { --bg: #141112; }
        means: "when the <html> tag has the class dark, use these colors".
      - JavaScript will add or remove the word "dark" on the <html> tag.
        CSS then does all the coloring. JavaScript never touches colors.

   4) JavaScript basics (only these 6 things are needed)
      a) Variable:   var name = "Rudra";          (a named box)
      b) Function:   function sayHi() { ... }      (steps with a name)
      c) if / else:  if (something) { ... } else { ... }
      d) Find a tag: document.getElementById("theme-btn")
      e) Change a class:
           tag.classList.add("dark")        puts the class on
           tag.classList.remove("dark")     takes the class off
           tag.classList.contains("dark")   asks: is the class there? (true/false)
      f) Click:      button.onclick = sayHi;  (run sayHi when clicked)

   5) localStorage (to remember the choice)
      - The browser keeps small notes for your site.
      - Save:  localStorage.setItem("theme", "dark");
      - Read:  localStorage.getItem("theme");    (gives "dark", or null if empty)
      - It can fail in private mode, so wrap it in try { ... } catch (error) { ... }

   6) prefers-color-scheme (you already use it in CSS)
      - It tells you what the visitor's device is set to.
      - In JavaScript you can ask:
          window.matchMedia("(prefers-color-scheme: dark)").matches
        It gives true if the device is in dark mode.
*/


/* =====================================================================
   PART 2. THE PLAN (5 STEPS)
   ===================================================================== */

/*
   STEP 1. HTML: add a button inside the header in index.html:
             <button type="button" id="theme-btn">Dark</button>

   STEP 2. CSS: in style.css, add the dark colors under a class.
           Right now they are inside @media (prefers-color-scheme: dark).
           Copy the same colors into:
             html.dark { --bg: ...; --text: ...; (all the same variables) }
           Also, to let a visitor choose LIGHT while the phone is dark,
           you need the class "light" as well. Start simple: only "dark".

   STEP 3. JavaScript: when the button is clicked, do this:
             - if <html> has the class "dark", remove it. Otherwise add it.
             - change the button text (Dark <-> Light)

   STEP 4. JavaScript: save the choice with localStorage.setItem.

   STEP 5. JavaScript: when the page opens, read the saved choice
           and apply it. Put this tiny part inside <head> of index.html,
           so the page does not flash white before turning dark.

   Link this file in index.html (it is written there as a comment, remove
   the comment marks):
             <script src="script.js"></script>
*/


/* =====================================================================
   PART 3. EXAMPLE CODE TO READ AND UNDERSTAND
   It is inside a comment, so it does nothing now. To try it, copy it
   OUT of the comment, one small piece at a time, and test it.
   ===================================================================== */

/*

// 1. Find the button and the <html> tag
var themeButton = document.getElementById("theme-btn");
var pageRoot = document.documentElement;

// 2. Write the right text on the button
function updateButtonText() {
  if (pageRoot.classList.contains("dark")) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
}

// 3. Save the choice (try/catch keeps the site working if saving is blocked)
function saveChoice(choice) {
  try {
    localStorage.setItem("theme", choice);
  } catch (error) {
    // saving is not allowed, do nothing
  }
}

// 4. Switch the theme when the button is clicked
function changeTheme() {
  if (pageRoot.classList.contains("dark")) {
    pageRoot.classList.remove("dark");
    saveChoice("light");
  } else {
    pageRoot.classList.add("dark");
    saveChoice("dark");
  }
  updateButtonText();
}

// 5. Run changeTheme when the button is clicked
themeButton.onclick = changeTheme;

// 6. When the page opens, use the saved choice
try {
  if (localStorage.getItem("theme") === "dark") {
    pageRoot.classList.add("dark");
  }
} catch (error) {
  // do nothing
}
updateButtonText();

*/


/* =====================================================================
   PART 4. COMMON MISTAKES FOR BEGINNERS
   ===================================================================== */

/*
   - The id in HTML and the id in getElementById must be exactly the same.
   - The script must load AFTER the button exists. That is why the
     <script> tag goes at the end of <body>.
   - Spelling: classList (capital L), getElementById (capital E and I).
   - If nothing happens, open the browser, press F12, click "Console".
     It shows the error and the line number.
   - The colors must come from variables (var(--bg)). If some color is
     written directly (like #ffffff), it will not change in dark mode.
   - Test in both modes, and also with a private window.
*/


/* =====================================================================
   PART 5. WHAT TO PRACTICE (IN THIS ORDER)
   ===================================================================== */

/*
   1. Change one CSS variable in :root and watch the whole site change.
   2. In the browser, press F12 and add class="dark" on the <html> tag
      by hand. See how the colors change. That is exactly what the
      JavaScript will do for you.
   3. Make a small test page with one button that shows an alert
      when clicked (button.onclick = function () { alert("Hi"); }).
   4. Make the button add and remove a class on the body.
   5. Add localStorage. Then come back to this plan.

   Good free places to learn: MDN Web Docs (search "classList",
   "localStorage", "prefers-color-scheme") and javascript.info
   (the first 3 chapters).
*/
