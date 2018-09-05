#creamos base de datos
CREATE DATABASE IF NOT EXISTS base_peliculas;

#seleccionar la base de datos
USE base_peliculas;

#crear tabla peliculas
CREATE TABLE IF NOT EXISTS peliculas(
	id_pelicula INT NOT NULL,
    titulo VARCHAR(45) NOT NULL,
    anio DATE,
    nacionalidad VARCHAR(29),
    idioma VARCHAR(129),
    formato ENUM('blanco y negro' , 'color'),
    descripcion VARCHAR (120),
    resumen VARCHAR (255),
    observaciones VARCHAR (255),
    PRIMARY KEY (id_pelicula)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS actores(
	id_actor INT NOT NULL,
    nombre VARCHAR (45) NOT NULL,
    nacionalidad VARCHAR (45),
	nombre_personaje VARCHAR (45),
	PRIMARY KEY (id_actor)

)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS directores(
	id_director INT NOT NULL,
    nombre VARCHAR (45) NOT NULL,
    fecha_nacimiento DATE,
	pais_origen VARCHAR (45),
	PRIMARY KEY (id_director),
    peliculas_id_pelicula INT NOT NULL,
    CONSTRAINT fkdirector_peliculas
    FOREIGN KEY (peliculas_id_pelicula)
    REFERENCES peliculas(id_pelicula)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS actores_pelicula(
	peliculas_id_pelicula INT NOT NULL,
    actores_id_actor INT NOT NULL,
    PRIMARY KEY(peliculas_id_pelicula,actores_id_actor),
    CONSTRAINT fkactor_peliculas_actor
    FOREIGN KEY (actores_id_actor)
    REFERENCES actores (id_actor),
    CONSTRAINT fkactor_actor_peliculas
    FOREIGN KEY (peliculas_id_pelicula)
    REFERENCES peliculas(id_pelicula)
)ENGINE=INNODB;
