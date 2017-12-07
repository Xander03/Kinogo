package kinogo.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private int rating;

    @ManyToMany
    @JoinTable(name = "film_actor", joinColumns = {@JoinColumn(name = "film_id")}, inverseJoinColumns = {@JoinColumn(name = "actor_id")})
    private List<Actor> actors = new ArrayList<>();

    @OneToMany
    @JoinTable(name = "film_picture", joinColumns = {@JoinColumn(name = "picture_id")}, inverseJoinColumns = {@JoinColumn(name = "film_id")})
    private List<Picture> pictures = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "id")
    private Description description;

    @OneToMany
    @JoinColumn(name = "film_id")
    private List<Comment> comments = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<Actor> getActors() {
        return actors;
    }

    public void setActors(List<Actor> actors) {
        this.actors = actors;
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }

    public Description getDescription() {
        return description;
    }

    public void setDescription(Description description) {
        this.description = description;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public Film() {

    }

    public Film(String name, int rating, List<Actor> actors, List<Picture> pictures,
                Description description, List<Comment> comments) {
        super();
        this.name = name;
        this.actors = actors;
        this.pictures = pictures;
        this.description = description;
        this.comments = comments;
    }
}