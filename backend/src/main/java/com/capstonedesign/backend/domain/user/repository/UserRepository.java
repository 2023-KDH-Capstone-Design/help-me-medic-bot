package com.capstonedesign.backend.domain.user.repository;

import com.capstonedesign.backend.domain.user.User;

import java.util.List;

public interface UserRepository {

  void save(User user);

  User findById(Long id);

  User findByLoginId(String loginId);

  User findByName(String name);

  List<User> findAll();

  void deleteById(Long id);
}
