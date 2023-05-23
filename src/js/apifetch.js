
export function request(data) {

    return fetch('http://192.168.1.10:5000/predict_tips', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' },
        })
        .then(function(response){ 
        return response.json()})
        .then(data => {
            return {'prediction':data.prediction,'recommendation':data.respuesta_Api_GPT};
        })
       .catch(error => console.error('Error:', error)); 
      
}