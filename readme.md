#Sample Code from Meeting Site

**HTML5, CSS, SASS/SCSS, JavaScript, jQuery, web standards**  
[View Samples Online](http://joeoravec.com/sample-meeting-pages/ "Sample Meeting Pages")

### Files Included in this Repo
* Sample “legacy” code
* 3-4 page types
  * Content page
  * Course page
  * “S” Conference menu page
  * “S” Conference detail page
  * “C” Meeting handout page
* sass code
* js code 
 
###Description

Completed through a subcontracting (client-of-a-client) arrangement, this project involved bringing the pages for the end client's annual meeting a little closer to better web practice with HTML5, CSS/SASS, web standards, and unobtrusive JavaScript.

 _(For clarity, I'll refer to my client as **project head** and the client's client as **end client**.)_
 
###Starting Point

For a variety of reasons, the project head has stuck with *old* HTML: think spacer images, tables as layout, and `<font>` tags. Yikes.

A few specific examples:

Paragraphs separated with spacer images:

	<br>
	<img src="./images/spacer.gif" width=1 height=9>
	<br>

Non-semantic headers:

    <img src="./images/spacer.gif" width=1 height=9><br>    <font id="boldtext">Discussion:</font><br>
 
Repeated `id` tags for bold and italic styles. Eg: 
 
    <font id="italictext">for emphasis</font>
    
Intrusive Javascript, with content from elsewhere on the page duplicated within the function call. For footnotes:

    onMouseOver="return footnoteFunction('<font id=boldtext>Reference #1 - </font>Author, N. Article Title.  <font id=\'italictext\'>Journal Name</font>. pub date and page.<br><img src=\'./images/spacer.gif\' width=1 height=5><br><font color=a00000>Click now to navigate to reference section, then Back Button to return here.</font>')"


###A Leap Forward
Semantic tags

Removed redundant code

jQuery/javascript

CSS -- SASS

###For Further Improvement

Description, including ideas for improvements (remove frames, proper article use, oocss, js/css processing/minification)