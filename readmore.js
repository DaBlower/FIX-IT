// ==UserScript==
// @name        Read More
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @author      DaBlower
// @description Automatically expand truncated comments without clicking "read more"
// ==/UserScript==

// for reddit (for now)

// read more format
/* <button class="text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0" type="button">
    <span class="text-neutral-content-strong mr-xs flex items-center"><svg rpl="" fill="currentColor" height="16" icon-name="join-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>
    </svg></span>
    <span class="text-secondary-weak font-normal"><faceplate-number number="1"><!---->1</faceplate-number> more reply</span>
</button> */

document.addEventListener('DOMContentLoaded', function() {
    function expandAll() {
        document.querySelectorAll('button').forEach(function(btn) {
            if (
                btn.checkVisiblity() &&
                btn.innerText.trim().toLowerCase().includes('more reply')
            ) {
                btn.click();
            }

        })
    }
    setTimeout(expandAll, 2000);
});



