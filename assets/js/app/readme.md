JS Files for Theme
==================

You don't need to link to files placed in this folder. Instead, link to either
production.js or development.js files in functions.php or directly in your markup.

Consideration: These scripts load on all pages. So if your script isn't required to be called everywhere you may not
want to place file here.

Also, files placed in the scripts sub-folder will compile after the files placed in this folder. Therefore, place dependencies in 'app' and place your scripts in 'scripts'.
