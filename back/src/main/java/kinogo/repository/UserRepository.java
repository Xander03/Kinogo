package kinogo.repository;

import kinogo.entity.User;
import kinogo.projection.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = UserProjection.class)
public interface UserRepository extends JpaRepository<User, Long> {

    User getUserByLogin(@Param("login") String login);

}