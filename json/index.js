fetch("https://api.cricapi.com/v1/cricScore?apikey=464a269f-9e15-4830-8dbf-fc0e18ee16c7")
    .then(result =>
        result.json())
    .then(result => {
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



// let arr = [1,2,3,1,2,3,65,4,8,9,8,7,8,9,7,8,5,6,9,7]
// console.log(arr[5])
// console.log(arr[10])


// arr.forEach(function (element){

// console.log(element);

// })