function addRecommendation() {
    // Reciba el mensaje de la nueva recomendación
    let recommendation = document.getElementById("new_recommendation");
    //  Si el usuario ha dejado una recomendación, mostrar una ventana emergente
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Llama aquí a showPopup
      showPopup(true)
  
      //   Crea un nuevo elemento «recomendación» y establece su valor en el mensaje del usuario.
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      //  Añada este elemento al final de la lista de recomendaciones
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  