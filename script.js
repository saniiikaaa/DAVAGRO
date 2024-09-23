function calculateHeatLoad() {
    // Prevent form submission
    event.preventDefault();
  
    // Get input values
    const externalArea = document.getElementById("external-area").value;
    const uValue = document.getElementById("u-value").value;
    const outsideTemp = document.getElementById("outside-temp").value;
    const insideTemp = document.getElementById("inside-temp").value;
    const lightingPower = document.getElementById("lighting-power").value;
    const numPeople = document.getElementById("num-people").value;
    const equipmentPower = document.getElementById("equipment-power").value;
    const ventilationRate = document.getElementById("ventilation-rate").value;
  
    // Calculate heat gain from lighting
    const lightingHeatGain = lightingPower / 3.412; // convert watts to BTU/hr
  
    // Calculate heat gain from people
    const peopleHeatGain = numPeople * 400; // assume 400 BTU/hr per person
  
    // Calculate heat gain from equipment
    const equipmentHeatGain = equipmentPower / 3.412; // convert watts to BTU/hr
  
    // Calculate ventilation heat gain
    const ventilationHeatGain = ventilationRate * 1.08; // assume 1.08 BTU/hr per CFM
  
    // Calculate total heat gain
    const totalHeatGain = lightingHeatGain + peopleHeatGain + equipmentHeatGain + ventilationHeatGain;
  
    // Calculate heat loss through walls
    const heatLoss = externalArea * uValue * (outsideTemp - insideTemp);
  
    // Calculate total heat load
    const totalHeatLoad = totalHeatGain + heatLoss;
  
    // Redirect to result page with heat load passed as a URL parameter
    window.location.href = `result.html?totalHeatLoad=${totalHeatLoad.toFixed(2)}`;
  }
  
  function clearForm() {
    // Clear all input fields
    document.getElementById("heat-load-form").reset();
  }
  