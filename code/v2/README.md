# Advanced Job Details (Version 2)
[Other versions](https://github.com/radancyco/tb-ajd-template/tree/main)

## Table of Contents
- [Advanced Job Details (Version 2)](#advanced-job-details-version-2)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Introduction](#introduction)
  - [Technologies used](#technologies-used)
  - [What this template works with](#what-this-template-works-with)
  - [Things to know before you start](#things-to-know-before-you-start)
    - [What is the preferred way to map AJDs?](#what-is-the-preferred-way-to-map-ajds)
    - [How find Category ID, Location ID and Facet ID and then create variables for each](#how-find-category-id-location-id-and-facet-id-and-then-create-variables-for-each)
  - [Creating an AJD](#creating-an-ajd)
  - [Adding to an existing AJD](#adding-to-an-existing-ajd)
  - [AJD Modules](#ajd-modules)
  - [Understanding what you can do and change](#understanding-what-you-can-do-and-change)
    - [Add unique SVG images](#add-unique-svg-images)
    - [Add or remove sticky functionality](#add-or-remove-sticky-functionality)
    - [Account for a client nav that is also sticky](#account-for-a-client-nav-that-is-also-sticky)
    - [Add or remove animations on scroll or change how often animations happen](#add-or-remove-animations-on-scroll-or-change-how-often-animations-happen)
    - [Make in page navigation highlight only one section at a time](#make-in-page-navigation-highlight-only-one-section-at-a-time)
    - [Adjusting the scroll to offset when using the in page navigation](#adjusting-the-scroll-to-offset-when-using-the-in-page-navigation)
    - [Updating Glassdoor to match company](#updating-glassdoor-to-match-company)
    - [Adding a video to the banner](#adding-a-video-to-the-banner)


## Overview
This folder contains the version 2 template used to create Advanced Job Detail pages on TalentBrew.


## Introduction
This version was created with the goal of making the HTML and SCSS more modular. Decoupling the JS is still on our roadmap but as of right now we are rolling out the HTML and SCSS changes.


## Technologies used
* HTML5: Used for the structure and layout
* SCSS: Used for styling
* ASP.net Razor: used to link dynamic content from system
* BEM: Is a class naming structure of Block__Element--Modifier it helps you to achieve reusable components and code and it makes CSS specificity very flat and low reducing the need for `!important` declarations.
* jQuery: Used for animations and different functionality. There is an AJD script and a Custom Imports Script being used


## What this template works with
ALL HTML and Razor works in the TB system with the latest features of the TB Job Details page. The SASS variables, mixins and functions work with the default SASS and Compass for TB Full Theme



## Things to know before you start
Before you start creating your theme or any modules it is important to note that we are using razor inside each module to change content based on category, location, or facets.

Determining which AJD is using what mappings is determined at **the page level you will creative ajd types** In each module the AJD Type viewbag will be pulled in.

### What is the preferred way to map AJDs?
The preferred way is to have the feed team setup a custom field called "AJD" and at the theme level we map to each value inside that facet. (Note: Never map based on the facet and ALL values because this could result in many pages not displaying any content if no AJD content is setup for that value.) 


### How find Category ID, Location ID and Facet ID and then create variables for each
Simply go to your AJD theme that has the mappings then open your console log and paste of the of example snippets into your console log.
https://codedrive.io/#/snippets/171



## Creating an AJD
Only follow these instructions if the site you are working on does not currently have any AJDs.
IMPORTANT: ONLY CREATE ONE AJD PAGE AND ONE AJD THEME. DO NOT CREATE MULTIPLE AJD PAGES

1. **Create a new Theme** inside the current TB site and do the following:
    * Name this theme "AJD Theme"
2. Edit the new theme HTML and Razor
    * Copy all the HTML and Razor from the Default "Full" Theme to this new theme
    * Add the modules from the full theme to this new theme
    * Make sure the SASS and JavaScript that are assigned to the new theme matches the "Full" Theme
    * Add the following attributes to the `<html>` tag on the theme level: `data-theme-name="@pageModel.ThemePage.SiteTheme.Name" data-category-id="@pageModel.CategoryIds" data-location-id="@pageModel.LocationIds" data-facet-id="@pageModel.FacetIds"`. This code will help with debugging.
    * Add the following scripts below `@Html.Partial("_ThemeJavascript")` in this order
        1. `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>`
        2. `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>`
        3. `<script id="js-custom-imports" src="https://services1.tmpwebeng.com/custom-imports/custom-imports.js?scripts=charts,video"></script>`
3. Add [AJD SASS](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/styles/ajd-styles.scss) to full theme SASS
4. Do NOT map any filters to the Theme Level.
5. Create page for theme - only create ONE AJD page per design.
    * Map Filter at the Page Level.
    * Name the page "AJD Design (number)"
    * [AJD Page HTML](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-page-level.html)
    * If any modules on the current JD page exist on the design add those modules to this new AJD page
6. Create [AJD modules](#ajd-modules) and add to page
    * Make sure to find the IDs for the filters you mapped to the theme level
    * Once you have found all the necessary filter IDs **create ajd types** on the page level.
    * Once IDs are added to the page for each ajd type don't forget to **update your if-statements** within each module.
    * Each module has its own set of unique instructions on how to implement. You can view the list of modules [here](#ajd-modules)



## Adding to an existing AJD
These steps should only be followed if the previous AJD uses the layout format as the version 2 AJD.

1. Map new filters to the AJD Page Level
2. Find the IDs for the filters you mapped to the page level and add them to to the page level as ajd types
3. Update if-statements to change out content based on new ajd types
    * If the new AJD has a module that the existing AJDs do not have you will still need to create a new module. Once you do that you can make it so the new module only appears when the correct filter is applied.



## AJD Modules
Almost all of these should be created as Custom HTML modules. **The only exception is the Header and Job Description module** - both of these should be created as Job Details modules, this means that each AJD will have TWO Job Details modules.

IMPORTANT: Make sure to add the appropriate ID that corresponds to the in-page navigation for EACH module.

Each module has instructions on how to utilize the razor in it. If you come across any issues please report them to Brock Barnett or Daniel Chacon as soon as possible.

- [FOR GST](https://tbadmin.talentbrew.com/layoutmanagement/designlayoutitem/0)

- [Code for Header Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-header.html)
- [Code for Overview Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-overview.html)
- [Code for Success Profile (Graph) Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-success-profile-graph.html)
- [Code for Success Profile (Trait Circle) Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-success-profile-trait-circle.html)
- [Code for Culture Points Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-culture-points.html)
- [Code for Career Path Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-career-path.html)
- [Code for Quote Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-quote.html)
- [Code for Trending Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-trending.html)
- [Code for Featured Image / Parallax Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-featured-image.html)
- [Code for Benefits / Rewards Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-rewards.html)
- [Code for Job Description Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-job-description.html)



## Understanding what you can do and change

### Add unique SVG images
1. Save your illustration as an SVG
2. Compress your SVG https://jakearchibald.github.io/svgomg/ (Make sure 'remove ViewBox' is disabled but 'Prefer viewBox to width/height' is enabled)
3. Change the stroke color to `REPLACEME`
4. Encode SVG for background image http://codepen.io/jakob-e/pen/doMoML
5. Search for `REPLACEME` and replace it with `#{$icon-color}`
6. Then you place that background image css into the following code and of course give it a name
```
@mixin ico-[your icon name here]($icon-color:#000) {
    $icon-color: svg-color-replace("#{$icon-color}"); //this function changes the color to svg compatible format
    [Your Background image css here]
}
```
7. Then you can call that SVG wherever you want like this
```
.class {
    @include ico-test(#ccc);
}
```

### Add or remove sticky functionality
All you need to do for this is to add or remove the class `js-ajd-sticky` which is by default on the `id="ajd_header"`. You can move this class to any element you want but it should only be used once on the page.


### Account for a client nav that is also sticky
Add the class `js-ajd-also-sticky` to the nav element that is sticky


### Add or remove animations on scroll or change how often animations happen
add `enhance-element` class to any elements you want to enhacne when they come into view of the viewport. When this element comes into view two classes will be added `active` and `actived-once` when this elment goes out of view the class `active` is removed but `actived-once` remains. So when you want to only animate something once then you put your css animations of the `actived-once` class. This may be ideal for the rwards icons to only animate on the first time you see them and not animate again when you scroll past them and then back up again.


### Make in page navigation highlight only one section at a time
In order to do this all you have to do is look for the class `ajd_navigation` in the HTML and add a class to that same div called `singular-highlighting`


### Adjusting the scroll to offset when using the in page navigation
Ideally, AJD sections should use Padding to offset where the sticky nav will stop. It always stops at the top of the section, so padding helps adds space between where the bottom of the nav is and the content of the section is, for example the headline. If you have overlap, check to see if there is a client nav that is being used in addtion to the AJD nav and use the `js-ajd-also-sticky` class on the client nav. If you still have issues or if padding will affect the design of the section you can use `data-ajd-offset-scroll` on the section. For example `data-ajd-offset-scroll="-20"` will remove 20px from the offset. (please note: that data-ajd-offset-scroll can not change from breakpoint to breakpoint. So you add 30 to the offset it will be 30px on both mobile and desktop)


### Updating Glassdoor to match company
1. Search for the companies glassdoor review page [here](https://www.glassdoor.com/Reviews/index.htm)
2. Then click on the company name in the results list
3. Click on the reviews tab
4. use the URL in the browser, for example TMP's is https://www.glassdoor.com/Reviews/TMP-Worldwide-Reviews-E247764.htm
5. Go to the code for the [Overview Module](https://github.com/radancyco/tb-ajd-template/blob/main/code/v2/html/ajd-overview.html) and follow the instructions on how to add the glassdoor icon


### Adding a video to the banner
1. Make sure that your Custom Imports script has video as a script it is loading
    * It will load in Fancybox script and styles by default, if you are already loading fancybox and want to use your own styles you can turn those off by adding `&no-styles=video&no-dependencies=video` to the script src
2. Add the following code to your banner and edit as needed
```
<button
   class="js-ci-video ci-video-btn"
   data-fancybox=""
   data-src="#ajd-video"
   data-video-name="ajdvideo"
   data-caption="<button data-fancybox href='#hidden-ajd-video-transcript'>Transcript</button>"
   aria-label="Now Hiring REPLACEMEajdMappingName (Video)">
</button>

<video id="ajd-video" aria-label="REPLACEMEajdMappingName" style="display:none;" controls crossorigin="anonymous">
   <source src="url/ajd-REPLACEMEajdMappingName.mp4" type="video/mp4">
   <track label="English" kind="captions" srclang="en" src="url/ajd-REPLACEMEajdMappingName-caption-en.vtt">
</video>

<div style="display: none;" id="hidden-ajd-video-transcript">
   <!-- Transcript (Taken from VTT, formatted into HTML) -->

   <h2>REPLACEMEajdMappingName</h2>

   <p><strong>Apply Now</strong></p>

   <p>Glassdoor: <strong>3.0</strong></p>

   <ul>
      <li>Full Time</li>
      <li>Level: Mid</li>
      <li>Travel: No</li>
   </ul>

   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet malesuada libero.</p>

   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet malesuada libero.</p>

   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet malesuada libero.</p>

   <ul>
      <li>Healthcare</li>
      <li>TimeOff</li>
      <li>Freedom</li>
      <li>Collaboration</li>
   </ul>

   <h2>Successful Traits of a REPLACEMEajdMappingName</h2>

   <ul>
      <li>TechnologicallySavvy</li>
      <li>Independent</li>
      <li>Leader</li>
      <li>Startegic</li>
      <li>Analytical</li>
      <li>Innovative</li>
   </ul>

   <p><strong>Apply Today</strong></p>

</div>
```
* If you want to do you own styles you can remove the class `ci-video-btn`
3. To test to make sure everything is working load the page with `?playvideo=ajdvideo` added to the end of URL in the browser
