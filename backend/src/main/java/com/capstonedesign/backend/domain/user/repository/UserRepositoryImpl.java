package com.capstonedesign.backend.domain.user.repository;

import com.capstonedesign.backend.domain.user.User;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepository {

  private final EntityManager em;

  @Override
  public void save(User user) {
    em.persist(user);
  }

  @Override
  public User findById(Long id) {

    return em.find(User.class, id);
  }

  @Override
  public User findByLoginId(String loginId) {
    return em.createQuery("select u from User u where u.loginId = :loginId", User.class)
        .setParameter("loginId", loginId)
        .getSingleResult();
  }

  @Override
  public User findByName(String name) {

    return em.createQuery("select u from User u where u.name = :name", User.class)
        .setParameter("name", name)
        .getSingleResult();
  }

  @Override
  public List<User> findAll() {

    return em.createQuery("select u from User u", User.class)
        .getResultList();
  }

  @Override
  public void deleteById(Long id) {

    User user = em.find(User.class, id);

    em.remove(user);
  }
}
