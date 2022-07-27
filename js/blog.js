const blogItems = [
    {
        title: "Aurland",
        img: "img/aurland.jpeg",
        text: "You might've heard of the Flåm Railway, often referred to as one of the prettiest train rides in the entire world. As a result of its reputation, the town of Flåm - the terminus of the line - is quite a hectic place. Instead of hopping off the train here, head six miles north to Aurland. It sits at the end of the Aurlandsfjorden, the world's deepest fjord, and the Aurland Valley is often referred to as \"Norway's Grand Canyon.\" That's code for the town being surrounded by dramatic cliffs and waterfalls, both pouring into the tranquil waters of the fjord below. In Aurland, you'll get the same amazing experience as you would in Flåm, but without flocks of tourists slowing everything down. While there, go up to the Stegastein Viewpoint, hike in the mountains of the Aurland Valley (from Geiteryggen, it's a four-hour hike to the well-known Steinbergdalen), and end it all with a stop at Aurlandskafeen for a cup of true Norwegian coffee."
    },
    {
        title: "Røros",
        img: "img/roros.jpeg",
        text: "One of the oldest \"wooden towns\" in all of Europe, all of Røros is a UNESCO World Heritage Site (conveniently located on the train line). The narrow streets are the same as they were in the 1600s, and as you wander through town, it'll feel like an intricate maze of alleyways and courtyards that never ends. Stop by Olav's Mine to see how the town originated, head down into the cellar of Rammkjellarn for local fare and on-site brews, and if you're visiting in winter, rent a kicksled to get around the snowy streets. Don't worry — you'll blend right in."
    },
    {
        title: "Reine",
        img: "img/reine.jpeg",
        text: "If jagged, snow-capped mountains were slowly getting swallowed by the sea and a few stubborn fisherman decided to build a town anyway, that would be Reine. The colorful cottages and winding streets almost seem to fall away into the water — Reine is in the Lofoten archipelago — but not before the land rises again, granite jutting thousands of feet into the air. This place is a postcard if ever there were one. If you're looking to explore the Lofoten Islands, Reine is an obvious stop. It's located right on E10 (the scenic drive through the islands), the village is quiet, and the scenery is unparalleled. Leave time to hike Reinebringen — the steep scramble will lead you to one of the most panoramic points across the islands."
    },
    {
        title: "Fredrikstad",
        img: "img/trondeim-norway.jpeg",
        text: "Five hundred years ago, Fredrikstad operated as a fortress, and it's now one of the best-preserved across all of Scandinavia. From above it still looks like a perfect six-pointed star — moats much like the canals of Amsterdam or Copenhagen surround the Old Town, a perfect place for grabbing a patio-side coffee or looking through local art galleries that almost always come with a view. A free ferry runs from downtown to Old Town several times a day, and it's an easy way to get some great views from the water. Otherwise, the nearby Hvaler Islands are one of the sunniest places in the country and worth a stop once you get your fill at the many cafés (check out Café Oline for a nice glass of vino), museums, and boutiques."
    },
    {
        title: "Undredal",
        img: "img/undredal.jpeg",
        text: "Apart from being a picturesque fishing village on the edge of a fjord (like many of Norway's amazing towns), Undredal has two claims to fame: its stave church and brown cheese. The former was built in the 1100s, and yet you could only get to the town by boat up until 1988. And brown cheese, or brunost, may not seem notable, but you haven't had Norwegian cuisine until you've experienced it. Undredal's variety is widely regarded as the best in the country - the ratio of goats to people is 5:1 - and it's a must-try. Slightly sweet and heavy, it's usually eaten on sandwiches or with Norwegian waffles. If you're not a fan, give brown cheese ice cream a try: it's like caramel, but smoother and a little less sweet. Check out Undredalsbui to get your hands on some samples of this iconic Norwegian staple, and be sure to grab extra to take back home."
    },
]

class Blog {
    displayMode = "List"
    activeCarouselSlideIndex = 0;

    constructor() {
    }

    get buttons() {
        const listButton = document.querySelector("#blogListButton");
        const carouselButton = document.querySelector("#blogCarouselButton");

        return {listButton, carouselButton}
    }

