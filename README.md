# Advanced Job Details (AJD) Template version 1.0
Last Updated 5/18/2017
[create an anchor]

## Introduction
AJD Template is meant to be a skeleton version of HTML and SASS to speed up Development on AJD Themes.

## Techonlogies used
* HTML5: Used for the structure and layout
* SCSS: Used for styling
* ASP.net Razor: used to link dyanmic content from system 
* BEM: Is a class naming strucure of Block__Element--Modifer it helps you to achieve reusable components and code and it makes CSS specificity very flat and low reducing the need for importants

## What this template works with
ALL HTML and Razor works in the TB system with the latest features of
the TB Job Details page as of 5/16/2017  

This templates SASS variables, mixins and functions work with the default SASS and Compass for TB Full Theme as of 5/16/2017  
(#anchors-in-markdown)
## Instructions for creating the first AJD on a site
1. Begin by creating a new Theme inside the current TB site. 
    * Name this theme [custom theme name (Normally category and or location or Job title)]
2. Edit the new theme HTML and Razor
    1. Copy all the HTML and Razor from the Default "Full" Theme to this new theme
    2. Add `@Html.GetThemeCSS("Full")` (which is the default theme's css) above `@Html.Partial("_ThemeCSS")` (which is your current themes css)
    3. Add `@Html.GetThemeJavascript("Full")` (which is the default theme's JavaScript) above `@Html.Partial("_ThemeJavascript")` (which is your current themes JavaScript)
    4. Add `<script type="text/javascript" src="//clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>` then `<script type="text/javascript" src="//clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>` under `@Html.Partial("_ThemeJavascript")` (Both files are needed and work together to add functionality to the AJD. The first script is for the sticky header and the second has the JS calling the first and has other AJD functions )
3. Edit the SASS and JavasScript for the AJD theme
    1. Replace all SASS for the theme with `//using full theme sass` (We will put our styles in the full theme as many other AJD pages may need this same styles)
    2. Replace all JavaScript with `//using full theme javascript`
 4. Add Template SASS to the full theme SASS
     * just copy form this file and edit it to match your mocks
 5. Create the page in the theme
     1. Within your new Theme create a new Job Details page. name it "AJD – [current custom theme name]"
     2. Add any core or shell level modules you need to match the new page to the existing Default theme. You can compare the Default Theme Job Details page to your new one to see what modules you need to add to which partials and use that the base your new page off of. Note that your new page may not have all of the modules the current Default Job Details page has and that some of the modules may need to be shifted in placement or styled differently within your new theme page.
6. Create a new Job Details module from the Modules page and name it "AJD – [current custom theme name]"
    * Inside of the newly created Job Details Module you will replace all of the HTML/razor that is currently there with this
7. In your new AJD named Job Details page go to the partial assignment where the default Job Details Module is and click on the dropdown arrow and choose to replace the default Job Details Module with your newly created module. (If you do not see your module in the dropdown first make sure the module has been saved and refresh the job details page)
8. Go to any modules that are also in the AJD in page navigation for example the Callout Link Module for the Map and add the class `ajd_section` to the module and add an id of "anchor-[section name]" so for that map module it would be `id="anchor-map"`
