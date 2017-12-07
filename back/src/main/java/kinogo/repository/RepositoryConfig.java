package kinogo.repository;

import kinogo.entity.Actor;
import kinogo.entity.Film;
import kinogo.entity.Picture;
import kinogo.entity.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter{
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration) {
        configuration.exposeIdsFor(Film.class, Picture.class, Actor.class, User.class);
    }
}
