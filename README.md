# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The internet is a distributed network of computers. The web is the part of the internet that contains documents that are referenced by a URL, like https://www.google.com or https://www.techtonic.com.

A "client," the computer that we type the URL into, requests data from the internet to display a webpage.

The data is stored on a server, a dedicated, always-on computer that delivers content to the client.

The client and server communicate with each other to get a webpage to the client for the user in an HTML file.

The HTML file is not stored by the client. It is stored on the server, where it can be updated. That way, the client will always get the most updated version of that file when it looks for it.

## From start to finish, how does data reach you to be rendered in the browser?

First, the client requests the HTML file, which is a document with information about how the webpage is set up.

The server checks for the file while the client waits, and then sends it once it is found.

When the client receives the file, it is displayed in the browser.

## What code is rendered in the browser?

The browser interprets and displays from an HTML File. It contains HTML, CSS, and JavaScript.

## What is the server-side code’s main function?

The server-side code's main function is to operate on the "Back-end," with stored data in a database. The data is manipulated and analyzed on the server side for accurate, quick and easy access to be used later (i.e. on a dynamic website).

## What is the client-side code’s main function?

The client-side code's main function is to provide a "Front-end" for the user to directly interact with in a web browser. They can browse the page or input information into forms to submit it to the server.

## What is runtime?

Runtime can be the time during which a program is running until it is done.

It can also refer to the "environment," in which the program's code is executed. It includes additional code that is prerequisite to execute the program code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I think that this question is asking, "When the client gets an HTML file from a server, how many times is that HTML file rendered in the web browser?"

Once instance of client-side assets are created when a webpage is displayed for each client. HTML contains content that is formatted and styled by CSS and made interactive for the user with JavaScript. Additional assets can include media like images, or additional browser add-ons like extensions.

Some of these assets can be stored locally on the hard drive in a cache, so that it can be loaded faster or offline.

Every time a client requests a webpage, it will get the most updated version, so the cache will be updated as well with the latest version of its files.

## How many instances of the server-side code are available at any given time?

At any given time, the server-side code is available to as many clients that need to access it.

The server code can determine different users from each other by using sessions information stored in cookies.

Additionally, each client might only have some access to certain part of what is on the server, for example, limiting profile views on social media.

There might be only one server or many depending on how much code there is.

If a server is offline, the code will not be available during that time, but it will still exist.

## How many instances of the databases connected to the server application are created?

There are as many databases connected to the server as needed. There is at least one instance connected, because the database stores data.
