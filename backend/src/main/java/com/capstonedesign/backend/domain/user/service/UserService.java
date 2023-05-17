package com.capstonedesign.backend.domain.user.service;

import com.capstonedesign.backend.domain.user.User;
import com.capstonedesign.backend.domain.user.repository.UserRepositoryImpl;
import com.capstonedesign.backend.domain.user.service.dto.request.UpdateUserRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

  private final UserRepositoryImpl memberRepository;

  @Transactional
  public Long join(User user) {
    memberRepository.save(user);

    return user.getId();
  }


  public User findById(Long id) {

    return memberRepository.findById(id);
  }

  public User findByName(String name) {

    return memberRepository.findByName(name);
  }

  public List<User> findAll() {

    return memberRepository.findAll();
  }

  @Transactional
  public void updateMember(Long id, UpdateUserRequestDTO updateUserRequestDTO) {
    User findUser = memberRepository.findById(id);

    if (findUser != null) {
      findUser.setName(updateUserRequestDTO.getName());
      findUser.setAge(updateUserRequestDTO.getAge());
    }
  }

  @Transactional
  public void deleteById(Long id) {
    memberRepository.deleteById(id);
  }

}
