// Ejemplo de cómo cargar datos de un archivo JSON (debes reemplazar 'datos.json' con la ruta correcta)
fetch('Respuestas_H2_T3_Lenguaje_CarlosdeAlda.json')
    .then(response => response.json())
    .then(data => {
        // Aquí puedes procesar los datos y mostrarlos en la página
        mostrarResultados(data);
    })
    .catch(error => console.error('Error al cargar los datos:', error));

function mostrarResultados(data) {
    // Obtener el contenedor donde se mostrarán los resultados
    const surveyResultsDiv = document.getElementById('survey-results');

    // Recorrer cada entrada en los datos
    data.forEach(entry => {
        // Crear un elemento de tarjeta para mostrar los detalles de cada entrada
        const resultEntry = document.createElement('div');
        resultEntry.classList.add('card', 'my-2');

        // Construir el contenido de la tarjeta con los detalles de la encuesta
        resultEntry.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Encuesta realizada el: ${entry['Marca temporal']}</h5>
                <p class="card-text">Género Musical Favorito: ${entry['Género Musical Favorito:']}</p>
                <p class="card-text">¿Con qué frecuencia escuchas música?: ${entry['¿Con qué frecuencia escuchas música?:']}</p>
                <p class="card-text">¿Dónde prefieres escuchar música?: ${entry['¿Dónde prefieres escuchar música?:']}</p>
                <p class="card-text">¿Cómo prefieres descubrir nueva música?: ${entry['¿Cómo prefieres descubrir nueva música?:']}</p>
                <p class="card-text">¿Cuál es tu canción favorita en este momento?: ${entry['¿Cuál es tu canción favorita en este momento?']}</p>
                <p class="card-text">¿Cuál es tu artista favorito en este momento?: ${entry['¿Cuál es tu artista favorito en este momento?']}</p>
                <p class="card-text">¿Tocas algún instrumento musical?: ${entry['¿Tocas algún instrumento musical?']}</p>
                <p class="card-text">¿Te gusta ir a conciertos en directo?: ${entry['¿Te gusta ir a conciertos en directo?']}</p>
                <p class="card-text">¿En qué idioma sueles escuchar música?: ${entry['¿En qué idioma sueles escuchar música?']}</p>
                <p class="card-text">¿Has ido alguna vez a un festival de música?: ${entry['¿Has ido alguna vez a un festival de música?']}</p>
            </div>
        `;

        // Agregar la tarjeta al contenedor de resultados
        surveyResultsDiv.appendChild(resultEntry);
    });
}
