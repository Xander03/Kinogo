package kinogo.repository;

import kinogo.entity.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {

    List<Film> getFilmsByName(@Param("name") String name);

    List<Film> getFilmsByRating(@Param("rating") int rating);

}
