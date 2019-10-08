// Obtiene el archivo de Ficdown "story.md" 
$.get('story.md', function(data){

        // Después de obtener el archivo, lo analiza
        story = parseText(data);

        // Luego de analizar la historia, se reproduce dentro del div con id='main'
		//Los parámetros de Player son los siguientes: 
		//1) El nombre de la variable donde está la historia
		//2) El id donde será mostrada la escena actual
		//3) Título del link que será mostrado en la sinopsis para comenzar a jugar.
		//4) Texto que será mostrado al terminar el juego.
		//5)El penúltimo parámetro es para activar el scroll (true o false).
		//6)El último parámetro es para activar el modo de depuración (true o false).
        player = new Player(story, 'gamecontent','<br><center>COMENZAR A JUGAR</center>','## FIN\n\nEl juego ha terminado.', false, false);
        player.play();

      }, 'text');
