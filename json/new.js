function getData() {

    let food = document.getElementById("food").value
    console.log(food)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
        .then(result =>
            result.json())
        .then(result => {
            console.log(result)
            // console.log("We have the result",result);
            // console.log()   
            let html = " ";
            let dataArr = result.data;
            // console.log(dataArr[3])
            dataArr.forEach(element => {
                // console.log(dataArr.indexOf(element)+1)
                html += `  
                <tr>
                    <td>${dataArr.indexOf(element)}</td>
                    <td>${element.t1}</td>
                    <td>${element.t2}</td>
                    <td>${element.matchType}</td>
                    <td>${element.status}</td>
                    <td>${element.dateTimeGMT}</td>
                </tr>
             
          
        `
                // document.write(element.t1 + " VS " +element.t2+ "<br>" + element.matchType + "<br>"+ element.status + "<br>"+
                // element.dateTimeGMT+ "<br>"+ "<br>"+ "<br>")

            });

            document.getElementById("container").innerHTML = html;

        })
        .catch(err => {
            console.log("An error occured. Please check your code", err);
        });

}
