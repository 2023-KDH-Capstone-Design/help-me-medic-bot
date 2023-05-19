package com.capstonedesign.backend.domain.user.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ListUserDetailResponseDTO {

  private Long id;

  private String loginId;

  private String name;

  private String nickname;

  private String country;
}
