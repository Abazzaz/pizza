const temPizza = (name, description,image) => `
           
<div class="verx-block">
              
              <a href=""
                ><img class="vegan" src="${image}" alt=""
              /></a>
              

              <div class="name-pizza">
                ${name}

                <a href="">
                  <i class="menu-inffo-i"></i>
                </a>
              </div>
              <p class="description-pizza">
              ${description}
              </p>
              <hr class="hr-shadow1" />
            </div>
            <section class="container">
              <div class="select-menu">
                <div class="dropdown">
                  <select name="one" class="dropdown-select">
                    <option value="">30см</option>
                    <option value="1">40см</option>
                  </select>
                </div>
                <div class="dropdown">
                  <select name="one" class="dropdown-select">
                    <option value="">Фирменое</option>
                    <option value="1">классика</option>
                  </select>
                </div>
                <div class="dropdown">
                  <select name="one" class="dropdown-select">
                    <option value="">Select…</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div class="form-right">
                <div class="price-rite">455 ₽</div>
                <button class="corzina"><a href=""> В корзину</a></button>
              </div>
            </section>
            <hr class="hr-shadow1" />
`;

fetch("https://api.jsonbin.io/v3/b/62d8368d2c868775a53037db").then(
  async (response) => {
    const data = await response.json();
    const pizza = data.record;
    console.log(pizza);

    pizza.forEach((item) => {
      const div = document.createElement("div");
      div.className = "block-left";
      div.innerHTML = temPizza(item.name, item.description,item.image);
      document.querySelector(".wrapper-pizza").append(div);
    });
  }
);
console.log("+");
