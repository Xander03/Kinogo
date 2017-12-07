package kinogo.projection;

import kinogo.entity.Comment;
import kinogo.entity.Film;
import kinogo.entity.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "edit", types = { Comment.class })
public interface CommentProjection {

    String getText();

    User getUser();

    Film getFilm();
}