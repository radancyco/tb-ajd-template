Last Updated: **05/14/20**

# Advanced Job Details (Version 2)


## Table of Contents
- [Overview](#overview)
- [Introduction](#introduction)
- [Technologies used](#technologies-used)
- [What this templatew works with](#what-this-template-works-with)
- [Things to know before you start](#things-to-know-before-you-start)
  - [How to find Category ID](#how-to-find-category-id)
  - [How to find Location ID](#how-to-find-location-id)
  - [How to find Facet ID](#how-to-find-facet-id)
- [Creating an AJD (for very first AJD on site)](#creating-an-ajd)
- [Adding to an existing AJD](#adding-to-an-existing-ajd)
- [AJD Modules](#ajd-modules)


## Overview
This repository contains the version 2 template used to create advanced job detail pages on TalentBrew.


## Introduction
The AJD template is meant to be a skeleton version of HTML and SASS. This has been done to speed up the development of AJDs. 

Version two has been created with the goal of dividing the AJD into sections that can be add or removed with ease.


## Technologies used
* HTML5: Used for the structure and layout
* SCSS: Used for styling
* ASP.net Razor: used to link dynamic content from system
* BEM: Is a class naming structure of Block__Element--Modifier it helps you to achieve reusable components and code and it makes CSS specificity very flat and low reducing the need for `!important` declarations.
* jQuery: Used for animations and different functionality. There is an AJD script and a Custom Imports Script being used


## What this template work with
ALL HTML and Razor works in the TB system with the latest features of the TB Job Details page as of 05/14/20

This templates SASS variables, mixins and functions work with the default SASS and Compass for TB Full Theme as of 05/14/20



## Things to know before you start
Before you start creating your theme or any modules it is important to note that we are using razor inside each module to change content based on category, location, or facets. 

This means that **a portion of every AJD module will need to share the same exact razor.** In each module the razor code has been divided into sections for what is unique to that module vs what should be included on every module.



### How to find Category ID
While there are many ways to do this, an easy way is to go the search results page and inspect the category you want in the search filters. The id will be the value of the `data-id` attribute. 

Example:
```
<input type="checkbox" id="category-filter-0" class="filter-checkbox" data-facet-type="1" data-id="75907" data-count="1" data-display="Accounting Clerk" data-field-name="">
```


### How to find Location ID
A simple way to do this is to type the location you need into the search form. Once you have done this DO NOT CLICK SEARCH, but rather, inspect the input field and look for the `data-lp` attribute. The value of the `data-lp` attribute is the ID of you location you typed.

You can also watch the <a href="https://tbcdn.talentbrew.com/company/1554/francis_testing/location_id.mp4" target="_blank">video demonstration</a> on how to find the location ID.



### How to find Facet ID
Finding the facet ID is very similar to finding category ID but there are a couple of additional steps.
1. Go the search results page and find the `data-id` attribute from facet that you inspect in the search filters.
2. On that same element find the `data-field-name` attribute.
3. The facet ID will be a concatenation of both of the above values with a hypen in between. Any white space will also need to be replaced with hyphens.

Example 1:
```
<input type="checkbox" id="job_level-filter-0" class="filter-checkbox" data-facet-type="5" data-id="Regular" data-count="321" data-display="Regular" data-field-name="job_level">
```
The facet ID for example 1 is job_level-Regular

Example 2:
```
<input type="checkbox" id="job_type-filter-0" class="filter-checkbox" data-facet-type="5" data-id="Full Time" data-count="13" data-display="Full Time" data-field-name="job_type">
```
The facet ID for example 2 is job_type-Full-Time



## Creating an AJD
Only follow these instructions if the site you are working on does not currently have any AJDs.

1. **Create a new Theme** inside the current TB site and do the following:
    * Name this theme "AJD Theme"
2. Edit the new theme HTML and Razor
    * Copy all the HTML and Razor from the Default "Full" Theme to this new theme - make sure to also
    * Add the modules from the full theme to this new theme
    * Make sure the SASS and JavaScript that are assigned to the new theme matches the "Full" Theme
    * Add the following code to the `<html>` tag: `data-theme-name="@pageModel.ThemePage.SiteTheme.Name" data-category-id="@pageModel.CategoryIds" data-location-id="@pageModel.LocationIds" data-facet-id="@pageModel.FacetIds"`. This code will help with debugging.
    * Add the following scripts below `@Html.Partial("_ThemeJavascript")` in this order
        1. `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>`
        2. `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>`
        3. `<script id="js-custom-imports" src="https://services1.tmpwebeng.com/custom-imports/custom-imports.js?scripts=charts,video"></script>`
3. Add [AJD SASS](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/styles/ajd-styles.scss) to full theme SASS
4. Map all filters to Theme level
5. Create page for theme
    * Do no map any filters on the page level
    * Name the page "AJD"
    * Add any modules from the design that are on the regular JD page to this new AJD page
6. Create AJD modules and add to page
    * Make sure to find the IDs for the filters you mapped to the theme level
    * Once you have found all the necessary filter IDs add them to EACH module you create for the AJD.
    * Once IDs are added to each module don't forget to update your if statements within each module.



## Adding to an existing AJD
These steps should only be followed if the previous AJD uses the latest AJD code.

1. Map new filters to the AJD Theme Level
2. Find the IDs for the filters you mapped to the theme level and add them to all the modules
3. Update if statements to change out content based on new filters
    * If the new AJD has a module that the previous AJD doesn't have you can always create a new module. Once you do that you can make it so the module only appears when the correct filter is applied.



## AJD Modules
Almost all of these should be created as Custom HTML modules. The only exception is the Header and Job Description module - both of these should be created as Job Details modules, this means that each AJD will have two Job Details modules.

IMPORTANT: Make sure to add the appropriate ID that corresponds to the in-page navigation for EACH module.

Each module has instructions on how to utilize the razor in it. If you come across any issues please report them to Brock Barnett or Daniel Chacon as soon as possible.

- [Code for Header Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-header.html)
- [Code for Overview Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-overview.html)
- [Code for Success Profile (Graph) Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-success-profile-graph.html)
- [Code for Success Profile (Trait Circle) Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-success-profile-trait-circle.html)
- [Code for Culture Points Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-culture-points.html)
- [Code for Career Path Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-career-path.html)
- [Code for Quote Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-quote.html)
- [Code for Trending Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-trending.html)
- [Code for Featured Image / Parallax Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-featured-image.html)
- [Code for Benefits / Rewards Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-rewards.html)
- [Code for Job Description Module](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/v2/html/ajd-job-description.html)














