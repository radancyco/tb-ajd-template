# Advanced Job Details (AJD) Template version 1.0
Last Updated 5/18/2017

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

# Instructions for creating the first AJD on a site
1. Begin by creating a new Theme inside the current TB site. 
    * Name this theme AJD – [custom theme name (Normally category or Job title)]
2. Edit the new theme code
    1. Copy all the HTML and Razor from the Default "Full" Theme to this new theme
    2. Add `@Html.GetThemeCSS("Full")` (which is the default theme's css) above `@Html.Partial("_ThemeCSS")` (which is your current themes css)
    3. Add `@Html.GetThemeJavascript("Full")` (which is the default theme's JavaScript) above `@Html.Partial("_ThemeJavascript")` (which is your current themes JavaScript)
    4. Add `<script src="//clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>` under `@Html.Partial("_ThemeJavascript")`
    5. Add `<script type="text/javascript" src="//clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>` under `<script src="//clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>`
