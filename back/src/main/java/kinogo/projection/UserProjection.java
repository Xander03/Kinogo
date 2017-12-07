package kinogo.projection;

import kinogo.entity.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "user", types = {User.class})
public interface UserProjection {

    Long getId();

    String getLogin();

}
