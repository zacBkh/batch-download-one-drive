This little script helps me resolving a daily problem I have in my work at Hermès.

I need to download from a platform around 70 files each month. I have found it very time consumming to do, hence I created this little program. It downloads by itself all the files instead of having me clicking on each of them. Very simple, it works with a combination of querySelectors and .click() methods, encapsulated in a for of loop.

The program is fairly basic, I just encountered two limited difficulties :

    - As it was my first touchpoint with web scraping, I didn't know some sort of "security wait()" were needed. I had forgotten code is executed so quickly that the browser does not have time to render the UI. It causes a problem since some elements the .click() method are applying on are rendered onClick, sometimes even with a CSS animation which delays even more the rendering. Hence, I just added a waitFor function that returns a promise. My function accepts a single argument, the delay after which the promise should be resolved. I then used the async/await syntax to await for the promise and delay my code execution.

    - Initially I had converted the node list from querySelectorAll to an array and had mapped over it. However, I had forgotten arrays ignore any asynchronous code. My code was still executing extremely fast and was crashing since my querySelectors could not target some elements that were taking time to render on the UI (about miliseconds. I switched to a for...of loop that I encapsulated in an async function.
# batch-download-one-drive
