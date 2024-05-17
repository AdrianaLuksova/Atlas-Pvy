const asiaMain = document.getElementById('asiaMain');

fetch('https://restcountries.com/v3.1/region/asia')
    .then((response3) => response3.json())
    .then((data3) => {
        data3.forEach(asia => {
            let asiaBlock =
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center">
                            <a href="${asia.maps.googleMaps}">
                                <img src="${asia.flags.png}" alt="${asia.name.official}" class="card-img-top photo">
                            </a>
                            <h3 class="card-title mt-3">${asia.name.common}</h3>
                          
                        </div>
                        <p class="card-text mt-3">
                            <b>Capital city:</b> ${asia.capital}
                        <br><b>Population:</b> ${asia.population}
                        <br><b>Area:</b> ${asia.area} km<sup>2</sup>
                        <br><b>Czech:</b> ${asia.translations.ces.official}
                       
                       
                        </p>
                    </div>
                </div>
            </div>`;
            asiaMain.innerHTML += asiaBlock;
        });
    });