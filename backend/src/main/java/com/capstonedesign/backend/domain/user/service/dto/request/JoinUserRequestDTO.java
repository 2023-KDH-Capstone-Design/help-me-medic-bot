package com.capstonedesign.backend.domain.user.service.dto.request;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JoinUserRequestDTO {

  private String loginId;

  private String password;

  private String name;

  private String nickname;

  private String country;
}
