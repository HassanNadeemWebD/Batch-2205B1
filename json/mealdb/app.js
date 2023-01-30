// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=bread`)
// .then(result =>
//     result.json()
// ).then(result => {

//     console.log(result);

// })

function getData() {


   let food =document.getElementById("food").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
    .then((result) => result.json())
    .then((result) => {

        console.log("We have the result", result);
        // console.log( result.meals[0].strMeal);
        // document.getElementById('head').innerHTML = result.meals[0].strMeal
        // console.log(result.meals);
        let mealArr = result.meals
        let html = "";
        let container = document.getElementById("container")
        mealArr.forEach(element => {

            html += `     <div class="col mt-4 col-12 col-md-4 col-lg-4 col-sm-12">
            <div class="card" style="width: 18rem">
              <img
                src="${element.strMealThumb}"
                class="card-img-top"
            
              />
              <div class="card-body">
                <h5 class="card-title text-center">${element.strMeal}</h5>
              </div>
              <button class="btn btn-danger">Go</button>
            </div>
          </div>`



            
        }
          );
        
          container.innerHTML = html;
    })
    .catch((err) => {
      console.log("An error occured. Please check your code", err);
    });
}
