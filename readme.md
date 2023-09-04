# Challenge: Static bootstrap website

## install

1. run `yarn`
2. run `yarn run build`
3. open index.html with live server in VS code (see [bug #1](#known-bugs))

## tech stack

- Bootstrap
- SCSS

## project details

### About

This project is a static bootstrap website. It was created as an interview challange and is now repurposed as a portfolio project. It was created in around 2 days including design.

### disclaimer

- The design of the website and Logo was created fully by myself in Figma
- I didn't look up the current website and Logo of ReoNa to not be influenced
- Images are downloaded directly from google which is why the resolution might look bad on some of them.
- I do not have access to a Mac, which is why the website is not tested in Safari

### known bugs

1. When opening index.html directly the background image (parallax) is not found
2. SwiperJS slideToClickedSlide has an issue with loop
3. In firefox mobile preview the audio stops immediately when clicking on the play button
4. the animation on click of the "Listen now"-button might not work due to `@media (prefers-reduced-motion: reduce)` -> This is NOT a bug, but a feature!
   - I decided to not implement this restriction for my custom animations for presentational reasons.

### development choices

- I decided against using art direction (`<picture>`-tag) for the images, as mobile and desktop images have a similar ratio in my design.

### implemented code smells

- The parallax background image is currently implemented as a variable (--bg-parallax) using inline styles
- images are currently jpgs/pngs and not optimized webp (same with audio -> webm)

### optional ToDos

Here are some ToDos I would have implemented if I had more time for the project.

- Transition the project to Jekyll
- fadeIn animation for sections on scroll (waypoints)
- Tour dates -> list style
- Newsletter form
- side navigation
- lazy-loading for images
- fix code smells
