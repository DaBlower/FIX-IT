// ==UserScript==
// @name        Read More
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.1
// @author      DaBlower
// @description Automatically expand truncated comments and replies without clicking "read more"
// ==/UserScript==

// for reddit and youtube (for now)

// read more format for reddit
/* <button class="text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0" type="button">
    <span class="text-neutral-content-strong mr-xs flex items-center"><svg rpl="" fill="currentColor" height="16" icon-name="join-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>
    </svg></span>
    <span class="text-secondary-weak font-normal"><faceplate-number number="1"><!---->1</faceplate-number> more reply</span>
</button> */

// read more format for youtube
/*<tp-yt-paper-button id="more" aria-expanded="false" noink="" class="style-scope ytd-expander" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady--><!--css_build_scope:tp-yt-paper-button--><!--css_build_styles:video.youtube.src.web.polymer.shared.ui.styles.yt_base_styles.yt.base.styles.css.js,third_party.javascript.youtube_components.tp_yt_paper_button.tp.yt.paper.button.css.js-->
  <span class="more-button style-scope ytd-comment-view-model" slot="more-button">Read more</span>

</tp-yt-paper-button>*/

    function expandAll() {
        document.querySelectorAll('button').forEach(function(btn) {
            const text = btn.innerText.trim().toLowerCase() // gets the text in each button
            if (
                btn.checkVisibility() && // is the button visible?
                (text.includes('more reply') || text.includes('more replies')) // does it contain more reply or more replies? (the text inside the expand button)
            ) {
                btn.click(); // click the button
            }

        })
        document.querySelectorAll('tp-yt-paper-button#more').forEach(function(btn){
            const text = btn.innerText.trim().toLowerCase()
            if (
                btn.checkVisibility() &&
                text.includes('read more')
            ){
                btn.click();
            }
        })
    };
    setTimeout(expandAll, 2000);

    const observer = new MutationObserver(expandAll);

    observer.observe(document.body, {
        childList: true, // observe changes to children as well as document.body
        subtree: true // include non-immediate children
    });
