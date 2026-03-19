const users = [
    {
        name: "aayush",
        pic: "https://i.pinimg.com/736x/84/8f/b0/848fb0fca7b9407a86d4bd598455008d.jpg",
        bio: "Follow me i know the way"
    },

    {
        name: "rohan",
        pic: "https://i.pinimg.com/736x/d4/f2/11/d4f21135ef0e52046309c324c8986df8.jpg",
        bio: "Chasing goals, not people 🚀"
    },
    {
        name: "karan",
        pic: "https://i.pinimg.com/736x/e2/d0/56/e2d05600bc048a5b7b69834cf7a0fb91.jpg",
        bio: "Built different, staying consistent 💪"
    },
    {
        name: "arjun",
        pic: "https://i.pinimg.com/736x/e1/dc/84/e1dc84ecf436d5d8041af97cacf37791.jpg",
        bio: "Silence speaks louder than words 🖤"
    },
    {
        name: "dev",
        pic: "https://i.pinimg.com/736x/e1/dc/84/e1dc84ecf436d5d8041af97cacf37791.jpg",
        bio: "Focused on becoming unstoppable ⚡"
    },
    {
        name: "yash",
        pic: "https://i.pinimg.com/736x/65/0f/63/650f63e6288e1127f967e45f81dbf5f0.jpg",
        bio: "Dream big, hustle harder 🔥"
    },
    {
        name: "aman",
        pic: "https://i.pinimg.com/1200x/6d/dc/e1/6ddce17a08f55af4221361235a4ba87a.jpg",
        bio: "Creating my own path 🌌"
    },
    {
        name: "raj",
        pic: "https://i.pinimg.com/736x/d4/f2/11/d4f21135ef0e52046309c324c8986df8.jpg",
        bio: "No shortcuts, just hard work 🛠️"
    }
]
const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

// render cards from an array of users using DocumentFragment
function renderCards(arr) {
    cardsContainer.innerHTML = ""; // clear previous cards

    // show "not found" message if no users match
    if (arr.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No user found ☹️";
        msg.style.color = "#fff";
        msg.style.fontSize = "18px";
        msg.style.marginTop = "20px"
        cardsContainer.appendChild(msg);
        return;
    }

    const fragment = document.createDocumentFragment();

    arr.forEach(function (user) {
        // create card div
        const card = document.createElement("div");
        card.classList.add("card");

        // create img
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url("${user.pic}")`;

        // create content div
        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        // assemble card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // add card to fragment (NOT directly to DOM)
        fragment.appendChild(card);
    });

    // single DOM update — one reflow instead of one per card
    cardsContainer.appendChild(fragment);
}

// show all users on page load
renderCards(users);



// Debounce helper — delays execution until the user stops typing
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

searchInput.addEventListener("input", debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(query);
    });
    renderCards(newUsers);
}, 250));