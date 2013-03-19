#Sample Code from Meeting Site

**HTML5, CSS, SASS/SCSS, JavaScript, jQuery, web standards**  
[View Samples Online](http://joeoravec.com/sample-meeting-pages/ "Sample Meeting Pages")

## Files Included in this Repo
Links included below point to the pages on the sample site:

* ~~Sample “legacy” code~~ (forthcoming)
* 3-4 page types
  * [Course page](http://www.joeoravec.com/sample-meeting-site/meeting-site/course.htm "Course Page")
  * [“S” Conference menu page](http://www.joeoravec.com/sample-meeting-site/meeting-site/s-conf-menu.htm "S-Conference Menu Page")
  * [“S” Conference detail page](http://www.joeoravec.com/sample-meeting-site/meeting-site/s-conf-detail.htm "S-Conference Detail Page")
  * [“C” Meeting handout page](http://www.joeoravec.com/sample-meeting-site/meeting-site/c-meeting.htm "C-Meeting Handout Page")
* SASS code (SCSS, compiled as expanded, development CSS)
* Javascript code 
 
## Project Description

Completed through a subcontracting (client-of-a-client) arrangement, this project involved bringing the pages for the end client's annual meeting a little closer to better web practice with HTML5, CSS/SASS, web standards, and unobtrusive JavaScript.

 _(For clarity, I'll refer to my client as **project head** and the client's client as **end client**.)_
 
### Starting Point

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
    …
    <font id="italictext">again, on same page</font>
    
Intrusive Javascript, with content from elsewhere on the page duplicated within the function call. For footnotes:

    onMouseOver="return footnoteFunction('<font id=boldtext>Reference #1 - </font>Author, N. Article Title.  <font id=\'italictext\'>Journal Name</font>. pub date and page.<br><img src=\'./images/spacer.gif\' width=1 height=5><br><font color=a00000>Click now to navigate to reference section, then Back Button to return here.</font>')"


### A Leap Forward
**Semantic tags:** The most obvious and major change was a move to more semantic markup. 

* Headers are identified using appropriate tags (`<h1>`, `<h2>`, etc.) rather than just styled for presentation.
* Similarly, paragraphs are tagged with actual `<p>` tags instead of using `<br>` and spacer images to separate paragraphs. 
* Outdated tags (eg, `<font>`) were removed, and `id` attributes, where used, appear only once per document.
* New HMTL5 tags were employed where appropriate, including `<section>` for distinct sections, `<article>` for main content, `<header>` for page headers, `<figure>` and `<figcaption>` for figures within articles, and `<nav>` for navigation elements.

**CSS & SASS:** Finally, the project head embracing &mdash; or at least, accepting &mdash; abandoning `<table>` cells for page layout!  

* Layout/presentation was moved from HTML to CSS. 
* Taking matters even further, I used SASS (specifically, SCSS) for even more efficiency:
	* Nesting selectors in SCSS to streamline coding the styles &mdash; it's much clearer this way, too.
	* variables for colors, font names, etc., such as:
	  * `$mainAccent: #00216d;`
	  * `$family-serif-georgia: Georgia, "Times New Roman", Times, serif;`
	* @mixins created to handling fonts, borders, margins, and sprites:	
	
A sample of a @mixin for sprites:
   
    @mixin sprite-nav-button($width, $offX, $offY) {
      display:block;
      text-indent:-9999px;
      background: url(../images/sprites_case_nav.png) 0 0 no-repeat;
      height: 15px;
      width: $width;
      background-position: $offX $offY;
    }    
* To future-proof any conversion to a fluid layout and mobile devices, `max-width` and percentage width values were used throughout.
    
**Removed redundant code:**

* Footnotes were streamlined. Using jQuery, the reference footnote text is read and display from the footnote itself and is not copied into every link to that footnote. For example, this link's hover:   
`[<a href="#ref7"  class="referencelink" data-reference="ref7">7</a>]`   
reads and displays the text from this footnote:  
`<li id="ref7">Earl Wayland Bowman. The Ramblin' Kid. Here is some further details about this resource, pp. 102-109.</li>`
* jQuery was also used to display duplicate navigation at the bottom of those pages where it was previously included in the code twice.

**jQuery/Javascript:** In addition to the enhancements noted above, scripts were created to allow the obtrusive code to be removed. An example of the updated figures:

    <figure data-figure-id="18">
      <a href="image18.jpg" class="parnav"><img src="http://placehold.it/110x83" alt="" /></a>
      <figcaption>
        <a href="image18.jpg" class="parnav">Item 0 - Figure 1</a><br/>
        The pale Usher—threadbare in coat, heart, body, and brain; I see him now.
      </figcaption>                             
    </figure>

See the file scripts/meeting-scripts.js for the new code.

To the extent possible, fallback was also provided for users who might visit the pages without javascript. In the figure example above, such users would simply link directly to the full-size image; previously, the `href` for these images pointed to a javascript functions that would fail entirely if the user's browser was not so enabled.

### For Further Improvement

Though much better and standards-compliant, there are still opportunities for further improvement. Lessons learned along the way, and areas that remain off-limits for change:

* **Remove frames.** The site as a whole continues to be presented in an outdated frameset. As development on that frameset is performed in part by other parties, the frames remain in place for the immediate future and couldn't be altered or reworked as part of this project, limiting among other things the ability to present the meeting content responsively.  

* **Proper `<article>` usage.** My initial pass through the new pages placed the main text for each content page in `<article>` tags; however, the title and author/presenter information appeared before this article section of the page. A better practice would be to include this title and author information inside the `<article>` tags -- possibly with some reworking of how the local navigation and supporting text are presented. 

* **OOCSS.** I could have better employed some of OOCSS principles. For example, in a handful of instances I defined headings (eg, `<h1>`) to appear differently within `<article>` tags than they appear elsewhere on the page. This issue would be better addressed by reworking the entire meeting page layouts from scratch -- with an overarching heading scheme -- rather than reimplementing the outdated layouts.  

* **JS/CSS Preprocessing/Minification**. The javascript and the stylesheets could benefit from preprocessing to combine multiple files and minify for production.



