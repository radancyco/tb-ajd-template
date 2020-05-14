Last Updated: **05/14/20**


## Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Quick Links](#quick-links)
- [Introduction](#introduction)
- [Technologies used](#technologies-used)
- [What these templates work with](#what-these-templates-work-with)
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

This repository contains the boilerplate used to create advanced job detail pages on TalentBrew. There are currently 2 versions of the AJD.


## Quick Links

* [Latest AJD code instructions.](https://github.com/tmpworldwide/tb-ajd-template/tree/gh-pages/code/v2)
* [Version 1 AJD code instructions.](https://github.com/tmpworldwide/tb-ajd-template/tree/gh-pages/code/v1)
* [Download entire repository.](https://github.com/dchacon1/tb-ajd-template/archive/gh-pages.zip)


## Introduction

The AJD template is meant to be a skeleton version of HTML and SASS. This has been done to speed up the development of AJDs. 

Version two has been created with the goal of dividing the AJD into sections that can be add or removed with ease.


## Technologies used

* HTML5: Used for the structure and layout
* SCSS: Used for styling
* ASP.net Razor: used to link dynamic content from system
* BEM: Is a class naming structure of Block__Element--Modifier it helps you to achieve reusable components and code and it makes CSS specificity very flat and low reducing the need for `!important` declarations.
* jQuery: Used for animations and different functionality. There is an AJD script and a Custom Imports Script being used


## What these templates work with

ALL HTML and Razor works in the TB system with the latest features of the TB Job Details page as of 05/14/20

This templates SASS variables, mixins and functions work with the default SASS and Compass for TB Full Theme as of 05/14/20



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
5. Find the anchor tag for glassdoor and replace `#REPLACEME` with the url
6. Copy the numbers in the URL that trail the E, for example TMP's is 247764
7. Find the AJD Glassdoor image source located in either the CSS as a background image or an HTML img tag and replace the `01` after the `?e=` with the copied numbers

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