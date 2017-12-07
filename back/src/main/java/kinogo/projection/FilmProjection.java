package kinogo.projection;

import kinogo.entity.Description;
import kinogo.entity.Film;
import kinogo.entity.Picture;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "film", types = {Film.class})
public interface FilmProjection {

    Long getId();

    String getName();

    String getRating();

    List<Picture> getPictures();

    Description getDescription();
}
