const australiaMain = document.getElementById('australiaMain');

fetch('https://restcountries.com/v3.1/region/oceania')
    .then((response5) => response5.json())
    .then((data5) => {
        data5.forEach(australia => {
            let australiaBlock =
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center">
                            <a href="${australia.maps.googleMaps}">
                                <img src="${australia.flags.png}" alt="${australia.name.official}" class="card-img-top photo">
                            </a>
                            <h3 class="card-title mt-3">${australia.name.common}</h3>
                        </div>
                        <p class="card-text mt-3">
                            <b>Capital city:</b> ${australia.capital}
                        <br><b>Population:</b> ${australia.population}
                        <br><b>Area:</b> ${australia.area} km<sup>2</sup>
                        <br><b>Czech:</b> ${australia.translations.ces.official}
                        </p>
                    </div>
                </div>
            </div>`;
            australiaMain.innerHTML += australiaBlock;
        });
    });