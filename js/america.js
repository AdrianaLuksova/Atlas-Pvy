const americaMain = document.getElementById('americaMain');

fetch('https://restcountries.com/v3.1/region/america')
    .then((response2) => response2.json())
    .then((data2) => {
        data2.forEach(america => {
            let americaBlock =
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center">
                            <a href="${america.maps.googleMaps}">
                                <img src="${america.flags.png}" alt="${america.name.official}" class="card-img-top photo">
                            </a>
                            <h3 class="card-title mt-3">${america.name.common}</h3>
                            
                        </div>
                        <p class="card-text mt-3">
                            <b>Capital city:</b> ${america.capital}
                        <br><b>Population:</b> ${america.population}
                        <br><b>Area:</b> ${america.area} km<sup>2</sup>
                        <br><b>Czech:</b> ${america.translations.ces.official}
                     
                        
                        </p>
                    </div>
                </div>
            </div>`;
            americaMain.innerHTML += americaBlock;
        });
    });