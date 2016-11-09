$(document).ready(function(){
    plotDonut('bjp');
    plotDonut('inc');
    plotDonut('aap');
});

function plotDonut(partyname) {
    var width = 300,
    height = 300,
    radius = 250;

    var color = d3.scale.ordinal()
        .range(["#2BE058", "#C4C4C4", "#F5372F", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var arc = d3.svg.arc()
        .outerRadius(140)
        .innerRadius(97);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.percentage; });

    var svg = d3.select("."+partyname).append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("data/data-"+partyname+".csv", function(error, data) {

      data.forEach(function(d) {
        d.percentage = +d.percentage;
      });

      var g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");


      g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data.sentiment); });

      g.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .style("text-anchor", "middle")
          .text(function(d){
            if (isNaN(d.data.percentage)) {
                return "";
            }
            return Math.round(d.data.percentage*100)+"%"
        });

    });
}
