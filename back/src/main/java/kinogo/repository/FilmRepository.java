package kinogo.repository;

import kinogo.entity.Film;
import kinogo.projection.FilmProjection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = FilmProjection.class)
public interface FilmRepository extends CrudRepository<Film, Long> {

    List<Film> getFilmsByName(@Param("name") String name);

    List<Film> getFilmsByRating(@Param("rating") int rating);

}
