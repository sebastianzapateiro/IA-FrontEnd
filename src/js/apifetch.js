
export function request(data) {

    return fetch('http://192.168.1.10:5000/predict', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' },
        })
        .then(function(response){ 
        return response.json()})
        .then(data => {
            return data.prediction;
        })
       .catch(error => console.error('Error:', error)); 
      
}