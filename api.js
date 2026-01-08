let counter = 1;

for (let index = 1; index < 100; index++) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response => response.json())
        .then(response => {
            const wrapper = document.getElementById("wrapper");
            console.log(response);

            const main_container = document.createElement("div");
            main_container.id = "main-container";

            wrapper.appendChild(main_container);

            // const ind = document.createElement("h3");
            // ind.className = "index-number";
            // ind.textContent = `#${counter++}`;
            

            const name = document.createElement("h3");
            name.textContent = "name: " + response.name;

            const url = document.createElement("img");
            url.src = response.sprites.front_default;
            url.alt = response.name;

            const weight = document.createElement("h3");
            weight.textContent = "weight: " + response.weight;
            
            // main_container.appendChild(ind);
            main_container.appendChild(url);
            main_container.appendChild(name);
            main_container.appendChild(weight);

            const ability_container = document.createElement("div");
            ability_container.id = "ability-container";
            ability_container.textContent = "Abilities";

            main_container.appendChild(ability_container);
            
            response.abilities?.forEach(element => {
                const card = document.createElement("div");
                card.className = "ability-card";

                const name = document.createElement("h4");
                name.textContent = element.ability.name;
                
                const is_hidden = document.createElement("h4");
                is_hidden.textContent = "hidden: " + element.is_hidden;

                // const slot = document.createElement("h4");
                // slot.textContent = "ability slot: " + element.slot;

                card.appendChild(name);
                card.appendChild(is_hidden);
                // card.appendChild(slot);

                ability_container.appendChild(card);
                
            });

            // console.log(response.sprites.front_default, response.name, response.abilities, response.weight);
            // console.log(index);
        })
        .catch(error => console.error('Error:', error));
    }


