package com.capstonedesign.backend.controller;

import com.capstonedesign.backend.domain.user.User;
import com.capstonedesign.backend.domain.user.service.UserService;
import com.capstonedesign.backend.domain.user.service.dto.request.JoinUserRequestDTO;
import com.capstonedesign.backend.domain.user.service.dto.request.UpdateUserRequestDTO;
import com.capstonedesign.backend.domain.user.service.dto.response.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Api(tags = "회원 관련 API")
public class UserController {

  private final UserService userService;

  /**
   * 회원 가입
   */
  @PostMapping("/member/join")
  @ApiOperation(value = "회원가입 API", notes = "회원 정보를 요청값으로 받아 회원가입 진행")
  public JoinUserResponseDTO joinUser(@RequestBody JoinUserRequestDTO joinUserRequestDTO) {

    User user = new User();
    user.setLoginId(joinUserRequestDTO.getLoginId());
    user.setPassword(joinUserRequestDTO.getPassword());
    user.setName(joinUserRequestDTO.getName());
    user.setNickname(joinUserRequestDTO.getNickname());
    user.setCountry(joinUserRequestDTO.getCountry());
    Long joinId = userService.join(user);

    return new JoinUserResponseDTO(joinId);
  }

  /**
   * 회원 조회
   */
  @GetMapping("/member/list")
  @ApiOperation(value = "전체 회원 목록 조회 API", notes = "회원가입된 모든 회원 목록 조회")
  public ListUserResponse<List<ListUserDetailResponseDTO>> listUser() {

    List<User> userList = userService.findAll();
    List<ListUserDetailResponseDTO> listMemberData = userList.stream().map(m -> new ListUserDetailResponseDTO(m.getId(), m.getLoginId(), m.getName(), m.getNickname(), m.getCountry()))
        .collect(Collectors.toList());

    return new ListUserResponse<>(listMemberData.size(), listMemberData);
  }

  /**
   * 회원 상세 조회
   */
  @GetMapping("/member/list/{memberId}")
  @ApiOperation(value = "회원 상세 조회 API", notes = "특정 회원 상세 정보 조회")
  public ListUserDetailResponseDTO listUserDetail(@PathVariable Long memberId) {

    User findUser = userService.findById(memberId);

    return new ListUserDetailResponseDTO(findUser.getId(), findUser.getLoginId(), findUser.getName(), findUser.getNickname(), findUser.getCountry());
  }

  /**
   * 회원 수정
   */
  @PatchMapping("/member/update/{memberId}")
  @ApiOperation(value = "회원 수정 API", notes = "요청받은 회원 정보 수정값에 따라 회원 수정")
  public ResponseEntity<Long> updateUser(@PathVariable Long memberId, @RequestBody UpdateUserRequestDTO updateUserRequestDTO) {

    userService.update(memberId, updateUserRequestDTO);
    User findUser = userService.findById(memberId);

    return ResponseEntity.ok(findUser.getId());
  }

  /**
   * 회원 삭제
   */
  @DeleteMapping("/member/delete/{memberId}")
  @ApiOperation(value = "회원 삭제 API", notes = "특정 회원의 가입 정보를 삭제")
  public ResponseEntity<Object> deleteUser(@PathVariable Long memberId) {

    userService.delete(memberId);

    return ResponseEntity.noContent().build();
  }
}
