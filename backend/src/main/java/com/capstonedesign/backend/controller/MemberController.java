package com.capstonedesign.backend.controller;

import com.capstonedesign.backend.domain.member.Member;
import com.capstonedesign.backend.domain.member.service.MemberService;
import com.capstonedesign.backend.domain.member.service.dto.request.JoinMemberRequestDTO;
import com.capstonedesign.backend.domain.member.service.dto.request.UpdateMemberRequestDTO;
import com.capstonedesign.backend.domain.member.service.dto.response.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Api(tags = "회원 관련 API")
public class MemberController {

  private final MemberService memberService;

  /**
   * 회원 가입
   */
  @PostMapping("/member/join")
  @ApiOperation(value = "회원가입 API", notes = "회원 정보를 요청값으로 받아 회원가입 진행")
  public JoinMemberResponseDTO joinMember(@RequestBody JoinMemberRequestDTO joinMemberRequestDTO) {

    Member member = new Member();
    member.setLoginId(joinMemberRequestDTO.getLoginId());
    member.setPassword(joinMemberRequestDTO.getPassword());
    member.setName(joinMemberRequestDTO.getName());
    member.setAge(joinMemberRequestDTO.getAge());
    Long joinId = memberService.join(member);

    return new JoinMemberResponseDTO(joinId);
  }

  /**
   * 회원 조회
   */
  @GetMapping("/member/list")
  @ApiOperation(value = "전체 회원 목록 조회 API", notes = "회원가입된 모든 회원 목록 조회")
  public ListMemberResponse<List<DetailMemberResponseDTO>> listMember() {

    List<Member> memberList = memberService.findAll();
    List<DetailMemberResponseDTO> listMemberData = memberList.stream().map(m -> new DetailMemberResponseDTO(m.getId(), m.getName(), m.getAge()))
        .collect(Collectors.toList());

    return new ListMemberResponse<>(listMemberData.size(), listMemberData);
  }

  /**
   * 회원 상세 조회
   */
  @GetMapping("/member/list/{memberId}")
  @ApiOperation(value = "회원 상세 조회 API", notes = "특정 회원 상세 정보 조회")
  public DetailMemberResponseDTO listDetailMember(@PathVariable Long memberId) {

    Member findMember = memberService.findById(memberId);

    return new DetailMemberResponseDTO(findMember.getId(), findMember.getName(), findMember.getAge());
  }

  /**
   * 회원 수정
   */
  @PatchMapping("/member/update/{memberId}")
  @ApiOperation(value = "회원 수정 API", notes = "요청받은 회원 정보 수정값에 따라 회원 수정")
  public UpdateMemberResponseDTO updateMember(@PathVariable Long memberId, @RequestBody UpdateMemberRequestDTO updateMemberRequestDTO) {

    memberService.updateMember(memberId, updateMemberRequestDTO);
    Member findMember = memberService.findById(memberId);

    return new UpdateMemberResponseDTO(findMember.getId(), findMember.getName(), findMember.getAge());
  }

  /**
   * 회원 삭제
   */
  @DeleteMapping("/member/delete/{memberId}")
  @ApiOperation(value = "회원 삭제 API", notes = "특정 회원의 가입 정보를 삭제")
  public DeleteMemberResponseDTO deleteMember(@PathVariable Long memberId) {

    memberService.deleteById(memberId);

    return new DeleteMemberResponseDTO(memberId);
  }
}
