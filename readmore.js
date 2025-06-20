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

    function expandAll() {
        // expand replies in reddit
        document.querySelectorAll('button').forEach(function(btn) {
            const text = btn.innerText.trim().toLowerCase() // gets the text in each button
            if (
                btn.checkVisibility() && // is the button visible?
                (text.includes('more reply') || text.includes('more replies')) // does it contain more reply or more replies? (the text inside the expand button)
            ) {
                btn.click(); // click the button
            }

        })

        // expand truncated comments in youtube
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
