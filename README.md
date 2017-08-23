# Advanced Job Details (AJD) Template 2.0

Last Updated: **5/25/2017**

This is the boilerplate used to create advanced job detail pages on TalentBrew. Visit the [repository](https://github.com/tmpworldwide/tb-ajd-template) to learn more or [download](https://github.com/tmpworldwide/tb-ajd-template/archive/gh-pages.zip) now.

## Table of Contents

* [Introduction](#introduction)
* [Techonlogies used](#techonlogies-used)
* [What this template works with](#what-this-template-works-with)
* [Instructions for creating the first AJD on a site](#instructions-for-creating-the-first-ajd-on-a-site)
* [Visual Examples](#visual-examples)
* [Undstanding what you can do and change](#undstanding-what-you-can-do-and-change)
* [Instructions for creating an additional AJD after one already exists on a site](#instructions-for-creating-an-additional-ajd-after-one-already-exists-on-a-site)

## Introduction

AJD Template is meant to be a skeleton version of HTML and SASS to speed up Development on AJD Themes.

## Techonlogies used

* HTML5: Used for the structure and layout
* SCSS: Used for styling
* ASP.net Razor: used to link dyanmic content from system 
* BEM: Is a class naming strucure of Block__Element--Modifer it helps you to achieve reusable components and code and it makes CSS specificity very flat and low reducing the need for `!important` declarations.

## What this template works with

ALL HTML and Razor works in the TB system with the latest features of the TB Job Details page as of 5/16/2017  

This templates SASS variables, mixins and functions work with the default SASS and Compass for TB Full Theme as of 5/16/2017  

## Instructions for creating the first AJD on a site

1. Begin by creating a new Theme inside the current TB site. 
    * Name this theme [custom theme name (Normally category and or location or Job title)]
2. Edit the new theme HTML and Razor
    1. Copy all the HTML and Razor from the Default "Full" Theme to this new theme
    2. Add `@Html.GetThemeCSS("Full")` (which is the default theme's css) above `@Html.Partial("_ThemeCSS")` (which is your current themes css)
    3. Add `@Html.GetThemeJavascript("Full")` (which is the default theme's JavaScript) above `@Html.Partial("_ThemeJavascript")` (which is your current themes JavaScript)
    4. Add `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>` then `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>` under `@Html.Partial("_ThemeJavascript")` (Both files are needed and work together to add functionality to the AJD. The first script is for the sticky header and the second has the JS calling the first and has other AJD functions )
3. Edit the SASS and JavasScript for the AJD theme
    1. Replace all SASS for the theme with `//using full theme sass` (We will put our styles in the full theme as many other AJD pages may need this same styles)
    2. Replace all JavaScript with `//using full theme javascript`
 4. Add Template SASS to the full theme SASS
     * Add the [AJD template SASS](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/ajd-styles.scss) to the full theme sass and edit it to match your mocks
 5. Create the page in the theme
     1. Within your new Theme create a new Job Details page. name it "AJD – [current custom theme name]"
     2. Add any core or shell level modules you need to match the new page to the existing Default theme. You can compare the Default Theme Job Details page to your new one to see what modules you need to add to which partials and use that the base your new page off of. Note that your new page may not have all of the modules the current Default Job Details page has and that some of the modules may need to be shifted in placement or styled differently within your new theme page.
6. Create a new Job Details module from the Modules page and name it "AJD – [current custom theme name]"
    * Inside of the newly created Job Details Module you will replace all of the HTML/razor that is currently there with the [AJD template HTML](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/ajd-module.html)
7. In your new AJD named Job Details page go to the partial assignment where the default Job Details Module is and click on the dropdown arrow and choose to replace the default Job Details Module with your newly created module. (If you do not see your module in the dropdown first make sure the module has been saved and refresh the job details page)
8. Go to any modules that are also in the AJD in page navigation for example the Callout Link Module for the Map and add the class `ajd_section` to the module and add an id of "anchor-[section name]" so for that map module it would be `id="anchor-map"` Also at the bottom of the module add an accessibility link to get back into the navigation for the map module it would be `                <p class="back-to-ajd-nav"><a class="back-to-ajd-nav__a" href="#ajd-anchor-map">Back to Job Navigation (Map)</a></p>`

## Visual Examples

* [Skeleton Example](https://tmpworldwide.github.io/tb-ajd-template/examples/skeleton/) This example shows what an AJD would look like if you made one only using the default styles of a Full TB.

## Undstanding what you can do and change

### Add unique SVG images

1. Save your illustration as an SVG
2. Compress your SVG https://jakearchibald.github.io/svgomg/
3. Encode SVG for background image http://codepen.io/jakob-e/pen/doMoML
4. Add this encoded CSS into your SASS file
5. Replace the stroke with a variable for example if you were doing one for the rewards sections you can change `stroke='%23000'` to `stroke='rgba(#{$icon-color})'`


### Add or remove sticky functionality

All you need to do for this is to add or remove the class `make-sticky` which is by default on the `id="ajd_header"`

### Add, remove animations on scroll or change how often animations happen
add `enhance-element` class to any elements you want to enhacne when they come into view of the viewport. When this element comes into view two classes will be added `active` and `actived-once` when this elment goes out of view the class `active` is removed but `actived-once` remains. So when you want to only animate something once then you put your css animations of the `actived-once` class. This may be ideal for the rwards icons to only animate on the first time you see them and not animate again when you scroll past them and then back up again.

## Instructions for creating an additional AJD after one already exists on a site

Coming soon.
