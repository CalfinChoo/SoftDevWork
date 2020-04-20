console.log("HiASDASD");

window.onload = function() {
  var d = document.getElementById("moves");
  console.log(d);
  var parse = function() {
    var arr = [];
      for (var i = 0; i < d.childElementCount; i++) {
        arr.push(d.children[i].innerHTML.split(","));
    }
    return arr;
  };
  var catData = parse();
  var names = [], one = [], two = [], tre = [], fou = [];
  var data = [names, one, two, tre, fou];
  for (var y = 0; y < catData.length; y++) {
    for (var x = 0; x < catData[y].length; x++) {
      data[x].push(catData[y][x]);
    }
  };
  // console.log(data);

  const f = d3.scaleLinear()
      .domain([0, d3.max(data[1])])
      .range([0, 420])
  function makeChart() {
    const div = d3.create("div")
        .style("font", "10px sans-serif")
        .style("text-align", "right")
        .style("color", "white");
        div.selectAll("div")
            .data(data[1])
            .join("div")
              .style("background", "steelblue")
              .style("padding", "3px")
              .style("margin", "1px")
              .style("width", d => `${f(d)}px`)
              .text(d => d + "Hi");
  return div.node();
  }
  var chart = document.getElementsByClassName("chart");
  chart[0].appendChild(makeChart());
  // console.log(chart);

  // var chart = d3.select(".chart");
  // var bar = chart.selectAll("div");
  // var barUpdate = bar.data(data[1]);
  // var barEnter = barUpdate.enter().append("div");
  // barEnter.style("width", function(d) {
  //    return parseInt(d) * 10 + "px"; });
  // barEnter.text(function(d) { return d; });
  // const x = d3.scaleLinear()
  //   .domain([0, d3.max(data[1])])
  //   .range([0, 420])
  // function makeChart() {
  //
  // }

}
