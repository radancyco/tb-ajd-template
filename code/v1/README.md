Last Updated: **03/26/18**


## Table of Contents
- [Instructions for creating the first AJD on a site](#instructions-for-creating-the-first-ajd-on-a-site)
- [Visual Examples](#visual-examples)
- [Instructions for creating an additional AJD after one already exists on a site](#instructions-for-creating-an-additional-ajd-after-one-already-exists-on-a-site)




## Instructions for creating the first AJD on a site

1. Begin by **creating a new Theme** inside the current TB site.
    * Name this theme [custom theme name (Normally category and or location or Job title)]
2. Edit the new theme HTML and Razor
    1. Copy all the HTML and Razor from the Default "Full" Theme to this new theme
    2. Make sure the SASS and JavaScript that are assigned to the new theme matches the "Full" Theme
    4. Add `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/jquery-scrolltofixed-min.js"></script>` then `<script src="https://clientfiles.tmpwebeng.com/tmp/tb-assets/ajd/ajd-scripts-min.js"></script>` under `@Html.Partial("_ThemeJavascript")` (Both files are needed and work together to add functionality to the AJD. The first script is for the sticky header and the second has the JS calling the first and has other AJD functions )
    5. Add `<script id="js-custom-imports" src="https://services1.tmpwebeng.com/custom-imports/custom-imports.js?scripts=charts,video"></script>` under `@Html.Partial("_ThemeJavascript")` (This file is the Decoupled Scripts file, we will slowly be moving all AJD features to this file.)
3. Add Template SASS to the full theme SASS
    * Add the [AJD template SASS](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/ajd-styles.scss) to the full theme sass and edit it to match your mocks
4. Create the page in the theme
    1. Within your new Theme **create a new Advanced Job Details page.** name it "AJD – [current custom theme name]"
    2. Add any core or shell level modules you need to match the new page to the existing Default theme. You can compare the Default Theme Job Details page to your new one to see what modules you need to add to which partials and use that the base your new page off of. Note that your new page may not have all of the modules the current Default Job Details page has and that some of the modules may need to be shifted in placement or styled differently within your new theme page.
5. **Create a new Job Details module** from the Modules page and name it "AJD – [current custom theme name]"
    * Inside of the newly created Job Details Module you will replace all of the HTML/razor that is currently there with the [AJD template HTML](https://github.com/tmpworldwide/tb-ajd-template/blob/gh-pages/code/ajd-module.html)
6. In your new AJD named Job Details page go to the partial assignment where the default Job Details Module is and click on the dropdown arrow and choose to replace the default Job Details Module with your newly created module. (If you do not see your module in the dropdown first make sure the module has been saved and refresh the job details page)
7. Go to any modules that are also in the AJD in page navigation for example the Callout Link Module for the Map and add the class `ajd_section` to the module and add an id of "anchor-[section name]" so for that map module it would be `id="anchor-map"` Also at the bottom of the module add an accessibility link to get back into the navigation for the map module it would be `<p class="back-to-ajd-nav"><a class="back-to-ajd-nav__a" href="#ajd-anchor-map">Back to Job Navigation (Map)</a></p>`


## Visual Examples

* [Developer - Skeleton Example](https://tmpworldwide.dev/tb-ajd-template/examples/skeleton/) This example shows what an AJD would look like if you made one only using the default styles of a Full TB, with alerts that remind the developer to update links.
* [Creative - Skeleton Example](https://tmpworldwide.dev/tb-ajd-template/examples/skeleton/?no-checks) This example shows what an AJD would look like if you made one only using the default styles of a Full TB, without alerts.


## Instructions for creating an additional AJD after one already exists on a site

1. Use the copy function on the theme level of a previously made AJD
2. Copy the current Job Details module that was used on the previous AJD THeme
3. Assign that new module to the new theme in place of the previous Job Details Module.
4. Updating the content on that new Job Details Module as needed