    renderList(blogContentContainer) {
        blogItems.forEach((element) => {
            const elementContainer = document.createElement("div");
            elementContainer.classList.add("blog__list-item");

            const imgElement = document.createElement("img");
            imgElement.src = element.img;
            elementContainer.appendChild(imgElement);

            const titleContainer = document.createElement("span");
            const titleTextContainer = document.createElement("strong");
            titleTextContainer.innerText = element.title;
            titleContainer.appendChild(titleTextContainer);
            elementContainer.appendChild(titleContainer);

            const textContainer = document.createElement("span");
            textContainer.innerText = element.text;
            elementContainer.appendChild(textContainer);

            blogContentContainer.appendChild(elementContainer);
        })
    }

    renderCarouselItemElement(blogStoriesContainer, blogContentContainer, activeItem) {
        let elementContainer = blogContentContainer.querySelector(".blog__carousel-item");

        if (!elementContainer) {
            elementContainer = document.createElement("div");
            elementContainer.classList.add("blog__carousel-item");
        } else {
            elementContainer.innerHTML = ""
        }

        blogStoriesContainer.setAttribute("style", `background-image: url("${activeItem.img}");`)

        const titleContainer = document.createElement("span");
        const titleTextContainer = document.createElement("strong");
        titleTextContainer.innerText = activeItem.title;
        titleContainer.appendChild(titleTextContainer);
        elementContainer.appendChild(titleContainer);

        const textContainer = document.createElement("span");
        textContainer.innerText = activeItem.text;
        elementContainer.appendChild(textContainer);

        return elementContainer;
    }

    renderCarouselItem(blogStoriesContainer, blogContentContainer) {
        const activeItem = blogItems[this.activeCarouselSlideIndex];

        blogStoriesContainer.setAttribute("style", `background-image: url("${activeItem.img}");`);

        const activeItemElement = this.renderCarouselItemElement(blogStoriesContainer, blogContentContainer, activeItem);
        blogContentContainer.appendChild(activeItemElement);
    }

    setNewActiveCarouselIndex(newActiveIndex) {
        if (newActiveIndex < 0) {
            this.activeCarouselSlideIndex = blogItems.length - 1;
        } else if (newActiveIndex > blogItems.length - 1) {
            this.activeCarouselSlideIndex = 0
        } else {
            this.activeCarouselSlideIndex = newActiveIndex
        }
    }

    renderCarouselButtons(blogStoriesContainer, blogContentContainer) {
        const prevButton = document.createElement("div");
        prevButton.classList.add("blog__carousel-prevButton");

        const nextButton = document.createElement("div");
        nextButton.classList.add("blog__carousel-nextButton");

        prevButton.addEventListener("click", () => {
            const newActiveIndex = this.activeCarouselSlideIndex - 1;
            this.setNewActiveCarouselIndex(newActiveIndex);
            this.renderCarouselItem(blogStoriesContainer, blogContentContainer)
        });
        nextButton.addEventListener("click", () => {
            const newActiveIndex = this.activeCarouselSlideIndex + 1;
            this.setNewActiveCarouselIndex(newActiveIndex);
            this.renderCarouselItem(blogStoriesContainer, blogContentContainer)
        });

        blogContentContainer.appendChild(prevButton);
        blogContentContainer.appendChild(nextButton);
    }

    renderCarousel(blogStoriesContainer, blogContentContainer) {
        this.activeCarouselSlideIndex = Math.floor((Math.random() * blogItems.length));

        this.renderCarouselItem(blogStoriesContainer, blogContentContainer);
        this.renderCarouselButtons(blogStoriesContainer, blogContentContainer)
    }

    render() {
        const blogStoriesContainer = document.querySelector("#blogStories");
        const blogContentContainer = blogStoriesContainer.querySelector("#blogContent");

        if (blogStoriesContainer && blogContentContainer) {
            blogStoriesContainer.removeAttribute("style");
            blogContentContainer.innerHTML = "";
            const {listButton, carouselButton} = this.buttons;

            if (this.displayMode === "List") {
                this.renderList(blogContentContainer);
                listButton.classList.add("active");
                carouselButton.classList.remove("active")
            } else {
                this.renderCarousel(blogStoriesContainer, blogContentContainer);
                carouselButton.classList.add("active");
                listButton.classList.remove("active")
            }
        }
    }

    applyButtonListeners() {
        const {listButton, carouselButton} = this.buttons;

        listButton.addEventListener("click", () => {
            if (this.displayMode !== "List") {
                this.displayMode = "List";
                this.render();
            }
        })

        carouselButton.addEventListener("click", () => {
            if (this.displayMode !== "Carousel") {
                this.displayMode = "Carousel";
                this.render();
            }
        })
    }
}

const blog = new Blog();
blog.render();
blog.applyButtonListeners();
