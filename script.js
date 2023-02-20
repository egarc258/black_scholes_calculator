function calculateBS() {
    // get input values
    var s = parseFloat(document.getElementById("s").value);
    var k = parseFloat(document.getElementById("k").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);
    var v = parseFloat(document.getElementById("v").value);
  
    // calculate d1 and d2
    var d1 = (Math.log(s / k) + (r + 0.5 * Math.pow(v, 2)) * t) / (v * Math.sqrt(t));
    var d2 = d1 - v * Math.sqrt(t);
  
    // calculate call and put prices
    var callPrice = s * normalCDF(d1) - k * Math.exp(-r * t) * normalCDF(d2);
    var putPrice = k * Math.exp(-r * t) * normalCDF(-d2) - s * normalCDF(-d1);
  
    // display result
    var result = "Call Price: " + callPrice.toFixed(2) + "<br>Put Price: " + putPrice.toFixed(2);
    document.getElementById("result").innerHTML = result;
  }
  
  // normal cumulative distribution function
  function normalCDF(x) {
    var t = 1 / (1 + 0.2316419 * Math.abs(x));
    var d = 0.3989423 * Math.exp(-x * x / 2);
    var prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (x > 0) {
      prob = 1 - prob;
    }
    return prob;
  }
  

