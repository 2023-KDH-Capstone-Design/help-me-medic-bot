package com.capstonedesign.backend.domain.member.service;

import com.capstonedesign.backend.domain.member.Member;
import com.capstonedesign.backend.domain.member.repository.MemberRepositoryImpl;
import com.capstonedesign.backend.domain.member.service.dto.request.UpdateMemberRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

  private final MemberRepositoryImpl memberRepository;

  @Transactional
  public Long join(Member member) {
    memberRepository.save(member);

    return member.getId();
  }


  public Member findById(Long id) {

    return memberRepository.findById(id);
  }

  public Member findByName(String name) {

    return memberRepository.findByName(name);
  }

  public List<Member> findAll() {

    return memberRepository.findAll();
  }

  @Transactional
  public void updateMember(Long id, UpdateMemberRequestDTO updateMemberRequestDTO) {
    Member findMember = memberRepository.findById(id);

    if (findMember!= null) {
      findMember.setName(updateMemberRequestDTO.getName());
      findMember.setAge(updateMemberRequestDTO.getAge());
    }
  }

  @Transactional
  public void deleteById(Long id) {
    memberRepository.deleteById(id);
  }

}