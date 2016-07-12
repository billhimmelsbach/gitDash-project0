# Racing Game

*Git-DASH is a fast-paced racer, designed to poke fun at the often slapdash nature of web development, GitHub, and our tendencies towards procrastination. The technology of Git-DASH connects personally to the player through AJAX requesting their GitHub profile, mimicking their desktop through custom CSS and Bootstrap styling, and creative jQuery utlization ranging from animating instructor avatars to injecting text jokes for a good laugh.*

## Technologies Used

* JavaScript
* jQuery
* Bootstrap
* AJAX/JSON/GitHub API
* HTML/CSS
* Object Orientated Design


## Existing Features

* AJAX enabled player customization through GitHub avatars
* HTML 5 audio allows music to
* Persistent scoreboard through jQuery selectors and Object Orientated Design
* Personalized win screen with GitHub avatar picture
* AJAX/JSON/GitHub API
* Object orientated design allows easy player scalability and data portability
* jQuery animations allow a teacher avatar to give a countdown enabled by setTimeout queuing
* A combination of Bootstrap, CSS, and jQuery create a mock macOS desktop experience


## Planned Features

* More responsiveness design, particularly for small and large devices with more precise Bootstrap and CSS styling
* A refactoring run to cut down on repetition. Replace brute force methods that were inserted due to time constraints with DRY code.
* Although there is an error message for AJAX server failure, there needs to be a fail message if a player's username doesn't exist as typed. Methods were attempted but failed.
* The margin based win condition, while successful at avoiding a global variable, bogs down the system with unnecessary width checks. While the initial impetus was to avoid global variables, this is an instance where one might make the program much more dry and efficient, particularly in four player games and older hardware.
* More humor through creative use of theme. Instant message overlays, mock Stack Overflow searches, meme based humor in the default icons, etc.
* A HTML 5 color selector was planned for the player progress bars but cut due to time. The progress bars would also benefit from a progress bar animation.

---

![gitDASH!](img/screenshot.png?raw=true "gitDASH!")
