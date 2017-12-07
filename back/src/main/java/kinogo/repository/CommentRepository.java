package kinogo.repository;

import kinogo.entity.Comment;
import kinogo.projection.CommentProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = CommentProjection.class)
public interface CommentRepository extends JpaRepository<Comment, Long>{
}
