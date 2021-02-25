Sina Salehi</br>
CS5610 - Web Development</br>
Professor Annunziato</br>
Assignment 1 (Static Base) and 2 (User Administration)

<h1>Core Application Files</h1>

1. Components
    1. Course Editor
        1. course-editor.js
    1. Course Grid
        1. course-grid.js
        1. course-card.js
    1. Course Table
        1. course-table.js
        1. course-row.js
    1. course-manager.js
1. Services
    1. course-service.js
1. App.js
1. App.css
1. index.js
1. index.css

<h1>Application Map</h1>

<h3>Home (Course Manager)</h3>

The home page presents all courses stored on the server as a table by default.
Enter the name of a new course to be added to the Course Table and Course Grid
in the input field at the top of the page and click the red plus button to the
right of this input field to add a new course to the Course Table and Course
Grid with the text entered in the input field as the title of the course, the user
as the owner of the course, and the current date and time as the date last modified
and time last modified respectively.

<h3>Course Grid</h3>

The Course Grid displays all of the courses stored on the server as a grid of
cards.  Each card details the title of the course, the owner of the course, and the
date and time at which the course was last modified.  Click the button labeled "Go
to X", in which "X" is the title of the course, to navigate to the Course Editor.
Click the trash can icon to delete the course corresponding to that card from the
server.  Click the pencil/paper icon to edit the title of the course corresponding
to that card.  Clicking this icon transforms the course title at the top of the card
to an input field.  Enter the new title of the course in this input field and click
the check mark icon that replaced the pencil/paper icon to modify the title of the
course to the text entered in the input field.

<h3>Course Table</h3>

The Course Table displays all of the courses stored on the server as a table.
Each row details the title of the course, the owner of the course, and the
date and time at which the course was last modified.  Click the title of a course
to navigate to the Course Editor.  Click the trash can icon to delete the course
from the server.  Click the pencil/paper icon to edit the title of the course.
Clicking this icon transforms the course title at the front of the row
to an input field.  Enter the new title of the course in this input field and click
the check mark icon that replaced the pencil/paper icon to modify the title of the
course to the text entered in the input field.

<h3>Course Editor</h3>

The Course Editor displays all of the same information that was in the Course Editor
of the previous assignment.  The contents of the Course Editor are static/non-functional,
and clicking on any of the elements on the page except for the arrow in the upper-left corner
of the page or the X in the upper-right corner of the page will do nothing.  Clicking on either
the arrow in the upper-left corner of the page or the X in the upper-right corner of the page
will return you to the previous page (either the Course Table or Course Grid depending on
how you reached the Course Editor).