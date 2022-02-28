/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your bar charts in this file 


// Set dimensions and margins for plots 
const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 


// selects the "hard-coded-bar" div and appends it to 
// the svg using the width, height, and viewBox attributes
const svg1 = d3
  .select("#hard-coded-bar")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  {name: 'A', score: 92},
  {name: 'B', score: 15},
  {name: 'C', score: 67},
  {name: 'D', score: 89},
  {name: 'E', score: 53},
  {name: 'F', score: 91},
  {name: 'G', score: 18}
];

/*

  Axes

*/ 

// selects the max y-value for the graph/plot
let maxY1 = d3.max(data1, function(d) { return d.score; });

// creates a scale for the y-axis based off of the max y-value   
let yScale1 = d3.scaleLinear()
            .domain([0,maxY1])
            .range([height-margin.bottom,margin.top]); 

// creates the appropriate scale for data1 on the x-axis
let xScale1 = d3.scaleBand()
            .domain(d3.range(data1.length))
            .range([margin.left, width - margin.right])
            .padding(0.1); 

// appends the y-axis element to svg1 
svg1.append("g")
   .attr("transform", `translate(${margin.left}, 0)`) 
   .call(d3.axisLeft(yScale1)) 
   .attr("font-size", '20px'); 

// appends the x-axis element to svg1
svg1.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`) 
    .call(d3.axisBottom(xScale1) 
            .tickFormat(i => data1[i].name))  
    .attr("font-size", '20px'); 

/* 

  Tooltip Set-up  

*/

// appends the "hard-coded-bar" div with the "tooltip1" div
const tooltip1 = d3.select("#hard-coded-bar") 
                .append("div") 
                .attr('id', "tooltip1") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// displays the name and score when the mouse is placed 
// over the object
const mouseover1 = function(event, d) {
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") 
          .style("opacity", 1);  
}

// allows the tooltip1 to follow the mouse when moved
const mousemove1 = function(event, d) {
  tooltip1.style("left", (event.x)+"px") 
          .style("top", (event.y + yTooltipOffset) +"px"); 
}

// sets the tooltip to opacity 0 when the mouse is not 
// placed over the object
const mouseleave1 = function(event, d) { 
  tooltip1.style("opacity", 0); 
}

/* 

  Bars 

*/

// places the rectangles onto the bar chart with the appropriate data
svg1.selectAll(".bar") 
   .data(data1) 
   .enter()  
   .append("rect") 
     .attr("class", "bar") 
     .attr("x", (d,i) => xScale1(i)) 
     .attr("y", (d) => yScale1(d.score)) 
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.score)) 
     .attr("width", xScale1.bandwidth()) 
     .on("mouseover", mouseover1) 
     .on("mousemove", mousemove1)
     .on("mouseleave", mouseleave1);







     

/// new barchart --> #11


// selects the "hard-coded-bar" div and appends it to 
// the svg using the width, height, and viewBox attributes
const svg1 = d3
  .select("#csv-bar")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// barchart data
d3.csv("data/barchar.csv").then((data2) => {
  console.log(data2)

  // selects the max y-value for the graph/plot
  let maxY2 = d3.max(data2, function(d) { return d.score; });

  // creates a scale for the y-axis based off of the max y-value   
  let yScale2 = d3.scaleLinear()  
  .domain([0,maxY1])
  .range([height-margin.bottom,margin.top]); 


  // creates the appropriate scale for data1 on teh x-axis
  let xScale2 = d3.scaleBand()
  .domain(d3.range(data2.length))
  .range([margin.left, width - margin.right])
  .padding(0.1); 

  // appends the y-axis element to svg1 
  svg2.append("g")
  .attr("transform", `translate(${margin.left}, 0)`) 
  .call(d3.axisLeft(yScale2)) 
  .attr("font-size", '20px'); 

  // appends the x-axis element to svg1
  svg2.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`) 
  .call(d3.axisBottom(xScale1) 
          .tickFormat(i => data2[i].name))  
  .attr("font-size", '20px'); 



})


/* 

  Tooltip Set-up  

*/

// appends the "hard-coded-bar" div with the "tooltip1" div
const tooltip12= d3.select("#hard-coded-bar") 
                .append("div") 
                .attr('id', "tooltip1") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// displays the name and score when the mouse is placed 
// over the object
const mouseover2 = function(event, d) {
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") 
          .style("opacity", 1);  
}

// allows the tooltip1 to follow the mouse when moved
const mousemove2 = function(event, d) {
  tooltip1.style("left", (event.x)+"px") 
          .style("top", (event.y + yTooltipOffset) +"px"); 
}

// sets the tooltip to opacity 0 when the mouse is not 
// placed over the object
const mouseleave2 = function(event, d) { 
  tooltip1.style("opacity", 0); 
}
  // places the rectangles onto the bar chart with the appropriate data
  svg2.selectAll(".bar") 
  .data(data2) 
  .enter()  
  .append("rect") 
    .attr("class", "bar") 
    .attr("x", (d,i) => xScale2(i)) 
    .attr("y", (d) => yScale2(d.score)) 
    .attr("height", (d) => (height - margin.bottom) - yScale2(d.score)) 
    .attr("width", xScale2.bandwidth()) 
    .on("mouseover", mouseover1) 
    .on("mousemove", mousemove1)
    .on("mouseleave", mouseleave1);

