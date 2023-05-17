package com.capstonedesign.backend.domain.login.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponseDTO {

  private Long id;
  private String loginId;
  private String password;
  private String name;
  private int age;
}
