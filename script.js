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
                <p class="card-text">Nombre: ${entry['Nombre']}</p>
                <p class="card-text">Edad: ${entry['Edad']}</p>
                <p class="card-text">Sexo: ${entry['Sexo']}</p>
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

        // Obtener el select de género
        const genderSelect = document.getElementById('gender-select');

// Escuchar el evento change en el select de género
        genderSelect.addEventListener('change', () => {
            const selectedGender = genderSelect.value;
            filtrarPorGenero(selectedGender);
        });

        function filtrarPorGenero(gender) {
            const surveyResultsDiv = document.getElementById('survey-results');
            const resultEntries = surveyResultsDiv.querySelectorAll('.card');

            // Mostrar u ocultar las tarjetas según el género seleccionado
            resultEntries.forEach(entry => {
                const genderText = entry.querySelector('.card-text:nth-child(4)').textContent.split(": ")[1];
                if (gender === 'todos' || genderText === gender) {
                    entry.style.display = 'block';
                } else {
                    entry.style.display = 'none';
                }
            });
        }



    });
}
